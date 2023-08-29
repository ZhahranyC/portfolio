import React from "react";

const SmallNavItem = ({
  sectionName,
  sectionId,
  selected,
  updateSection,
  setIsOpen,
}) => {
  return (
    <div className="w-full flex justify-center">
      <button
        onClick={() => {
          updateSection(sectionId);
          setIsOpen(false);
        }}
        className={`font-raleway font-light text-[25px] ${
          selected ? "text-main-green" : " text-white/80"
        }`}
      >
        {sectionName}
      </button>
    </div>
  );
};

export default SmallNavItem;
