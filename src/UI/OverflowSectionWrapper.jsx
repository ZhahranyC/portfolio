import React from "react";

const OverflowSectionWrapper = (props) => {
  return (
    <div className="w-full h-screen snap-start py-[68px] md:pt-[102px] md:pr-[90px] md:pl-[128px] bg-main-bg">
      {props.children}
    </div>
  );
};

export default OverflowSectionWrapper;
