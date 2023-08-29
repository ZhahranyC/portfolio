import React from "react";

const SkillInterest = () => {
  return (
    <div className="hidden w-[80%] bg-sub-green md:flex flex-col items-center font-raleway text-white py-[20px] gap-3 rounded-[10px] md:text-[16px] xl:text-[20px]">
      <div>
        <h3 className="font-medium">INTEREST</h3>
      </div>

      <div className="flex flex-col items-center font-light">
        <p>FullStack Development</p>
        <p>Android Development</p>
        <p>Machine Learning</p>
      </div>
    </div>
  );
};

export default SkillInterest;
