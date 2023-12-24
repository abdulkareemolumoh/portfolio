import React from "react";
import { Progress } from "../antd";

interface SkillProps {
  label: string;
  percent: number;
}

const Skills: React.FC<SkillProps> = ({ label, percent }) => {
  return (
    <div className="grid grid-cols-12 mb-2 w-screen">
      <div className="col-span-3">
        <h1>{label}:</h1>
      </div>
      <div className="col-span-9 ">
        <Progress
          percent={percent}
          size={[250, 30]}
          status="active"
          strokeColor="rgb(34 197 94)"
        />
      </div>
    </div>
  );
};

export default Skills;
