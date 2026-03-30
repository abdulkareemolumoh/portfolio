import { DownloadOutlined, UserOutlined } from "../component/antd";
import Image from "next/image";
import { Services, Testimonials } from "../component/about_me";
import React from "react";

const personalInfo = [
  { label: "Name", value: "Tunde Olumoh" },
  { label: "Residence", value: "Nigeria" },
  { label: "Email", value: "tundeolumoh@gmail.com" },
  { label: "Phone", value: "+234 809 138 1136" },
  { label: "Open to work", value: "Available", accent: true },
];

const aboutSections = [
  {
    title: "Full-stack engineer",
    paragraphs: [
      "I am a full-stack developer passionate about building scalable, user-focused, and modern digital products. I enjoy turning ideas into reliable applications that feel polished on the surface and solid underneath.",
      "On the frontend, I work with React, Next.js, React Native, Tailwind CSS, and TypeScript to create responsive interfaces that are fast, intuitive, and accessible. On the backend, I build APIs and business workflows with NestJS, Prisma, and PostgreSQL to support dependable end-to-end experiences.",
      "I thrive on solving real-world problems, whether that means architecting backend systems, integrating external services, or refining UI details that make a product easier and more enjoyable to use.",
    ],
  },
  {
    title: "Expertise",
    paragraphs: [
      "End-to-end development: I am comfortable owning the full software lifecycle, from database design and API architecture to frontend implementation and deployment.",
      "User-centric delivery: I build with the end user in mind, focusing on clarity, speed, and smooth interaction across screen sizes.",
      "Problem-solving and innovation: I approach product and engineering challenges with curiosity, structure, and a bias toward clean, practical solutions.",
    ],
  },
  {
    title: "Technical proficiency",
    paragraphs: [
      "Languages: JavaScript, TypeScript, HTML, and CSS, with an emphasis on maintainable and scalable code.",
      "Frameworks and tools: React, Next.js, React Native, Tailwind CSS, NestJS, Prisma, PostgreSQL, Git, CI/CD workflows, and cloud deployment tooling.",
    ],
  },
  {
    title: "Commitment to quality",
    paragraphs: [
      "Attention to detail: I care deeply about code quality, performance, accessibility, and the overall finish of the product.",
      "Continuous growth: I actively explore emerging technologies, refine my craft, and look for better ways to ship useful software.",
    ],
  },
];

const About = () => {
  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-dotted border-green-500/70 pb-4 text-green-500">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-green-300">
            Profile
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            About Me
          </h1>
        </div>
        <UserOutlined />
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.8fr)]">
        <div className="space-y-6 rounded-3xl border border-green-500/35 bg-black/25 p-5 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-8">
          <div className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent p-5 sm:p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-green-300">
              What I bring
            </p>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-200 sm:text-lg">
              I bridge product thinking, frontend polish, and backend delivery to
              create experiences that are both elegant for users and dependable
              for teams.
            </p>
          </div>

          {aboutSections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              <div className="space-y-3 text-base leading-relaxed text-gray-200 sm:text-lg">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="space-y-4 rounded-2xl border border-green-500/20 bg-gray-950/60 p-5">
            <h2 className="text-2xl font-bold text-white">Let&apos;s collaborate</h2>
            <p className="text-base leading-relaxed text-gray-200 sm:text-lg">
              If you need someone who can move across frontend and backend while
              keeping user experience in focus, I am open to opportunities,
              collaborations, and ambitious product work.
            </p>
            <Image
              src={"/images/signature.png"}
              width={350}
              height={160}
              alt="Tunde Olumoh signature"
              className="h-auto w-44 sm:w-56"
            />
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-green-500/35 bg-gray-950/70 p-5 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-6">
            <h2 className="text-2xl font-bold text-white">Personal Information</h2>
            <ul className="mt-6 space-y-4">
              {personalInfo.map((item) => (
                <li
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                    {item.label}
                  </p>
                  <p
                    className={`mt-2 text-base font-medium sm:text-lg ${
                      item.accent ? "text-green-300" : "text-white"
                    }`}
                  >
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>

            <a
              href="/resume/Tunde_Olumoh_Resume_FE.pdf"
              download="Tunde_Olumoh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl border border-green-500 bg-green-500/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-green-200 transition hover:bg-green-500/20"
            >
              Download Resume
              <DownloadOutlined className="ml-2" />
            </a>
          </div>

          <div className="rounded-3xl border border-green-500/25 bg-black/25 p-5 backdrop-blur-sm sm:p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-green-300">
              Working style
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="mt-1 text-sm text-gray-300">
                  Production projects shipped across web and mobile
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold text-white">Full stack</p>
                <p className="mt-1 text-sm text-gray-300">
                  Frontend UX execution backed by API and data design
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold text-white">Remote-ready</p>
                <p className="mt-1 text-sm text-gray-300">
                  Clear communication, ownership, and fast iteration
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <Services />
      <Testimonials />
    </div>
  );
};

export default About;
