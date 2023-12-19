import {
  EyeOutlined,
  LaptopOutlined,
  MobileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import signature from "./images/signature.png";
import Image from "next/image";
import Services from "./services";
import Tesimonials from "./testimonials";
const About = () => {
  return (
    <div className="m-12 ">
      <div className="flex justify-between align-bottom  text-2xl border-b-4 border-dotted border-green-400 mb-4">
        <h1>About Me</h1>
        <p>
          <UserOutlined />
        </p>
      </div>
      <div className="grid grid-cols-8 gap-16">
        <div className="col-span-5 ">
          <h2 className="my-4 font-bold text-2xl">
            UI/UX Designer & Developer
          </h2>
          <p className="text-xl">
            Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
            dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
            voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
            placeat quas consequatur? Obcaecati natus rerum Consectetur
            consectetur nesciunt nesciunt blanditiis amet? Quod quis unde
            aliquid excepturi laudantium? Illo architecto aliquam velit illo
            magnam neque perferendis sint Incidunt eius ipsa inventore labore
            eos velit. Minus hic magni reiciendis necessitatibus ex Quidem
            officia deleniti accusamus obcaecati dolores. Porro culpa quibusdam
            impedit porro praesentium excepturi. Alias ab consequatur?
          </p>
          <Image src={signature} alt="sign" className="" />
        </div>
        <div className="col-span-3">
          <h3 className="my-4 font-bold text-2xl">Personal Information</h3>
          <ul className="text-xl">
            <li className="my-4">Name: Tunde Olumoh</li>
            <li className="my-4">Age: 666</li>
            <li className="my-4">Residence: Nigeria</li>
            <li className="my-4">Email: tundeolumoh@gmail.com</li>
            <li className="my-4">Phone: (+234) 809 113 81136</li>
            <li className="my-4">Freelance: Available</li>
          </ul>
          <button className="border-4 font-extrabold text-xl border-green-500 p-4 mt-4 ">
            DOWNLOAD RESUME
          </button>
        </div>
      </div>
      <Services />
      <Tesimonials />
    </div>
  );
};

export default About;
