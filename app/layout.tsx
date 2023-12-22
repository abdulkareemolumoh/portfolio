import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./component/shared";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import TopNavbar from "./component/shared/navbar_top";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="block md:hidden w-full">
          <TopNavbar />
        </div>
        <div className="grid grid-cols-12 ">
          <div className="col-span-2 md:col-span-3 hidden sm:block ">
            <Navbar />
          </div>
          <div className="col-span-10 md:col-span-9  h-screen overflow-auto ">
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </div>
        </div>
      </body>
    </html>
  );
}
