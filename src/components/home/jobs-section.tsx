import { ArrowRight, Briefcase, Coins, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "Frontend Developer",
    description:
      "Build pixel-perfect interfaces with modern frameworks and collaborate with designers to ship delightful user experiences.",
    location: "New York USA",
    type: "Hybrid",
    rate: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    description:
      "Build pixel-perfect interfaces with modern frameworks and collaborate with designers to ship delightful user experiences.",
    location: "New York USA",
    type: "Hybrid",
    rate: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    description:
      "Build pixel-perfect interfaces with modern frameworks and collaborate with designers to ship delightful user experiences.",
    location: "New York USA",
    type: "Hybrid",
    rate: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    description:
      "Build pixel-perfect interfaces with modern frameworks and collaborate with designers to ship delightful user experiences.",
    location: "New York USA",
    type: "Hybrid",
    rate: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    description:
      "Build pixel-perfect interfaces with modern frameworks and collaborate with designers to ship delightful user experiences.",
    location: "New York USA",
    type: "Hybrid",
    rate: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    description:
      "Build pixel-perfect interfaces with modern frameworks and collaborate with designers to ship delightful user experiences.",
    location: "New York USA",
    type: "Hybrid",
    rate: "€25–€40/hour",
  },
];

function Chip({ icon: Icon, label }: { icon: typeof MapPin; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-neutral-300 sm:text-[0.8rem]">
      <Icon className="size-3.5 text-pink-500" aria-hidden="true" />
      {label}
    </span>
  );
}

export default function JobsSection() {
  return (
    <section className="bg-[#050505] px-4 py-16 sm:px-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase sm:text-sm sm:tracking-[0.3em]">
            <span className="size-1.5 bg-indigo-500" aria-hidden="true" />
            Smart Job Discovery
            <span className="size-1.5 bg-indigo-500" aria-hidden="true" />
          </div>

          <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The roles you’d never find by searching
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <article
              key={index}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#0f0f0f] p-5 transition-colors hover:border-white/20 sm:p-6"
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {job.title}
              </h3>

              <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-neutral-400">
                {job.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Chip icon={MapPin} label={job.location} />
                <Chip icon={Briefcase} label={job.type} />
                <Chip icon={Coins} label={job.rate} />
              </div>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-white transition-colors hover:text-neutral-300"
              >
                Apply Now
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Button className="h-11 bg-white px-6 text-black hover:bg-neutral-200">
            View all job open
          </Button>
        </div>
      </div>
    </section>
  );
}
