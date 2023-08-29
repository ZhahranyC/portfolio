import React from "react";

const DescText = (props) => {
  return (
    <div className=" font-raleway font-light text-[14px] text-white/70 leading-5 md:text-[16px] md:leading-7 xl:text-[20px] xl:leading-8">
      {props.children}
    </div>
  );
};

export default DescText;
