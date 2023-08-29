import React, { useEffect, useContext } from "react";

const SectionWrapper = (props) => {
  return (
    <div className="w-full h-screen py-[68px] px-[26px] md:pt-[102px] md:pr-[90px] md:pl-[128px] bg-main-bg">
      {props.children}
    </div>
  );
};

export default SectionWrapper;
