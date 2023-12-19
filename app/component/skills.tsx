import React from "react";
import { Progress } from "antd";

interface SkillProps {
  label: string;
  percent: number;
}

const Skills: React.FC<SkillProps> = ({ label, percent }) => {
  return (
    <div className="grid grid-cols-5 mb-4">
      <div className="col-span-1">
        <h1>{label}:</h1>
      </div>
      <div className="col-span-4">
        <Progress
          percent={percent}
          size={[700, 20]}
          status="active"
          strokeColor="green"
        />
      </div>
    </div>
  );
};

export default Skills;
