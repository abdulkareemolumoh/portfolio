import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./component/shared";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import TopNavbar from "./component/shared/navbar_top";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tunde Olumoh",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#06110d] text-white antialiased`}>
        <StyledComponentsRegistry>
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_26%),linear-gradient(180deg,_#07130f_0%,_#020403_52%,_#07110d_100%)]" />
          <div className="block w-full sm:hidden">
            <TopNavbar />
          </div>
          <div className="relative min-h-screen sm:grid sm:grid-cols-[320px_minmax(0,1fr)]">
            <div className="hidden border-r border-white/10 bg-black/20 backdrop-blur-xl sm:block">
              <div className="sticky top-0 h-screen">
                <Navbar />
              </div>
            </div>
            <main className="min-w-0 px-4 pb-8 pt-24 sm:px-8 sm:py-8 lg:px-10">
              <div className="mx-auto w-full max-w-7xl">{children}</div>
            </main>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
