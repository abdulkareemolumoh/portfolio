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
      <body className={inter.className + " bg-gray-800 text-white"}>
        <div className="block sm:hidden w-full">
          <TopNavbar />
        </div>
        <div className="min-h-screen sm:grid sm:grid-cols-[320px_minmax(0,1fr)]">
          <div className="hidden h-screen sm:sticky sm:top-0 sm:block">
            <Navbar />
          </div>
          <div className="mt-16 min-w-0 sm:mt-0 sm:h-screen sm:overflow-y-auto">
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </div>
        </div>
      </body>
    </html>
  );
}
