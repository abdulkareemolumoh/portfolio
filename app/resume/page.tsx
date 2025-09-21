import { Education, Projects, Skills } from "../component/resume";
import { ProfileOutlined } from "../component/antd";
import React from "react";

const Resume = () => {
  return (
    <div className="m-4 sm:m-8 ">
      <div className="flex justify-between items-baseline font-bold text-3xl border-b-4 border-dotted text-green-500 border-green-500 mb-4">
        <h1>My Resume</h1>
        <ProfileOutlined />
      </div>
      <div className="flex flex-col lg:grid grid-cols-2  p-0 lg:p-4">
        <div className="col-span-1">
          <h1 className="text-center text-3xl font-bold underline m-4">
            Projects
          </h1>
          <Projects />
        </div>
        <div className="col-span-1">
          <h1 className="text-center text-3xl font-bold underline m-4">
            Education
          </h1>
          <Education />
        </div>
      </div>
      <h1 className="text-center text-2xl font-bold underline m-4">SKILLS</h1>
      <div className="flex flex-col lg:flex-row p-0 m-0 lg:p-8 lg:m-8 ">
        <div>
          <Skills label="HTML" percent={95} />
          <Skills label="CSS" percent={95} />
          <Skills label="TailwindCSS" percent={95} />
          <Skills label="JavaScript (ES6+)" percent={90} />
          <Skills label="TypeScript" percent={88} />
          <Skills label="React.js" percent={90} />
          <Skills label="Next.js" percent={88} />
          <Skills label="React Native" percent={85} />
        </div>
        <div>
          <Skills label="NestJS" percent={85} />
          <Skills label="Node.js" percent={85} />
          <Skills label="Prisma ORM" percent={88} />
          <Skills label="PostgreSQL" percent={87} />
          <Skills label="Firebase" percent={90} />
          <Skills label="Cloudinary" percent={85} />
          <Skills label="Git & GitHub" percent={92} />
          <Skills label="REST API Design" percent={90} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
