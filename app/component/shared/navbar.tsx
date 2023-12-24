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

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-black text-white flex flex-col justify-between h-screen w-1/2 sm:w-full fixed sm:static z-50">
      <div>
        <div>
          <Image
            src={"/images/passport.jpg"}
            width={600}
            height={600}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="profile_img"
          />
        </div>
        <div className="flex flex-col ">
          <ul>
            <Link href={"/"}>
              <li
                className={`px-8 py-4 text-xs font-semibold border-b-2 border-gray-700  flex align-bottom gap-2 hover:bg-gray-800 ${
                  pathname === "/" ? "shadow-lg shadow-black bg-gray-800" : ""
                }`}
              >
                <HomeOutlined />
                HOME
              </li>
            </Link>

            <Link href={"/about_me"}>
              <li
                className={`px-8 py-4 text-xs font-semibold border-b-2 border-gray-700  flex align-bottom gap-2 hover:bg-gray-800 ${
                  pathname === "/about_me"
                    ? "shadow-lg shadow-black bg-gray-800"
                    : ""
                }`}
              >
                <UserOutlined />
                ABOUT ME
              </li>
            </Link>
            <Link href={"/resume"}>
              <li
                className={`px-8 py-4 text-xs font-semibold border-b-2 border-gray-700  flex align-bottom gap-2 hover:bg-gray-800 ${
                  pathname === "/resume"
                    ? "shadow-lg shadow-black bg-gray-800"
                    : ""
                }`}
              >
                <ProfileOutlined />
                RESUME
              </li>
            </Link>
            <Link href={"/portfolio"}>
              <li
                className={`px-8 py-4 text-xs font-semibold border-b-2 border-gray-700  flex align-bottom gap-2 hover:bg-gray-800 ${
                  pathname === "/portfolio"
                    ? "shadow-lg shadow-black bg-gray-800"
                    : ""
                }`}
              >
                <DatabaseOutlined />
                PORTFOLIO
              </li>
            </Link>
            {/* <li className="px-12 py-4 text-xl font-semibold border-b-2  flex align-bottom gap-2">
            <BookOutlined />
            BLOG
          </li> */}
            <Link href={"/contact"}>
              <li
                className={`px-8 py-4 text-xs font-semibold border-b-2 border-gray-700  flex align-bottom gap-2 hover:bg-gray-800 ${
                  pathname === "/contact"
                    ? "shadow-lg shadow-black bg-gray-800"
                    : ""
                }`}
              >
                <ContactsOutlined />
                CONTACT
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex justify-evenly">
          <a href="https://github.com/abdulkareemolumoh" target="_blank">
            <GithubOutlined className="text-xl" />
          </a>
          <a href="https://twitter.com/tundeolumoh" target="_blank">
            <TwitterOutlined className="text-xl" />
          </a>
          <a href="mailto:tundeolumoh@gmail.com" target="_blanl">
            <MailOutlined className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/abdulkareemolumoh/">
            <LinkedinOutlined />
          </a>
        </div>
        <div className="text-center text-xs m-2">
          <h3>2023 © Tunde Olumoh.</h3>
          <h3>All Right Reserved.</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
