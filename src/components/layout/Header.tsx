"use client";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const int = setInterval(updateTime, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-14 max-w-screen-2xl mx-auto px-4 lg:px-8">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2 font-bold tracking-tight">
            Sai Venkat
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground text-foreground">Home</Link>
            <a href="https://linkedin.com/in/sai-venkat-gunda" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-foreground">
              LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
            </a>
            <a href="/Sai_Venkat_CV.pdf" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-foreground">
              Resume <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex items-center gap-2 border border-border/40 bg-muted/30 px-3 py-1.5 rounded-full text-xs font-medium tabular-nums text-foreground">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </div>
            {time || "00:00:00"}
          </div>
          <nav className="flex items-center gap-1.5">
            <div className="hidden md:block">
              <button 
                className="inline-flex text-muted-foreground items-center justify-center rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 text-sm font-medium transition-colors"
                onClick={() => document.dispatchEvent(new CustomEvent("open-command-palette"))}
              >
                Search... <kbd className="ml-2 pointer-events-none rounded border border-border bg-muted px-1.5 font-mono text-[10px]">&nbsp;⌘K&nbsp;</kbd>
              </button>
            </div>
            <ThemeToggle />
            <a href="https://github.com/saivenkat1105" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent text-muted-foreground hover:text-accent-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[1.2rem] w-[1.2rem]"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span className="sr-only">GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
