import {
  Code2,
  Database,
  Lock,
  Zap,
  Server,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    name: "Next.js Frontend",
    description: "Modern React framework with server-side rendering and static site generation capabilities.",
    icon: Code2,
  },
  {
    name: "Django Backend",
    description: "Robust Python web framework with built-in admin interface and ORM.",
    icon: Server,
  },
  {
    name: "REST API",
    description: "Django REST framework for building powerful Web APIs.",
    icon: RefreshCw,
  },
  {
    name: "Database Integration",
    description: "Seamless integration with PostgreSQL for reliable data storage.",
    icon: Database,
  },
  {
    name: "Authentication",
    description: "Secure user authentication and authorization system.",
    icon: Lock,
  },
  {
    name: "Fast Performance",
    description: "Optimized for speed with server-side rendering and caching.",
    icon: Zap,
  },
];

export function FeatureSection() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Everything you need to build modern web apps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete solution for building full-stack web applications
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative rounded-2xl border p-8 transition-all hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{feature.name}</h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}