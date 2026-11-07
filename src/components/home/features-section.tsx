import {
  Bookmark,
  Building,
  ChartColumn,
  Circle,
  FileText,
  MousePointerClick,
  Search,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
  },
  {
    icon: ChartColumn,
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
  },
  {
    icon: Building,
    title: "Top Companies",
    description: "Apply to verified companies that are hiring.",
  },
  {
    icon: Bookmark,
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
  },
  {
    icon: MousePointerClick,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
  },
  {
    icon: Circle,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#050505] px-4 py-16 sm:px-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase sm:text-sm sm:tracking-[0.3em]">
            <span className="size-1.5 bg-blue-500" aria-hidden="true" />
            Features Job
            <span className="size-1.5 bg-blue-500" aria-hidden="true" />
          </div>

          <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything you need to succeed
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0f0f0f]">
                <Icon className="size-5 text-white" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-white sm:text-[0.95rem]">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-400 sm:text-[0.8rem]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
