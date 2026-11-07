import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Browse Jobs", href: "#" },
  { label: "Company", href: "#" },
  { label: "Pricing", href: "#" },
]

export default function Navbar({ className }: { className?: string }) {
  return (
    <header
      data-slot="navbar"
      className={cn("w-full px-4 py-4 sm:px-10", className)}
    >
      <div
        data-slot="navbar-container"
        className="mx-auto flex h-12 w-full max-w-7xl items-center justify-between gap-4 rounded-xl border bg-card px-4 sm:px-5"
      >
        <Link
          href="/"
          aria-label="Hireloop home"
          className="flex items-center gap-0.5 text-lg font-bold tracking-tight"
        >
          <span className="text-blue-500">hire</span>
          <span aria-hidden="true" className="size-2 rounded-full bg-blue-500" />
          <span className="text-orange-500">loop</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <span
            aria-hidden="true"
            className="hidden h-5 w-px bg-border md:block"
          />

          <Link
            href="#"
            className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Sign In
          </Link>

          <Button className="bg-indigo-500 text-white hover:bg-indigo-500/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}