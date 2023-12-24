import { DownloadOutlined, UserOutlined } from "../component/antd";
import Image from "next/image";
import { Services, Testimonials } from "../component/about_me";

const About = () => {
  return (
    <div className="m-12 ">
      <div className="flex justify-between items-baseline font-bold text-3xl border-b-4 border-dotted text-green-500 border-green-500 mb-4">
        <h1>About Me</h1>
        <UserOutlined />
      </div>
      <div className="flex flex-col lg:grid grid-cols-8 gap-4 lg:gap-8 ">
        <div className="col-span-5 text-justify ">
          <h1 className="my-4 font-bold text-2xl">Frontend Developer</h1>
          <p className="text-xl  p-2">
            Hello! I&apos;m Tunde Abdulkareem Olumoh, a dedicated frontend
            developer passionate about creating exceptional digital experiences.
            My journey in the realm of web development has been driven by a
            commitment to excellence and a desire to bring creativity to the
            forefront of every project.
          </p>
          <h1 className="my-4 font-bold text-2xl">Expertise</h1>
          <p className="text-xl p-2 ">
            <span className="font-semibold">Design-Driven Focus:</span>{" "}
            Throughout my development journey, I&apos;ve been committed to
            achieving excellence. I specialize in creating seamless and visually
            captivating websites that engage users right from the initial click.
          </p>
          <p className="text-xl p-2">
            <span className="font-semibold">User-Centric Design:</span> I firmly
            believe in the power of user-centric design. Every line of code I
            write is aimed at enhancing the user experience, from ensuring
            intuitive navigation to creating visually appealing designs that
            make every interaction memorable.
          </p>
          <p className="text-xl p-2">
            <span className="font-semibold">Innovative Problem-Solving:</span>{" "}
            My approach to problem-solving is grounded in innovation. I tackle
            challenges head-on, exploring creative solutions to deliver results
            that consistently exceed expectations.
          </p>
          <h1 className="my-4 font-bold text-2xl">Technical Proficiency</h1>
          <p className="text-xl p-2">
            <span className="font-semibold">Languages:</span> Proficient in
            HTML, CSS, and JavaScript, I leverage these languages to build
            robust and responsive websites. My commitment to staying current
            with the latest technologies ensures that my skills are always at
            the cutting edge.
          </p>
          <p className="text-xl p-2">
            <span className="font-semibold"> Frameworks:</span> I have a strong
            command of frontend frameworks, with focus on TypeScript, Bootstrap,
            React, Next.js and Tailwindcss. This enables me to develop dynamic
            and scalable applications that meet the demands of modern web
            development.
          </p>
          <h1 className="my-4 font-bold text-2xl">Commitment to Quality</h1>
          <p className="text-xl p-2">
            <span className="font-semibold">Attention to Detail:</span>{" "}
            Attention to detail is the cornerstone of my work. Whether refining
            layouts, fine-tuning responsiveness, or optimizing performance, I
            ensure that every detail contributes to a polished final product.
          </p>
          <p className="text-xl p-2">
            <span className="font-semibold">Continuous Growth:</span> I embrace
            learning as a lifelong journey. By staying curious and exploring
            emerging technologies, I guarantee that my skill set evolves with
            the ever-changing landscape of frontend development.
          </p>
          <h1 className="my-4 font-bold text-2xl">Let&apos;s Collaborate</h1>
          <p className="text-xl p-2">
            If you&apos;re seeking a frontend developer who combines technical
            expertise with a passion for creating extraordinary digital
            experiences, let&apos;s connect. I&apos;m excited about the
            possibility of collaborating on projects that push boundaries and
            leave a lasting impact. Thank you for visiting!
          </p>
          <Image
            src={"/images/signature.png"}
            width={350}
            height={350}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="sign"
            className="flex mx-auto"
          />
        </div>
        <div className="col-span-3">
          <h3 className="my-4 font-bold text-2xl">Personal Information</h3>
          <ul className="text-xl">
            <li className="my-4 grid grid-cols-2">
              <span className="font-semibold">Name: </span> Tunde Olumoh
            </li>
            <li className="my-4 grid grid-cols-2">
              <span className="font-semibold">Residence: </span> Nigeria
            </li>
            <li className="my-4 grid grid-cols-2">
              <span className="font-semibold">Email: </span>{" "}
              tundeolumoh@gmail.com
            </li>
            <li className="my-4 grid grid-cols-2">
              <span className="font-semibold">Phone: </span>{" "}
              (+234)-809-113-81136
            </li>
            <li className="my-4 grid grid-cols-2">
              <span className="font-semibold">Open to work: </span> Available
            </li>
          </ul>
          <a href="/resume/Resume.pdf" download="Tunde_Olumoh.pdf" target="_blank">
            <button className="border-4 text-green-500 font-extrabold text-lg lg:text-xl border-green-500 p-2 lg:p-4 mt-4 gap-2 flex items-baseline hover:scale-105">
              DOWNLOAD RESUME
              <DownloadOutlined />
            </button>
          </a>
        </div>
      </div>
      <Services />
      <Testimonials />
    </div>
  );
};

export default About;
