import { ContactsOutlined, MailOutlined } from "@ant-design/icons";

const Contact = () => {
  return (
    <div className="m-12">
      <div className="flex justify-between align-bottom  text-2xl border-b-4 border-dotted border-green-400 mb-4">
        <h1>Contact Me</h1>
        <p>
          <ContactsOutlined />
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 m-12">
        <div className="p-4 border-4 rounded-xl max-w-fit m-4 shadow-xl ">
          <MailOutlined className="text-[16rem]" />
          <h1 className="m-4 font-semibold text-center">Tenzies</h1>
          <button className="py-2 px-4 border rounded-xl border-green-500 flex mx-auto">
            <a href="mailto:tundeolumoh@gmail.com" target="_blank">
              Send Mail
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
