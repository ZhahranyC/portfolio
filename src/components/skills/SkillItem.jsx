import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-[10px]">
      <img src={skill.source} alt={skill.name} />
      <h3 className="text-white w-full text-center font-raleway text-[12px] font-medium md:text-[14px] xl:text-[16px]">
        {skill.name.toUpperCase()}
      </h3>
    </div>
  );
};

export default SkillItem;
