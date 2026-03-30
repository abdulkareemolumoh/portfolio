import React from "react";
import {
  ContactsOutlined,
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  EnvironmentOutlined,
} from "../component/antd";

const contactCards = [
  {
    title: "Email",
    value: "tundeolumoh@gmail.com",
    eyebrow: "Primary channel",
    description: "Best for project inquiries, collaboration, and freelance work.",
    href: "mailto:tundeolumoh@gmail.com",
    cta: "Send Mail",
    icon: MailOutlined,
    actionIcon: SendOutlined,
  },
  {
    title: "Phone",
    value: "+234 809 138 1136",
    eyebrow: "Direct line",
    description: "Reach out directly for quick conversations and urgent contact.",
    href: "tel:+2348091381136",
    cta: "Call Now",
    icon: PhoneOutlined,
    actionIcon: PhoneOutlined,
  },
  {
    title: "Location",
    value: "Ilorin, Kwara State, Nigeria",
    eyebrow: "Base",
    description: "Available for remote work and open to exciting opportunities.",
    href: "https://maps.app.goo.gl/2UkLuPWCmvqnbZ178",
    cta: "Open Map",
    icon: EnvironmentOutlined,
    actionIcon: EnvironmentOutlined,
  },
];

const Contact = () => {
  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-dotted border-green-500/70 pb-4 text-green-500">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-green-300">
            Reach Out
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Contact Me
          </h1>
        </div>
        <ContactsOutlined />
      </div>

      <section className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-3xl border border-green-500/35 bg-black/25 p-5 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-green-300">
            Let&apos;s build
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Open to meaningful product work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-200 sm:text-lg">
            Whether you need a frontend-focused builder, a full-stack engineer,
            or someone who can help sharpen product UX while shipping reliable
            code, I&apos;d love to hear about it.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-gray-950/60 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-green-400">
                Response
              </p>
              <p className="mt-2 text-xl font-bold text-white">Fast replies</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gray-950/60 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-green-400">
                Work style
              </p>
              <p className="mt-2 text-xl font-bold text-white">Remote-first</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gray-950/60 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-green-400">
                Focus
              </p>
              <p className="mt-2 text-xl font-bold text-white">Web and mobile</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const ActionIcon = card.actionIcon;

            return (
              <article
                key={card.title}
                className="group flex h-full min-h-[22rem] flex-col rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-950/90 via-gray-950/75 to-green-950/20 p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-green-400 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-green-300">
                      {card.eyebrow}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold text-white">
                      {card.title}
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 text-3xl text-green-300 transition group-hover:bg-green-500/15">
                    <Icon />
                  </div>
                </div>

                <p className="mt-8 break-words text-lg font-semibold leading-snug text-gray-100 sm:text-[1.35rem]">
                  {card.value}
                </p>

                <div className="mt-4 h-px w-full bg-gradient-to-r from-green-500/50 via-white/10 to-transparent" />

                <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {card.description}
                </p>

                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-auto inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-green-500 bg-green-500/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-green-200 transition hover:bg-green-500/20"
                >
                  <ActionIcon />
                  {card.cta}
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Contact;
