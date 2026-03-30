import { Education, Projects, Skills } from "../component/resume";
import { ProfileOutlined } from "../component/antd";
import React from "react";

const skillGroups = [
  [
    { label: "HTML", percent: 95 },
    { label: "CSS", percent: 95 },
    { label: "Tailwind CSS", percent: 95 },
    { label: "JavaScript (ES6+)", percent: 90 },
    { label: "TypeScript", percent: 88 },
    { label: "React.js", percent: 90 },
    { label: "Next.js", percent: 88 },
    { label: "React Native", percent: 85 },
  ],
  [
    { label: "NestJS", percent: 85 },
    { label: "Node.js", percent: 85 },
    { label: "Prisma ORM", percent: 88 },
    { label: "PostgreSQL", percent: 87 },
    { label: "Firebase", percent: 90 },
    { label: "Cloudinary", percent: 85 },
    { label: "Git & GitHub", percent: 92 },
    { label: "REST API Design", percent: 90 },
  ],
];

const Resume = () => {
  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-dotted border-green-500/70 pb-4 text-green-500">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-green-300">
            Experience Snapshot
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            My Resume
          </h1>
        </div>
        <ProfileOutlined />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-3xl border border-green-500/35 bg-black/25 p-5 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-8">
          <div className="border-b border-white/10 pb-4">
            <p className="text-sm uppercase tracking-[0.24em] text-green-300">
              Product Delivery
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">Projects</h2>
          </div>
          <div className="mt-6">
            <Projects />
          </div>
        </section>

        <section className="rounded-3xl border border-green-500/35 bg-black/25 p-5 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-8">
          <div className="border-b border-white/10 pb-4">
            <p className="text-sm uppercase tracking-[0.24em] text-green-300">
              Learning Path
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">Education</h2>
          </div>
          <div className="mt-6">
            <Education />
          </div>
        </section>
      </div>

      <section className="rounded-3xl border border-green-500/35 bg-black/25 p-5 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-green-300">
              Technical Strength
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">Skills</h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Core technologies I rely on to build performant frontend
            experiences and robust backend systems.
          </p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div key={index} className="space-y-4 rounded-2xl border border-white/10 bg-gray-950/60 p-4 sm:p-5">
              {group.map((skill) => (
                <Skills
                  key={skill.label}
                  label={skill.label}
                  percent={skill.percent}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
