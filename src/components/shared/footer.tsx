import type { ReactNode } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const footerColumns = [
  {
    heading: "Product",
    links: ["Job discovery", "Worker AI", "Companies", "Salary data"],
  },
  {
    heading: "Navigations",
    links: ["Help center", "Career library", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Brand Guideline", "Newsroom"],
  },
];

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-300 transition-colors hover:bg-white/10 hover:text-white">
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <>
      {/* CTA */}
      <section className="relative overflow-hidden bg-[#050505]">
        {/* Wireframe dome */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 620"
          className="pointer-events-none absolute top-0 left-1/2 w-[130vw] max-w-[1600px] -translate-x-1/2">
          <defs>
            <radialGradient id="dome-glow" cx="50%" cy="14%" r="68%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#4f46e5" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#312e81" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="dome-lines"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="40"
              x2="0"
              y2="880">
              <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.6" />
              <stop offset="45%" stopColor="#a5b4fc" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.04" />
            </linearGradient>
          </defs>

          <circle cx="600" cy="640" r="600" fill="url(#dome-glow)" />

          <g fill="none" stroke="url(#dome-lines)" strokeWidth="1.5">
            {/* outline */}
            <circle cx="600" cy="640" r="600" />
            {/* latitudes */}
            <ellipse cx="600" cy="520" rx="588" ry="105" />
            <ellipse cx="600" cy="400" rx="550" ry="99" />
            <ellipse cx="600" cy="280" rx="480" ry="86" />
            <ellipse cx="600" cy="160" rx="360" ry="65" />
            <ellipse cx="600" cy="90" rx="240" ry="43" />
            {/* meridians */}
            <ellipse cx="600" cy="640" rx="100" ry="600" />
            <ellipse cx="600" cy="640" rx="250" ry="600" />
            <ellipse cx="600" cy="640" rx="400" ry="600" />
            <ellipse cx="600" cy="640" rx="520" ry="600" />
          </g>
        </svg>

        {/* Smooth fade into the footer background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-[#050505]"
        />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:min-h-[500px] sm:px-10">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your next role is already looking for you
          </h2>

          <p className="mt-4 max-w-md text-sm text-neutral-400 sm:text-base">
            Build a profile in three minutes. The matches start arriving tomorrow
            morning.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/signup"
              className={cn(
                buttonVariants(),
                "h-11 bg-white px-6 text-black hover:bg-neutral-200",
              )}>
              Create a free account
            </Link>
            <Button className="h-11 border border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
              View pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] px-4 pt-12 pb-8 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="lg:col-span-1">
            <Link
              href="/"
              aria-label="Hireloop home"
              className="flex items-center gap-0.5 text-2xl font-bold tracking-tight">
              <span className="text-blue-500">hire</span>
              <span
                aria-hidden="true"
                className="size-2.5 rounded-full bg-blue-500"
              />
              <span className="text-orange-500">loop</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <SocialIcon label="Facebook" href="#">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                  aria-hidden="true">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.5V13h2.8v8h3.2z" />
                </svg>
              </SocialIcon>

              <SocialIcon label="Instagram" href="#">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-4"
                  aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.2"
                    cy="6.8"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </SocialIcon>

              <SocialIcon label="LinkedIn" href="#">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                  aria-hidden="true">
                  <path d="M6.5 9.5V21" />
                  <path d="M6.5 6.2v.1" />
                  <path d="M11 21v-6.3c0-1.6 1.1-2.7 2.6-2.7s2.5 1.1 2.5 2.7V21" />
                  <path d="M11 12v9" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:contents">
            {footerColumns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h3 className="text-sm font-semibold text-blue-500">
                  {column.heading}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-neutral-400 transition-colors hover:text-white">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-500">
            Copyright 2027 — portfolio-mr.web.app
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-500">
            <Link href="#" className="transition-colors hover:text-white">
              Terms &amp; Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
