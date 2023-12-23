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
      <body className={inter.className}>
        <div className="block sm:hidden w-full">
          <TopNavbar />
        </div>
        <div className="grid grid-cols-12 ">
          <div className={`hidden sm:block sm:col-span-3`}>
            <Navbar />
          </div>
          <div className="col-span-full sm:col-span-9 h-screen overflow-auto ">
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </div>
        </div>
      </body>
    </html>
  );
}
