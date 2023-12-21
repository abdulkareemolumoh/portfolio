import Image from "next/image";
import {
  BookOutlined,
  ContactsOutlined,
  DatabaseOutlined,
  GithubOutlined,
  HomeOutlined,
  MailOutlined,
  ProfileOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-green-400 flex flex-col justify-between min-h-screen  ">
      <div>
        <Image
          src={"/images/picture.jpg"}
          width={300}
          height={300}
          alt="profile_img"
          className="w-full"
        />
        <ul className="">
          <Link href={"/"}>
            <li className="px-12 py-4 text-xl font-semibold border-b-2 flex align-bottom gap-2">
              <HomeOutlined />
              HOME
            </li>
          </Link>

          <Link href={"/about_me"}>
            <li className="px-12 py-4 text-xl font-semibold border-b-2  flex align-bottom gap-2">
              <UserOutlined />
              ABOUT ME
            </li>
          </Link>
          <Link href={"/resume"}>
            <li className="px-12 py-4 text-xl font-semibold border-b-2  flex align-bottom gap-2">
              <ProfileOutlined />
              RESUME
            </li>
          </Link>
          <Link href={"/portfolio"}>
            <li className="px-12 py-4 text-xl font-semibold border-b-2  flex align-bottom gap-2">
              <DatabaseOutlined />
              PORTFOLIO
            </li>
          </Link>
          <li className="px-12 py-4 text-xl font-semibold border-b-2  flex align-bottom gap-2">
            <BookOutlined />
            BLOG
          </li>
          <Link href={"/contact"}>
            <li className="px-12 py-4 text-xl font-semibold border-b-2  flex align-bottom gap-2">
              <ContactsOutlined />
              CONTACT
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <div className="flex justify-evenly">
          <GithubOutlined className="text-2xl" />
          <TwitterOutlined className="text-2xl" />
          <MailOutlined className="text-2xl" />
        </div>
        <div className="text-center m-2">
          <h3>2021 © Cosmos-Themes.</h3>
          <h3>All Right Reserved.</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
