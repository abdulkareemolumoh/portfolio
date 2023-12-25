import React from "react";
import { Progress } from "../antd";

interface SkillProps {
  label: string;
  percent: number;
}

const Skills: React.FC<SkillProps> = ({ label, percent }) => {
  return (
    <div className="grid grid-cols-12 mb-2 w-fit gap-8 ">
      <div className="col-span-3">
        <h1>{label}:</h1>
      </div>
      <div className="col-span-8 ">
        <Progress
          percent={percent}
          size={[250, 20]}
          status="active"
          strokeColor="rgb(34 197 94)"
          showInfo={false}
        />
      </div>
    </div>
  );
};

export default Skills;
