import React from "react";
import { Progress } from "../antd";

interface SkillProps {
  label: string;
  percent: number;
}

const Skills: React.FC<SkillProps> = ({ label, percent }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-medium text-gray-200 sm:text-base">{label}</h3>
        <span className="text-sm font-semibold text-green-300">{percent}%</span>
      </div>
      <Progress
        percent={percent}
        size={["100%", 14]}
        status="active"
        strokeColor="rgb(34 197 94)"
        trailColor="rgba(255,255,255,0.08)"
        showInfo={false}
      />
    </div>
  );
};

export default Skills;
