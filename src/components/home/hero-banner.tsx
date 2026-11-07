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

export default function Banner () {
  return (
    <section className="relative isolate overflow-hidden bg-[#050505] text-white py-5">
      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-20 text-center sm:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px]">
            <span aria-hidden="true">📦</span>
            <span className="font-semibold text-white">50,000+</span>
            <span className="tracking-wider text-gray-500">
              NEW JOBS THIS MONTH
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-balance sm:text-3xl lg:text-5xl">
            Find Your Dream Job Today
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-normal text-gray-400">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </p>

          <form className="mt-3 flex h-9 w-full max-w-md items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-1 pl-3.5">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <Search aria-hidden="true" className="size-3.5 shrink-0 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full min-w-0 bg-transparent text-xs text-white outline-none placeholder:text-gray-400"
              />
            </div>
            <span aria-hidden="true" className="h-5 w-px bg-white/10" />
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <MapPin aria-hidden="true" className="size-3.5 shrink-0 text-gray-400" />
              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full min-w-0 bg-transparent text-xs text-white outline-none placeholder:text-gray-400"
              />
            </div>
            <Button
              type="button"
              size="icon-sm"
              aria-label="Search"
              className="bg-indigo-500 text-white hover:bg-indigo-500/90"
            >
              <Search />
            </Button>
          </form>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-gray-500">Trending Position</span>
            {trendingPositions.map((position) => (
              <span
                key={position}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
              >
                {position}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-[1] mx-auto mt-16 max-w-7xl px-4 pb-14 sm:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 z-0 aspect-[1440/1882] w-[102%] max-w-[1000px] -translate-x-1/2 -translate-y-[37%] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_16%,black_26%)] [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_16%,black_26%)]"
          >
            <Image
              src="/assets/images/globe.png"
              alt=""
              fill
              sizes="(max-width: 1000px) 102vw, 1000px"
              className="object-cover"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 -top-[420px] z-[1]"
          >
            {stars.map((star) => (
              <span
                key={`globe-${star.top}-${star.left}`}
                className="absolute size-0.5 rounded-full bg-white/60"
                style={{ top: star.top, left: star.left }}
              />
            ))}
          </div>

          <p className="relative z-[2] pt-60 text-center text-lg leading-6">
            Assisting over 15,000 job seekers
            <br />
            find their dream positions.
          </p>

          <div className="relative z-2 mt-6 mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex min-h-[170px] flex-col justify-center rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-5 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                <Icon aria-hidden="true" className="size-5 text-gray-400" />
                <p className="mt-5 text-3xl leading-none font-bold tracking-tight sm:text-4xl">
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
