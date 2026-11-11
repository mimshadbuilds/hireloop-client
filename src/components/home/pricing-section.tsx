"use client";

import { useState } from "react";
import { ArrowRight, ChartColumn, Crown, Plus, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    icon: Crown,
    monthly: 0,
    yearly: 0,
    features: [
      "Daily AI march brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    icon: ChartColumn,
    monthly: 17,
    yearly: 14,
    features: [
      "Daily AI march brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    icon: Zap,
    monthly: 99,
    yearly: 79,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="bg-[#050505] px-4 py-16 sm:px-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase sm:text-sm sm:tracking-[0.3em]">
            <span className="size-1.5 bg-violet-500" aria-hidden="true" />
            Pricing
            <span className="size-1.5 bg-violet-500" aria-hidden="true" />
          </div>

          <h2 className="mt-5 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pay for the leverage, not the listings
          </h2>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <div className="inline-flex items-center rounded-full bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition-colors sm:px-5 sm:py-2 sm:text-sm",
                billing === "monthly"
                  ? "bg-white text-black"
                  : "text-neutral-400 hover:text-white",
              )}>
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-colors sm:px-5 sm:py-2 sm:text-sm",
                billing === "yearly"
                  ? "bg-white text-black"
                  : "text-neutral-400 hover:text-white",
              )}>
              Yearly
              <span className="rounded-full bg-pink-600 px-1.5 py-0.5 text-[0.6rem] font-semibold text-white sm:text-[0.65rem]">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {plans.map(({ name, icon: Icon, monthly, yearly, features, highlighted }) => {
            const price = billing === "monthly" ? monthly : yearly;

            return (
              <Card
                key={name}
                className={cn(
                  "gap-0 rounded-2xl py-6 sm:min-h-[430px] sm:py-8",
                  highlighted
                    ? "bg-[#161616] ring-white/20"
                    : "bg-[#0f0f0f] ring-white/10",
                )}>
                <CardHeader className="gap-3 px-5 pb-0 sm:px-6">
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className={cn(
                        "size-5",
                        highlighted ? "text-white" : "text-violet-400",
                      )}
                      aria-hidden="true"
                    />
                    <CardTitle className="text-base font-semibold text-white sm:text-lg">
                      {name}
                    </CardTitle>
                  </div>

                  <CardAction className="flex items-baseline gap-1 text-white">
                    <span className="text-2xl font-bold sm:text-3xl">
                      ${price}
                    </span>
                    <span className="text-xs text-neutral-400">/month</span>
                  </CardAction>
                </CardHeader>

                <div
                  aria-hidden="true"
                  className="mx-5 h-px bg-white/10 sm:mx-6"
                />

                <CardContent className="mt-6 flex flex-1 flex-col px-5 sm:px-6">
                  <p className="text-sm font-semibold text-white">
                    Start building your insights hub.
                  </p>

                  <ul className="mt-6 flex flex-1 flex-col justify-between gap-4">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs text-neutral-400 sm:text-[0.8rem]">
                        <Plus
                          className="mt-0.5 size-3.5 shrink-0 text-neutral-500"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto rounded-b-2xl border-t-0 bg-transparent p-0 px-5 pt-8 pb-6 sm:px-6 sm:pb-8">
                  <Button
                    className={cn(
                      "h-10 w-full gap-2",
                      highlighted
                        ? "bg-white text-black hover:bg-neutral-200"
                        : "border border-white/10 bg-white/5 text-white hover:bg-white/10",
                    )}>
                    Choose This Plan
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
