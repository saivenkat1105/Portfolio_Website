"use client";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sections = [
  { name: "About Me", id: "about" },
  { name: "Tech Stack", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" }
];

export function Sidebar() {
  const activeSection = useActiveSection(sections.map(s => s.id));

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
      document.dispatchEvent(new CustomEvent("close-project-modal"));
    }
  };

  return (
    <aside className="hidden md:block border-r border-border w-[240px] shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-4 py-8 relative z-50 bg-background">
      <div className="flex flex-col gap-1 text-sm">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={(e) => onClick(e, sec.id)}
              className={cn(
                "flex h-8 items-center rounded-md px-2 transition-colors hover:bg-accent hover:text-accent-foreground",
                isActive ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground"
              )}
            >
              {sec.name}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
