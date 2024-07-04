import React from "react";
import {
  ContactsOutlined,
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  EnvironmentOutlined,
} from "../component/antd";

const Contact = () => {
  return (
    <div className="m-4 sm:m-8 ">
      <div className="flex justify-between items-baseline font-bold text-3xl border-b-4 border-dotted text-green-500 border-green-500 mb-4">
        <h1>Contact Me</h1>
        <p>
          <ContactsOutlined />
        </p>
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 gap-4 m-4 lg:m-12">
        <div className="p-4 border-4 border-green-500 rounded-xl max-w-fit m-4 shadow-xl shadow-black  hover:scale-110 mx-auto">
          <MailOutlined className="text-[20rem]" />
          <h1 className="m-4 font-semibold text-center">
            tundeolumoh@gmail.com
          </h1>
          <button className="py-2 px-4 border rounded-xl border-green-500 flex mx-auto items-center gap-2">
            <SendOutlined />
            <a href="mailto:tundeolumoh@gmail.com" target="_blank">
              Send Mail
            </a>
          </button>
        </div>
        <div className="p-4 border-4 border-green-500 rounded-xl max-w-fit m-4 shadow-xl shadow-black hover:scale-110 mx-auto">
          <PhoneOutlined className="text-[20rem]" />
          <h1 className="m-4 font-semibold text-center">+234-80-913-81136</h1>
          <button className="py-2 px-4 border rounded-xl border-green-500 flex mx-auto items-center gap-2">
            <PhoneOutlined /> <a href="tel:+2348091381136">Phone</a>
          </button>
        </div>
        <div className="p-4 border-4 border-green-500 rounded-xl max-w-fit m-4 shadow-xl shadow-black hover:scale-110 mx-auto">
          <EnvironmentOutlined className="text-[20rem]" />
          <h1 className="m-4 font-semibold text-center">
            Ilorin, Kwara State, Nigeria
          </h1>
          <button className="py-2 px-4 border rounded-xl border-green-500 flex mx-auto">
            <a href="https://maps.app.goo.gl/2UkLuPWCmvqnbZ178" target="_blank">
              Location
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
