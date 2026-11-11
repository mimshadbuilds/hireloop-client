"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import AuthUser from "./AuthUser"

const navLinks = [
  { label: "Browse Jobs", href: "#" },
  { label: "Company", href: "#" },
  { label: "Pricing", href: "#" },
]

export default function Navbar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header
      data-slot="navbar"
      className={cn("relative z-50 w-full px-4 py-4 sm:px-10", className)}>
      <div
        data-slot="navbar-container"
        className="mx-auto flex h-12 w-full max-w-7xl items-center justify-between gap-4 rounded-xl border bg-card px-4 sm:px-5">
        <Link href="/"
          aria-label="Hireloop home"
          className="flex items-center gap-0.5 text-lg font-bold tracking-tight">
          <span className="text-blue-500">hire</span>
          <span aria-hidden="true" className="size-2 rounded-full bg-blue-500" />
          <span className="text-orange-500">loop</span>
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <nav aria-label="Main" className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
          <span aria-hidden="true" className="h-5 w-px bg-border" />
          <AuthUser />
        </div>

        <Button
          variant="ghost"
          size="icon-lg"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <div id="mobile-menu"
          className="absolute inset-x-4 top-full mt-2 sm:inset-x-10 md:hidden">
          <div className="mx-auto max-w-7xl rounded-xl border bg-card p-3 shadow-xl">
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-base text-foreground transition-colors hover:bg-muted">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="my-3 h-px bg-border" />
            <div className="flex justify-center py-2">
              <AuthUser />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
