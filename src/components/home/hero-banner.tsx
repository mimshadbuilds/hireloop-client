import { Briefcase, ChartColumn, MapPin, Search, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const stars = [
  { top: "8%", left: "12%" },
  { top: "14%", left: "78%" },
  { top: "6%", left: "55%" },
  { top: "22%", left: "30%" },
  { top: "18%", left: "90%" },
  { top: "28%", left: "8%" },
  { top: "12%", left: "40%" },
  { top: "34%", left: "68%" },
  { top: "24%", left: "52%" },
  { top: "40%", left: "18%" },
  { top: "10%", left: "66%" },
  { top: "30%", left: "85%" },
  { top: "38%", left: "45%" },
  { top: "44%", left: "75%" },
]

const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
]

const stats = [
  { icon: Briefcase, value: "50K", label: "Active Jobs" },
  { icon: ChartColumn, value: "12K", label: "Companies" },
  { icon: Search, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

export default function Banner() {
    return (
    <section className="relative isolate overflow-hidden bg-[#050505] text-white">
        <div className="relative z-10">
            <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-12 text-center sm:px-10 sm:pt-20">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs sm:gap-3 sm:px-5 sm:py-2.5 sm:text-sm">
                    <span aria-hidden="true">📦</span>
                    <span className="font-semibold text-white">50,000+</span>
                    <span className="tracking-wider text-gray-500">
                    NEW JOBS THIS MONTH
                    </span>
                </div>
                <h1 className="mt-4 text-2xl font-bold tracking-tight text-balance sm:text-3xl lg:text-5xl">
                    Find Your Dream Job Today
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-normal text-gray-400 sm:text-base">
                    HireLoop connects top talent with world-class companies. Browse
                    thousands of curated opportunities and land your next role — faster.
                </p>
            <form className="mt-4 flex w-full max-w-md flex-col gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] p-1.5 sm:h-9 sm:flex-row sm:items-center sm:gap-2 sm:p-1 sm:pl-3.5">
                <div className="flex min-w-0 flex-1 items-center gap-2 px-2 sm:px-0">
                    <Search aria-hidden="true"
                    className="size-3.5 shrink-0 text-gray-400" 
                    />
                <input type="text"
                    placeholder="Job title, skill or company"
                    className="w-full min-w-0 bg-transparent text-xs text-white outline-none placeholder:text-gray-400 sm:text-sm"
                />
                </div>
                    <span
                    aria-hidden="true"
                    className="mx-2 h-px bg-white/10 sm:mx-0 sm:h-5 sm:w-px"
                    />
                <div className="flex min-w-0 flex-1 items-center gap-2 px-2 sm:px-0">
                    <MapPin
                        aria-hidden="true"
                        className="size-3.5 shrink-0 text-gray-400"
                    />
                <input type="text"
                    placeholder="Location or Remote"
                    className="w-full min-w-0 bg-transparent text-xs text-white outline-none placeholder:text-gray-400 sm:text-sm"
                />
                </div>
                <Button
                type="button"
                aria-label="Search"
                className="h-9 w-full bg-indigo-500 text-white hover:bg-indigo-500/90 sm:h-7 sm:w-7">
                <Search />
                </Button>
            </form>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs text-gray-500 sm:text-sm">
                Trending Position
                </span>
                {trendingPositions.map((position) => (
                <span
                    key={position}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300 sm:px-3 sm:text-sm">
                    {position}
                </span>
                ))}
            </div>
            </div>

            <div className="relative z-[1] mx-auto mt-8 max-w-7xl px-4 pb-14 sm:mt-12 sm:px-10">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 z-0 aspect-[1440/1882] w-[102vw] -translate-x-1/2 -translate-y-[37%] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_16%,black_26%)] [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_16%,black_26%)]">
                <Image
                src="/assets/images/globe.png"
                alt=""
                fill
                sizes="102vw"
                className="object-cover"
                />
            </div>

            <div aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 -top-[420px] z-[1]">
                {stars.map((star) => (
                <span
                    key={`globe-${star.top}-${star.left}`}
                    className="absolute size-0.5 rounded-full bg-white/60"
                    style={{ top: star.top, left: star.left }}
                />
                ))}
            </div>

            <p className="relative z-[2] pt-[20.5vw] text-center text-base leading-6 md:text-xl">
                Assisting over 15,000 job seekers
                <br />
                find their dream positions.
            </p>

            <div className="relative z-[2] mx-auto mt-6 grid w-full max-w-7xl grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map(({ icon: Icon, value, label }) => (
                <div
                    key={label}
                    className="flex min-h-[150px] flex-col justify-center rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-5 text-left sm:min-h-[170px]"
                >
                    <Icon aria-hidden="true" className="size-5 text-gray-400" />
                    <p className="mt-5 text-3xl leading-none font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    {value}
                    </p>
                    <p className="mt-2 text-sm text-gray-400">{label}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
    </section>
    )
}
