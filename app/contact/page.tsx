import {
  ContactsOutlined,
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  EnvironmentOutlined,
} from "../component/antd";

const Contact = () => {
  return (
    <div className="m-12 ">
      <div className="flex justify-between items-baseline font-bold text-3xl border-b-4 border-dotted border-green-400 mb-4">
        <h1>Contact Me</h1>
        <p>
          <ContactsOutlined />
        </p>
      </div>
      <div className="grid grid-cols-3 m-12">
        <div className="p-4 border-4 rounded-xl max-w-fit m-4 shadow-xl hover:scale-110 ">
          <MailOutlined className="text-[16rem]" />
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
        <div className="p-4 border-4 rounded-xl max-w-fit m-4 shadow-xl hover:scale-110 ">
          <PhoneOutlined className="text-[16rem]" />
          <h1 className="m-4 font-semibold text-center">+234 80 913 81136</h1>
          <button className="py-2 px-4 border rounded-xl border-green-500 flex mx-auto items-center gap-2">
            <PhoneOutlined /> <a href="tel:+2348091381136">Phone</a>
          </button>
        </div>
        <div className="p-4 border-4 rounded-xl max-w-fit m-4 shadow-xl hover:scale-110 ">
          <EnvironmentOutlined className="text-[16rem]" />
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
