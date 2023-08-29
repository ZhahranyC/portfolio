import React from "react";

const SubHeadingText = (props) => {
  return (
    <div className=" font-raleway font-bold text-[24px] md:text-[28px] xl:text-[32px] text-white">
      {props.children}
    </div>
  );
};

export default SubHeadingText;
