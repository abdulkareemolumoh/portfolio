import Skills from "../component/skills";
import { ProfileOutlined } from "../component/antd";
const Resume = () => {
  return (
    <div className="m-12">
      <div className="flex justify-between align-bottom  text-2xl border-b-4 border-dotted border-green-400 mb-4">
        <h1>My Resume</h1>
        <>
          <ProfileOutlined />
        </>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="col-span-1">
          <h1 className="text-center text-2xl font-bold underline m-4">
            Projects
          </h1>
          <div className="border-l-4 border-green-400 p-8 m-8">
            <h1 className="text-xl font-semibold mb-4">Tenzies</h1>
            <h2>
              Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis
              eveniet provident neque Ea ratione non minus temporibus ipsum Sunt
              minima
            </h2>
          </div>
          <div className="border-l-4 border-green-400 p-8 m-8">
            <h1 className="text-xl font-semibold mb-4">LEAD UI DESIGNER</h1>
            <h2>
              Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis
              eveniet provident neque Ea ratione non minus temporibus ipsum Sunt
              minima
            </h2>
          </div>
          <div className="border-l-4 border-green-400 p-8 m-8">
            <h1 className="text-xl font-semibold mb-4">LEAD UI DESIGNER</h1>
            <h2>
              Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis
              eveniet provident neque Ea ratione non minus temporibus ipsum Sunt
              minima
            </h2>
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="text-center text-2xl font-bold underline m-4">
            Education
          </h1>
          <div className="border-l-4 border-green-400 p-8 m-8">
            <h1 className="text-xl font-semibold ">Tenzies</h1>
            <h2 className="">Coursera</h2>
            <h2>
              Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis
              eveniet provident neque Ea ratione non minus temporibus ipsum Sunt
              minima
            </h2>
          </div>
          <div className="border-l-4 border-green-400 p-8 m-8">
            <h1 className="text-xl font-semibold mb-4">Tenzies</h1>
            <h2>
              Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis
              eveniet provident neque Ea ratione non minus temporibus ipsum Sunt
              minima
            </h2>
          </div>
          <div className="border-l-4 border-green-400 p-8 m-8">
            <h1 className="text-xl font-semibold mb-4">Tenzies</h1>
            <h2>
              Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis
              eveniet provident neque Ea ratione non minus temporibus ipsum Sunt
              minima
            </h2>
          </div>
        </div>
      </div>
      <h1 className="text-center text-2xl font-bold underline m-4">SKILLS</h1>
      <div className="m-12">
        <Skills label="HTML" percent={95} />
        <Skills label="CSS" percent={90} />
        <Skills label="JavaScript" percent={85} />
        <Skills label="TypeScript" percent={85} />
        <Skills label="React" percent={80} />
        <Skills label="Next.js" percent={75} />
      </div>
    </div>
  );
};

export default Resume;
