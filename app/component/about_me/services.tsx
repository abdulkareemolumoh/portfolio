import React from "react";
import {
  DatabaseOutlined,
  LaptopOutlined,
  MobileOutlined,
  EyeOutlined,
  CloudServerOutlined,
} from "../antd";

const services = [
  {
    icon: LaptopOutlined,
    title: "Web Development",
    description:
      "I build robust, scalable applications from polished frontend interfaces to backend services that support real product growth.",
  },
  {
    icon: DatabaseOutlined,
    title: "Backend Development",
    description:
      "I design APIs, databases, and business workflows that prioritize security, maintainability, and performance.",
  },
  {
    icon: CloudServerOutlined,
    title: "Cloud & Deployment",
    description:
      "I ship applications with deployment pipelines, operational awareness, and a focus on stability in production.",
  },
  {
    icon: EyeOutlined,
    title: "UI/UX Design",
    description:
      "I shape interfaces that feel clear, intentional, and easy to use without sacrificing visual polish.",
  },
  {
    icon: MobileOutlined,
    title: "Responsive Systems",
    description:
      "I make sure experiences adapt gracefully across desktop, tablet, and mobile with thoughtful interaction patterns.",
  },
];

const Services = () => {
  return (
    <section className="space-y-6 rounded-3xl border border-green-500/35 bg-black/25 p-5 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-green-300">
            Capabilities
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">Services</h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
          The work I enjoy most sits at the intersection of product clarity,
          engineering depth, and smooth user experience.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {services.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="rounded-2xl border border-green-500/25 bg-gray-950/65 p-5 transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-gray-950/80"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-2xl text-green-300">
              <Icon aria-label={`${title} icon`} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
