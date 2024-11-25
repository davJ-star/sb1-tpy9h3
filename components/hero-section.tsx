import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-4xl py-12 sm:py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Next.js + Django:
            <span className="block text-primary">Modern Web Development</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Build scalable web applications with Next.js for the frontend and Django for the backend.
            Leverage the best of both worlds with this powerful tech stack.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">
                Documentation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}