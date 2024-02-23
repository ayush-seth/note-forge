"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function Navbar() {
  const scrolled = useScrollTop();

  return (
    <nav
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center p-6 w-full dark:bg-[#1F1F1F]",
        scrolled && "border-border shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between flex items-center gap-2">
        <ThemeToggle />
      </div>
    </nav>
  );
}
