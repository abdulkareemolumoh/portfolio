import Link from "next/link";
import { Typewriter } from "./component/antd";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[url('../public/images/background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/40 via-black/50 to-black/80" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex rounded-full border border-green-500/60 bg-green-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
              Full-stack Engineer
            </p>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              Tunde Abdulkareem Olumoh
            </h1>

            <div className="mt-6 text-xl font-semibold text-gray-100 sm:text-2xl lg:text-3xl">
              <span>I build </span>
              <span className="text-green-300 underline decoration-green-500 decoration-4 underline-offset-8">
                <Typewriter
                  words={[
                    "scalable full-stack products.",
                    "responsive user-first interfaces.",
                    "reliable backend systems.",
                    "digital experiences that convert.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={35}
                  delaySpeed={1400}
                />
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
              I design and ship modern web applications with a strong balance of
              product thinking, frontend polish, and backend reliability. From
              MVPs to production workflows, I focus on experiences that are
              fast, clear, and built to scale.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-green-400"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-green-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-green-200 transition hover:bg-green-500/10"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-green-300">
                  Focus
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Frontend and backend delivery
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-green-300">
                  Stack
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Next.js, NestJS, TypeScript, PostgreSQL
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-green-300">
                  Strength
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Clean UX with production-ready systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
