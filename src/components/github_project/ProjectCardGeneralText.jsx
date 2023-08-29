import React from "react";

const ProjectCardGeneralText = (props) => {
  return (
    <div className="font-raleway font-light text-[12px] text-white/80 leading-[13px] md:text-[13px] md:leading-[15px] xl:text-[14px]">
      {props.children}
    </div>
  );
};

export default ProjectCardGeneralText;
