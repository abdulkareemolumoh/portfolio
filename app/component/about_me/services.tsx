import React from "react";
import {
  DatabaseOutlined,
  LaptopOutlined,
  MobileOutlined,
  EyeOutlined,
  CloudServerOutlined,
} from "../antd";

const Services = () => {
  const services = [
    {
      icon: LaptopOutlined,
      title: "Web Development",
      description:
        "I develop robust, scalable, and high-performance applications — from frontend interfaces to backend APIs.",
    },
    {
      icon: DatabaseOutlined,
      title: "Backend Development",
      description:
        "Designing and implementing secure databases, RESTful APIs, and server-side logic with modern frameworks.",
    },
    {
      icon: CloudServerOutlined,
      title: "Cloud & Deployment",
      description:
        "Deploying and managing applications on cloud platforms with CI/CD pipelines, containerization, and monitoring.",
    },
    {
      icon: EyeOutlined,
      title: "Web Design",
      description:
        "Crafting intuitive and visually appealing interfaces that enhance user experience and engagement.",
    },
    {
      icon: MobileOutlined,
      title: "Responsive Design",
      description:
        "Ensuring seamless functionality across all devices, from desktops to smartphones.",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        <span className="underline decoration-green-500 underline-offset-8">
          Services
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12">
        {services.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center shadow-md rounded-2xl p-8  hover:shadow-xl transition-shadow duration-300"
          >
            <Icon
              className="text-6xl mb-6"
              style={{ color: "rgb(34 197 94)" }}
              aria-label={`${title} Icon`}
            />
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
