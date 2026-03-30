"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ContactsOutlined,
  DatabaseOutlined,
  GithubOutlined,
  HomeOutlined,
  MailOutlined,
  ProfileOutlined,
  TwitterOutlined,
  UserOutlined,
  LinkedinOutlined,
} from "../antd";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: HomeOutlined },
  { href: "/about_me", label: "About Me", icon: UserOutlined },
  { href: "/resume", label: "Resume", icon: ProfileOutlined },
  { href: "/portfolio", label: "Portfolio", icon: DatabaseOutlined },
  { href: "/contact", label: "Contact", icon: ContactsOutlined },
];

type NavbarProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

const Navbar = ({ mobile = false, onNavigate }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <aside
      className={`flex h-full flex-col justify-between overflow-y-auto border-r border-green-500/30 bg-gradient-to-b from-black via-gray-950 to-black text-white ${
        mobile
          ? "fixed inset-y-0 left-0 z-30 h-screen w-[84%] max-w-sm border-r border-white/10 shadow-2xl shadow-black/60"
          : "w-full"
      }`}
    >
      <div>
        <div className="border-b border-green-500/20 p-5 sm:p-6">
          <div className="relative overflow-hidden rounded-2xl border border-green-500/30">
            <Image
              src={"/images/passport.jpg"}
              width={1000}
              height={1000}
              className="h-64 w-full object-cover"
              alt="profile_img"
              priority
            />
          </div>

          <div className="mt-5">
            <h2 className="text-xl font-bold tracking-wide text-white">
              Tunde Olumoh
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Full-stack developer focused on clean user experiences and robust
              backend systems.
            </p>
          </div>

          <div className="mt-4 inline-flex rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
            Open to work
          </div>
        </div>

        <nav className="px-4 py-5 sm:px-5">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                      isActive
                        ? "border-green-500 bg-green-500/15 text-green-300 shadow-lg shadow-green-950/40"
                        : "border-transparent text-gray-200 hover:border-green-500/30 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-base ${
                        isActive
                          ? "bg-green-500 text-black"
                          : "bg-white/5 text-green-300"
                      }`}
                    >
                      <Icon />
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="border-t border-green-500/20 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <a
            href="https://github.com/abdulkareemolumoh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-green-500/30 bg-white/5 text-lg text-green-300 transition hover:border-green-400 hover:bg-green-500/10"
          >
            <GithubOutlined />
          </a>
          <a
            href="https://twitter.com/tundeolumoh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-green-500/30 bg-white/5 text-lg text-green-300 transition hover:border-green-400 hover:bg-green-500/10"
          >
            <TwitterOutlined />
          </a>
          <a
            href="mailto:tundeolumoh@gmail.com"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-green-500/30 bg-white/5 text-lg text-green-300 transition hover:border-green-400 hover:bg-green-500/10"
          >
            <MailOutlined />
          </a>
          <a
            href="https://www.linkedin.com/in/abdulkareemolumoh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-green-500/30 bg-white/5 text-lg text-green-300 transition hover:border-green-400 hover:bg-green-500/10"
          >
            <LinkedinOutlined />
          </a>
        </div>

        <div className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-gray-400">
          <p>2026 Tunde Olumoh</p>
          <p className="mt-1">All rights reserved</p>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
