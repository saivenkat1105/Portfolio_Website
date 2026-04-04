"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    const onCustomTrigger = () => setOpen(true);
    document.addEventListener("keydown", down);
    document.addEventListener("open-command-palette", onCustomTrigger);
    
    return () => {
      document.removeEventListener("keydown", down);
      document.removeEventListener("open-command-palette", onCustomTrigger);
    }
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] pointer-events-none">
        <Command 
          className="w-[90vw] max-w-lg rounded-xl border border-border bg-card text-card-foreground shadow-2xl overflow-hidden pointer-events-auto"
          label="Global Command Menu"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <div className="flex items-center border-b border-border px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input 
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" 
              placeholder="Type a command or search..." 
              autoFocus
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>
            
            <Command.Group heading="Navigation">
              <Command.Item 
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                onSelect={() => runCommand(() => router.push("/"))}
              >
                Introduction
              </Command.Item>
              <Command.Item 
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                onSelect={() => runCommand(() => router.push("/about"))}
              >
                About
              </Command.Item>
              <Command.Item 
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                onSelect={() => runCommand(() => router.push("/projects"))}
              >
                Projects
              </Command.Item>
              <Command.Item 
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                onSelect={() => runCommand(() => router.push("/skills"))}
              >
                Skills & Tools
              </Command.Item>
              <Command.Item 
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                onSelect={() => runCommand(() => router.push("/experience"))}
              >
                Experience
              </Command.Item>
              <Command.Item 
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                onSelect={() => runCommand(() => router.push("/education"))}
              >
                Education
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
