"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sections = [
  { name: "Introduction", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills & Tools", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block border-r border-border w-[240px] shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-4 py-8">
      <h4 className="font-medium text-sm px-2 pb-2">Sections</h4>
      <div className="flex flex-col gap-1 text-sm">
        {sections.map((sec) => {
          const isActive = pathname === sec.path;
          return (
            <Link
              key={sec.path}
              href={sec.path}
              className={cn(
                "flex h-8 items-center rounded-md px-2 transition-colors hover:bg-accent hover:text-accent-foreground",
                isActive ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground"
              )}
            >
              {sec.name}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
