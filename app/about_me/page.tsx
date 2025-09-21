import { DownloadOutlined, UserOutlined } from "../component/antd";
import Image from "next/image";
import { Services, Testimonials } from "../component/about_me";
import React from "react";

const About = () => {
  return (
    <div className="m-4 sm:m-8 ">
      <div className="flex justify-between items-baseline font-bold text-3xl border-b-4 border-dotted text-green-500 border-green-500 mb-4">
        <h1>About Me</h1>
        <UserOutlined />
      </div>
      <div className="flex flex-col lg:grid grid-cols-8 gap-4 lg:gap-8 ">
        <div className="col-span-5 text-justify ">
          <h1 className="my-4 font-bold text-2xl">Fullstack Engineer</h1>
          <p className="text-xl p-2">
            I’m a <span className="font-semibold">Fullstack Developer</span>{" "}
            passionate about building scalable, user-focused, and modern digital
            solutions. With hands-on experience in both frontend and backend
            technologies, I specialize in turning ideas into production-ready
            applications that are efficient, reliable, and delightful to use.
          </p>
          <p className="text-xl p-2">
            On the frontend, I craft intuitive and responsive user interfaces
            with
            <span className="font-semibold">
              {" "}
              React, Next.js, React Native, Tailwind CSS, and TypeScript
            </span>
            . On the backend, I design and implement robust APIs, database
            schemas, and business logic using
            <span className="font-semibold">
              {" "}
              NestJS, Prisma, and PostgreSQL
            </span>
            . This combination allows me to deliver seamless end-to-end
            experiences across web and mobile platforms.
          </p>
          <p className="text-xl p-2">
            I thrive on solving real-world challenges—whether it’s architecting
            a scalable backend, integrating APIs, or refining UI/UX for
            performance and accessibility. Every project I take on is approached
            with a balance of technical excellence and user-centric design.
          </p>
          <p className="text-xl p-2">
            Beyond coding, I’m dedicated to continuous growth, collaboration,
            and exploring emerging technologies to stay ahead in a fast-moving
            industry.
          </p>

          <h1 className="my-4 font-bold text-2xl">Expertise</h1>
          <p className="text-xl p-2">
            <span className="font-semibold">End-to-End Development:</span>
            Skilled in managing the full software lifecycle—from database design
            and API development to frontend implementation and deployment.
          </p>
          <p className="text-xl p-2">
            <span className="font-semibold">User-Centric Approach:</span>I build
            with the end-user in mind, ensuring clean interfaces, smooth
            navigation, and engaging interactions across all devices.
          </p>
          <p className="text-xl p-2">
            <span className="font-semibold">Problem-Solving & Innovation:</span>
            I tackle challenges with creativity and precision, consistently
            delivering solutions that exceed expectations.
          </p>

          <h1 className="my-4 font-bold text-2xl">Technical Proficiency</h1>
          <p className="text-xl p-2">
            <span className="font-semibold">Languages:</span>
            Proficient in JavaScript, TypeScript, HTML, and CSS. Experienced in
            writing clean, maintainable, and scalable code.
          </p>
          <p className="text-xl p-2">
            <span className="font-semibold">Frameworks & Tools:</span>
            React, Next.js, React Native, Tailwind CSS, NestJS, Prisma, and
            PostgreSQL. Familiar with Git, CI/CD, and cloud-based deployments.
          </p>

          <h1 className="my-4 font-bold text-2xl">Commitment to Quality</h1>
          <p className="text-xl p-2">
            <span className="font-semibold">Attention to Detail:</span>
            From clean code to optimized performance, I focus on delivering
            polished products that are both functional and reliable.
          </p>
          <p className="text-xl p-2">
            <span className="font-semibold">Continuous Growth:</span>I embrace
            learning as a lifelong process, constantly exploring emerging
            technologies and refining my craft.
          </p>

          <h1 className="my-4 font-bold text-2xl">Let&apos;s Collaborate</h1>
          <p className="text-xl p-2">
            If you&apos;re looking for a developer who can bridge the gap
            between frontend and backend, and deliver impactful digital
            experiences, let&apos;s connect. I’m open to new opportunities,
            collaborations, and exciting projects that push boundaries.
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

        <div className="col-span-3 p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="my-4 font-bold text-xl sm:text-2xl ">
            Personal Information
          </h3>
          <ul className="text-lg sm:text-xl space-y-4">
            <li className="flex flex-col sm:flex-row sm:justify-between">
              <span className="font-semibold">Name:</span>
              <span>Tunde Olumoh</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between">
              <span className="font-semibold">Residence:</span>
              <span>Nigeria</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between">
              <span className="font-semibold">Email:</span>
              <span>tundeolumoh@gmail.com</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between">
              <span className="font-semibold">Phone:</span>
              <span>(+234)-809-113-81136</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between">
              <span className="font-semibold">Open to work:</span>
              <span className="text-green-600 font-medium">Available</span>
            </li>
          </ul>
          <div className="mt-6 flex justify-center">
            <a
              href="/resume/Resume.pdf"
              download="Tunde_Olumoh.pdf"
              target="_blank"
              className="inline-flex items-center border-4 border-green-500 text-green-500 font-bold text-lg lg:text-xl px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 transition-transform"
            >
              DOWNLOAD RESUME
              <DownloadOutlined className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      <Services />
      <Testimonials />
    </div>
  );
};

export default About;
