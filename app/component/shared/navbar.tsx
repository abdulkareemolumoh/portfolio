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
} from "../antd";

const Navbar = () => {
  return (
    <div className="bg-green-700 flex flex-col justify-between h-screen w-1/2 sm:w-full fixed sm:static z-50">
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
              <li className="px-8 py-4 text-xs  font-semibold border-b-2 border-gray-700 flex align-bottom gap-2 hover:bg-green-800">
                <HomeOutlined />
                HOME
              </li>
            </Link>

            <Link href={"/about_me"}>
              <li className="px-8 py-4 text-xs font-semibold border-b-2 border-gray-700  flex align-bottom gap-2 hover:bg-green-800">
                <UserOutlined />
                ABOUT ME
              </li>
            </Link>
            <Link href={"/resume"}>
              <li className="px-8 py-4 text-xs font-semibold border-b-2 border-gray-700  flex align-bottom gap-2 hover:bg-green-800">
                <ProfileOutlined />
                RESUME
              </li>
            </Link>
            <Link href={"/portfolio"}>
              <li className="px-8 py-4 text-xs font-semibold border-b-2 border-gray-700  flex align-bottom gap-2 hover:bg-green-800">
                <DatabaseOutlined />
                PORTFOLIO
              </li>
            </Link>
            {/* <li className="px-12 py-4 text-xl font-semibold border-b-2  flex align-bottom gap-2">
            <BookOutlined />
            BLOG
          </li> */}
            <Link href={"/contact"}>
              <li className="px-8 py-4 text-xs font-semibold border-b-2 border-gray-700  flex align-bottom gap-2 hover:bg-green-800">
                <ContactsOutlined />
                CONTACT
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex justify-evenly">
          <GithubOutlined className="text-xl" />
          <TwitterOutlined className="text-xl" />
          <MailOutlined className="text-xl" />
        </div>
        <div className="text-center text-xs m-2">
          <h3>2021 © Cosmos-Themes.</h3>
          <h3>All Right Reserved.</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
