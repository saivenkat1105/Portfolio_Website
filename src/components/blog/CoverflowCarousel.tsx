"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { asset } from "@/lib/assets";

interface CoverflowCarouselProps {
  posts: BlogPost[];
  currentSlug?: string; // highlight/exclude current article
}

export function CoverflowCarousel({ posts, currentSlug }: CoverflowCarouselProps) {
  const displayPosts = currentSlug
    ? posts.filter((p) => p.slug !== currentSlug)
    : posts;

  const [activeIndex, setActiveIndex] = useState(Math.floor(displayPosts.length / 2));
  const containerRef = useRef<HTMLDivElement>(null);

  if (displayPosts.length === 0) return null;

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(displayPosts.length - 1, i + 1));

  return (
    <div className="relative w-full">
      {/* Carousel container */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center h-[420px] overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        {displayPosts.map((post, idx) => {
          const offset = idx - activeIndex;
          const absOffset = Math.abs(offset);

          // Only render cards within visible range
          if (absOffset > 2) return null;

          const rotateY = offset * 40; // degrees
          const translateX = offset * 55; // % offsets for spacing
          const scale = 1 - absOffset * 0.15;
          const opacity = 1 - absOffset * 0.3;
          const zIndex = 10 - absOffset;
          const isActive = idx === activeIndex;

          return (
            <motion.div
              key={post.slug}
              animate={{
                rotateY,
                x: `${translateX}%`,
                scale,
                opacity,
                zIndex,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-[280px] sm:w-[320px] cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => {
                if (!isActive) {
                  setActiveIndex(idx);
                }
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                onClick={(e) => {
                  if (!isActive) {
                    e.preventDefault();
                    setActiveIndex(idx);
                  }
                }}
                tabIndex={isActive ? 0 : -1}
              >
                {/* Card */}
                <div
                  className={`relative rounded-[1.5rem] overflow-hidden border shadow-xl transition-shadow duration-300 ${
                    isActive
                      ? "border-primary/50 shadow-primary/20"
                      : "border-border shadow-black/10"
                  }`}
                  style={{ height: "360px" }}
                >
                  {/* Background image */}
                  <img
                    src={asset(post.coverImage)}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/80 text-primary-foreground backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="text-base font-extrabold leading-tight mb-1.5 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-white/70 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-1.5 mt-3 text-white/50 text-[10px]">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Active ring glow */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-[1.5rem] ring-2 ring-primary/60 pointer-events-none" />
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={prev}
          disabled={activeIndex === 0}
          className="p-2 rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous article"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {displayPosts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-muted-foreground/30"
              }`}
              aria-label={`Go to article ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={activeIndex === displayPosts.length - 1}
          className="p-2 rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next article"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* "Read Article" CTA for active card */}
      {displayPosts[activeIndex] && (
        <div className="flex justify-center mt-4">
          <Link
            href={`/blog/${displayPosts[activeIndex].slug}`}
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all"
          >
            Read Article →
          </Link>
        </div>
      )}
    </div>
  );
}
