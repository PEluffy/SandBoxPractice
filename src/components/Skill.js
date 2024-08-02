import { createPortal } from "react-dom";

export const Skill = ({ skillName, emoji, backgroundColor }) => {
  return (
    <div className="skill" style={{ backgroundColor }}>
      <div>{skillName}</div>
      <div>{emoji}</div>
    </div>
  );
};
