import React, { useContext } from "react";
import { motion } from "framer-motion";

import SectionContext from "../../store/section-context";

const BottomNavigaton = () => {
  const sectionCtx = useContext(SectionContext);

  const sectionList = sectionCtx.sectionList;
  const activeSection = sectionCtx.activeSection;

  return (
    <div className="md:hidden flex fixed bottom-0 left-1/2 -translate-x-1/2">
      <ul className="flex -rotate-90 aspect-square flex-col gap-6">
        {sectionList.map((section) => (
          <li
            key={section.id}
            className={`${
              activeSection === section.id ? "w-[42px]" : "w-[26px]"
            } flex`}
          >
            <motion.div
              className=" bg-white"
              animate={{
                width: section.id === activeSection ? "42px" : "26px",
                height: section.id === activeSection ? "3px" : "2px",
                opacity: section.id === activeSection ? 1 : 0.7,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavigaton;
