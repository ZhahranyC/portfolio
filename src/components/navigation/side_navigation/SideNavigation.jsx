import React, { useContext } from "react";
import SectionContext from "../../../store/section-context";
import { motion } from "framer-motion";

const SideNavigation = () => {
  const sectionCtx = useContext(SectionContext);

  const sectionList = sectionCtx.sectionList;
  const activeSection = sectionCtx.activeSection;

  const handleClick = (sectionId) => {
    sectionCtx.updateSection(sectionId);
  };

  return (
    <div className="hidden md:block fixed top-1/2 left-0 -translate-y-1/2 pl-[54px] w-fit">
      <ul className="h-full flex flex-col justify-center gap-[6px]">
        {sectionList.map((section) => (
          <li key={section.id}>
            <button onClick={() => handleClick(section.id)}>
              <motion.div
                className="bg-white hover:bg-light-green transition-colors"
                animate={{
                  width: section.id === activeSection ? "66px" : "32px",
                  height: section.id === activeSection ? "3px" : "2px",
                  opacity: section.id === activeSection ? 1 : 0.7,
                }}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavigation;
