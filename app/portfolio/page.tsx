import { DatabaseOutlined } from "../component/antd";
import Image from "next/image";
import React from "react";

const featuredProjects = [
  {
    title: "MechLink",
    image: "/images/MechLink.png",
    summary:
      "Location-based service marketplace connecting vehicle owners with trusted mechanics through quoting, chat, and job tracking.",
    role: "Full-stack product engineering, backend architecture, and frontend MVP delivery.",
    impact: "40% faster quote turnaround and a 25% lift in first-time customer conversion during pilot rollout.",
    stack: ["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL", "Prisma"],
    href: "https://mech-link-web.vercel.app/",
    cta: "View site",
    featured: true,
  },
  {
    title: "CarTrims",
    image: "/images/cartrims.png",
    summary:
      "Vehicle marketplace built for buying, selling, and bidding with wallet funding and verified listings.",
    role: "Frontend implementation across responsive web experiences and product UX improvements.",
    impact: "Helped deliver a smoother browsing and bidding flow for a high-growth marketplace experience.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Native"],
    href: "https://carstrims.com/",
    cta: "View site",
  },
  {
    title: "TrendEcho",
    image: "/images/trendecho.jpg",
    summary:
      "Fast and lightweight news reader designed around clarity, accessibility, and frictionless reading.",
    role: "Frontend development with emphasis on responsive layout and content readability.",
    impact: "Improved reading comfort across mobile and desktop through a simple, high-speed interface.",
    stack: ["Next.js", "Tailwind CSS", "Responsive UI"],
    href: "https://trendecho.vercel.app/",
    cta: "View site",
  },
  {
    title: "VanLife",
    image: "/images/vanlife.jpg",
    summary:
      "Van rental app focused on intuitive search, booking flow clarity, and a clean browsing experience.",
    role: "Frontend build with reusable components and simplified booking interactions.",
    impact: "Created a streamlined rental journey that keeps users focused on availability and selection.",
    stack: ["React", "CSS", "Routing", "Reusable Components"],
    href: "https://vanslifeapp.netlify.app/",
    cta: "View site",
  },
  {
    title: "Tenzies",
    image: "/images/Tenzies.jpg",
    summary:
      "Interactive dice game showcasing state management, responsive feedback, and polished play loops.",
    role: "Frontend development centered on game state, component interaction, and UI responsiveness.",
    impact: "Demonstrated clean component design and engaging moment-to-moment interaction patterns.",
    stack: ["React", "JavaScript", "State Management", "UX Polish"],
    href: "https://tenziiesgame.netlify.app/",
    cta: "View site",
  },
  {
    title: "Quizzcal",
    image: "/images/quizzcal.jpg",
    summary:
      "Interactive quiz experience with persistent user progress and focused practice sessions.",
    role: "Frontend development with attention to persistence, user flow, and interactive feedback.",
    impact: "Supported repeat practice sessions through saved progress and clear answer-driven interactions.",
    stack: ["React", "Firebase", "Tailwind CSS", "User Persistence"],
    href: "https://quizzcalapp.netlify.app/",
    cta: "View site",
  },
];

const Portfolio = () => {
  return (
    <div className="space-y-8 sm:space-y-10">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-dotted border-green-500/70 pb-4 text-green-500">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-green-300">
            Selected Work
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Portfolio
          </h1>
        </div>
        <DatabaseOutlined />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
        <div className="rounded-3xl border border-green-500/40 bg-black/25 p-5 shadow-lg shadow-black/20 backdrop-blur-sm sm:p-7">
          <p className="max-w-3xl text-base leading-relaxed text-gray-200 sm:text-lg">
            A curated selection of products I have built across marketplaces,
            service platforms, and interactive web experiences. Each project is
            shaped by a mix of product thinking, frontend polish, and reliable
            backend delivery.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-2xl border border-green-500/30 bg-gray-900/65 p-4 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-green-400">
              Projects
            </p>
            <p className="mt-2 text-3xl font-bold text-white">
              {featuredProjects.length}
            </p>
          </div>
          <div className="rounded-2xl border border-green-500/30 bg-gray-900/65 p-4 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-green-400">
              Focus
            </p>
            <p className="mt-2 text-base font-semibold text-white">
              Full-stack products with strong UX execution
            </p>
          </div>
          <div className="rounded-2xl border border-green-500/30 bg-gray-900/65 p-4 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-green-400">
              Strength
            </p>
            <p className="mt-2 text-base font-semibold text-white">
              Shipping responsive, production-ready experiences
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className={`overflow-hidden rounded-3xl border p-5 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-2xl sm:p-6 ${
              project.featured
                ? "border-green-500 bg-gradient-to-br from-green-950/40 via-gray-900/95 to-gray-950 xl:col-span-2"
                : "border-green-500/30 bg-gray-900/70"
            }`}
          >
            <div
              className={`grid gap-6 ${
                project.featured ? "lg:grid-cols-[1.08fr_1fr] lg:gap-8" : ""
              }`}
            >
              <div>
                <div className="relative overflow-hidden rounded-xl border border-green-500/30">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={520}
                    className={`w-full object-cover ${
                      project.featured
                        ? "h-60 sm:h-72 lg:h-full lg:min-h-[22rem]"
                        : "h-56 sm:h-64"
                    }`}
                  />
                </div>
              </div>

              <div className="flex h-full flex-col">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl font-bold text-white sm:text-[1.75rem]">
                    {project.title}
                  </h2>
                  {project.featured ? (
                    <span className="rounded-full border border-green-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
                      Featured
                    </span>
                  ) : null}
                </div>

                <p className="mt-4 text-base leading-relaxed text-gray-200">
                  {project.summary}
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                      Role
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-200">
                      {project.role}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                      Impact
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-200">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                    Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-sm text-green-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      project.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-green-500 px-4 py-2 text-sm font-semibold text-green-200 transition hover:bg-green-500/10"
                  >
                    {project.cta}
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
