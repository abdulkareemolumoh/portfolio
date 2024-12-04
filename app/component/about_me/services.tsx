import React from "react";
import { EyeOutlined, LaptopOutlined, MobileOutlined } from "../antd";

const Services = () => {
  return (
    <div className="py-12 ">
      <h1 className="text-center text-3xl md:text-4xl font-bold underline  my-8">
        SERVICES
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center px-6 md:px-12">
        <div className="flex flex-col items-center  shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
          <LaptopOutlined
            className="text-6xl mb-4"
            style={{ color: "rgb(34 197 94)" }}
            aria-label="Web Development Icon"
          />
          <h1 className="text-xl font-semibold ">
            Web Development
          </h1>
          <p className=" mt-2">
            Building robust, scalable, and efficient web applications tailored
            to your needs.
          </p>
        </div>
        <div className="flex flex-col items-center  shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
          <EyeOutlined
            className="text-6xl mb-4"
            style={{ color: "rgb(34 197 94)" }}
            aria-label="Web Design Icon"
          />
          <h1 className="text-xl font-semibold ">Web Design</h1>
          <p className=" mt-2">
            Creating visually appealing, user-friendly, and responsive designs.
          </p>
        </div>
        <div className="flex flex-col items-center  shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
          <MobileOutlined
            className="text-6xl mb-4"
            style={{ color: "rgb(34 197 94)" }}
            aria-label="Responsive Design Icon"
          />
          <h1 className="text-xl font-semibold ">
            Responsive Design
          </h1>
          <p className=" mt-2">
            Ensuring your applications work seamlessly across all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
