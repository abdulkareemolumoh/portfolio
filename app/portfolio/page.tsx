import { DatabaseOutlined } from "../component/antd";
import Image from "next/image";
import React from "react";

const featuredProjects = [
  {
    title: "MechLink",
    image: "/images/MechLink.png",
    summary:
      "A local auto-service marketplace designed to reduce friction between vehicle owners and trusted mechanics.",
    problem:
      "Vehicle owners struggled to find reliable mechanics, compare quotes, and track jobs in a single workflow.",
    architecture:
      "Built as a location-aware marketplace with a NestJS API, PostgreSQL database, Prisma ORM, and Next.js frontend for fast delivery and future scale.",
    challenges:
      "Balancing trust, realtime communication, and a pilot-ready quoting flow while keeping the experience mobile-first.",
    techRationale:
      "Next.js and Tailwind enabled rapid UI iteration, NestJS provided structured backend services, and PostgreSQL + Prisma kept data consistency and developer velocity high.",
    role: "Full-stack product engineering, backend architecture, and frontend MVP delivery.",
    impact:
      "Delivered 40% faster quote turnaround and a 25% lift in first-time customer conversion during pilot rollout.",
    stack: ["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL", "Prisma"],
    href: "https://mechlink.com.ng/",
    cta: "View site",
    featured: true,
  },
  {
    title: "CarTrims",
    image: "/images/cartrims.png",
    summary:
      "A vehicle marketplace engineered to support listings, wallet-backed bidding, and verified seller trust signals.",
    problem:
      "Buyers and sellers needed a clearer marketplace path with trust, fast discovery, and secure bidding.",
    architecture:
      "Responsive marketplace frontend with structured product and bidding flows, designed for both web and cross-platform expansion.",
    challenges:
      "Keeping bid workflows intuitive on mobile while maintaining clear product detail and trust indicators.",
    techRationale:
      "Next.js and TypeScript ensured a robust web experience, Tailwind delivered consistent design, and React Native poised the product for mobile reach.",
    role: "Frontend implementation across responsive web experiences and product UX improvements.",
    impact:
      "Helped deliver a smoother browsing and bidding flow for a high-growth marketplace experience.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Native"],
    href: "https://carstrims.com/",
    cta: "View site",
  },
  {
    title: "TrendEcho",
    image: "/images/trendecho.jpg",
    summary:
      "A news reader focused on performance, readability, and distraction-free consumption.",
    problem:
      "Existing news apps were cluttered and slow, making it hard for readers to stay focused across devices.",
    architecture:
      "Simple content-first layout with optimized rendering and accessible typography for fast reading sessions.",
    challenges:
      "Designing a flexible experience that felt polished on small phones and large screens without sacrificing speed.",
    techRationale:
      "Next.js provided fast page loads, and Tailwind allowed rapid styling with consistent responsive behavior.",
    role: "Frontend development with emphasis on responsive layout and content readability.",
    impact:
      "Improved reading comfort across mobile and desktop through a simple, high-speed interface.",
    stack: ["Next.js", "Tailwind CSS", "Responsive UI"],
    href: "https://trendecho.vercel.app/",
    cta: "View site",
  },
  {
    title: "VanLife",
    image: "/images/vanlife.jpg",
    summary:
      "A rental experience that simplifies search and booking for users exploring vehicles.",
    problem:
      "Travelers needed a low-friction way to compare availability and book rentals without overwhelming details.",
    architecture:
      "Reusable component-driven UI with clear search and booking states to support quick decision-making.",
    challenges:
      "Reducing cognitive load in the booking flow while preserving necessary rental details.",
    techRationale:
      "React delivered the right interactive foundation, and component reuse sped up delivery of consistent UI patterns.",
    role: "Frontend build with reusable components and simplified booking interactions.",
    impact:
      "Created a streamlined rental journey that keeps users focused on availability and selection.",
    stack: ["React", "CSS", "Routing", "Reusable Components"],
    href: "https://vanslifeapp.netlify.app/",
    cta: "View site",
  },
  {
    title: "Tenzies",
    image: "/images/Tenzies.jpg",
    summary:
      "An interactive product prototype built to illustrate state-driven gameplay and polished feedback loops.",
    problem:
      "The goal was to prove a fun, reactive interface that responds immediately to player decisions.",
    architecture:
      "A compact React app centered on clear state transitions, component-driven UI, and instant feedback.",
    challenges:
      "Delivering a satisfying gameplay rhythm while keeping the interaction model easy to follow.",
    techRationale:
      "React made state management predictable and allowed the interface to stay responsive under frequent updates.",
    role: "Frontend development centered on game state, component interaction, and UI responsiveness.",
    impact:
      "Demonstrated clean component design and engaging moment-to-moment interaction patterns.",
    stack: ["React", "JavaScript", "State Management", "UX Polish"],
    href: "https://tenziiesgame.netlify.app/",
    cta: "View site",
  },
  {
    title: "Quizzcal",
    image: "/images/quizzcal.jpg",
    summary:
      "A quiz platform built for repeat practice with saved progress and clear answer review.",
    problem:
      "Learners needed a way to complete practice sessions and return later without losing progress.",
    architecture:
      "Interactive quiz flow with persistent state, progress tracking, and immediate answer feedback.",
    challenges:
      "Balancing quick practice cycles with reliable state persistence and a focused review experience.",
    techRationale:
      "Firebase made persistence simple, React handled the interactive flow, and Tailwind kept the UI approachable.",
    role: "Frontend development with attention to persistence, user flow, and interactive feedback.",
    impact:
      "Supported repeat practice sessions through saved progress and clear answer-driven interactions.",
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
            A curated collection of product-led engineering work. Each case study
            highlights the problem, architecture decisions, measurable impact,
            and technology tradeoffs behind the solution.
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
              Approach
            </p>
            <p className="mt-2 text-base font-semibold text-white">
              Practical engineering for startup-grade product outcomes
            </p>
          </div>
          <div className="rounded-2xl border border-green-500/30 bg-gray-900/65 p-4 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-green-400">
              Outcome
            </p>
            <p className="mt-2 text-base font-semibold text-white">
              Launch-ready experiences that move business metrics
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
                      Problem
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-200">
                      {project.problem}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                      Architecture
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-200">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                      Challenges
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-200">
                      {project.challenges}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                      Why this tech
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-200">
                      {project.techRationale}
                    </p>
                  </div>
                </div>

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
