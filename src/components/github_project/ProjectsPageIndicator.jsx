import React from "react";

const ProjectsPageIndicator = ({ activePage, pageCount }) => {
  const arrayToIterate = Array.from({ length: pageCount });

  return (
    <div className="w-full flex justify-center items-center gap-1 md:hidden">
      {arrayToIterate.map((item, index) => (
        <div
          key={index}
          className={`${
            activePage === index
              ? "w-[14px] bg-main-green"
              : "w-[8px] bg-white/70"
          } aspect-square rounded-full`}
        />
      ))}
    </div>
  );
};

export default ProjectsPageIndicator;
