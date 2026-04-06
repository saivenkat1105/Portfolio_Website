"use client";

import { useState, useEffect, useRef } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");
  // Stable ref to avoid re-creating the observer on every render
  const sectionIdsRef = useRef(sectionIds);
  sectionIdsRef.current = sectionIds;

  useEffect(() => {
    const ids = sectionIdsRef.current;

    // Helper: find which section is most visible right now
    const getMostVisible = () => {
      let best = "";
      let bestScore = -Infinity;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight;
        // How many pixels of the section are in the viewport
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, windowH);
        const visible = visibleBottom - visibleTop;
        if (visible > bestScore) {
          bestScore = visible;
          best = id;
        }
      });
      return best;
    };

    // Immediately snap to whatever is visible on mount / navigation
    const initial = getMostVisible();
    if (initial) setActiveSection(initial);

    const observer = new IntersectionObserver(
      () => {
        // On any change, re-evaluate all sections at once
        const most = getMostVisible();
        if (most) setActiveSection(most);
      },
      {
        rootMargin: "-10% 0px -40% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Also update on scroll (handles fast scrolling that misses IO callbacks)
    const onScroll = () => {
      const most = getMostVisible();
      if (most) setActiveSection(most);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener("scroll", onScroll);
    };
    // Only re-run if the list of IDs actually changes (use JSON for stable compare)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(sectionIds)]);

  return activeSection;
}
