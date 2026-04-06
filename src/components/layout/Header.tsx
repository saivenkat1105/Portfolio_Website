"use client";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { ExternalLink } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all">
      <div className="container flex h-14 max-w-screen-2xl mx-auto px-4 lg:px-8">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2 font-bold tracking-tight text-lg">
            Sai Venkat
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground text-foreground">Home</Link>
            <Link href="/blog" className="transition-colors hover:text-foreground text-muted-foreground">Blog</Link>
            <a href="https://linkedin.com/in/sai-venkat-gunda" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-foreground">
              LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-foreground">
              Resume <ExternalLink className="ml-1 h-3 w-3" />
            </a>
            <a href="https://github.com/saivenkat1105" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-foreground">
              GitHub <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center gap-1.5">
            <div className="hidden md:block">
              <button 
                className="inline-flex text-muted-foreground items-center justify-center rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 text-sm font-medium transition-colors cursor-pointer"
                onClick={() => document.dispatchEvent(new CustomEvent("open-command-palette"))}
              >
                Search... <kbd className="ml-2 pointer-events-none rounded border border-border bg-muted px-1.5 font-mono text-[10px]">&nbsp;⌘K&nbsp;</kbd>
              </button>
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
