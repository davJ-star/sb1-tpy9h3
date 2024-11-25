"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { GanttChart } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <GanttChart className="h-6 w-6" />
            <span className="text-xl font-bold">NextDjango</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}