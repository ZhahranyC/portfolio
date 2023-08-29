import React from "react";

const SkillsPageIndicator = ({ isOnFirstPage }) => {
  return (
    <div className="md:hidden w-full flex justify-center items-center gap-1 pb-[40px]">
      <div className="flex justify-center items-center w-[14px] aspect-square">
        <div
          className={`${
            isOnFirstPage ? "w-[14px] bg-main-green" : "w-[8px] bg-white/70"
          }  aspect-square rounded-full`}
        />
      </div>

      <div className="flex justify-center items-center w-[14px] aspect-square">
        <div
          className={`${
            !isOnFirstPage ? "w-[14px] bg-main-green" : "w-[8px] bg-white/70"
          }  aspect-square rounded-full`}
        />
      </div>
    </div>
  );
};

export default SkillsPageIndicator;
