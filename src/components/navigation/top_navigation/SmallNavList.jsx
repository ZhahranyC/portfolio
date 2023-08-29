import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SectionContext from "../../../store/section-context";
import SmallNavItem from "./SmallNavItem";
import {
  smallNavListCotainer,
  smallNavListItem,
} from "../../../constants/animationList";

const SmallNavList = ({ isOpen, setIsOpen }) => {
  const sectionCtx = useContext(SectionContext);

  const sectionList = sectionCtx.sectionList;
  const activeSection = sectionCtx.activeSection;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          variants={smallNavListCotainer}
          animate="show"
          initial="hidden"
          exit="left"
          className="w-full h-full flex flex-col gap-[52px] md:bg-transparent bg-main-bg"
        >
          {sectionList.map((section) => (
            <motion.li variants={smallNavListItem} key={section.id}>
              <SmallNavItem
                sectionName={section.name}
                sectionId={section.id}
                selected={section.id === activeSection}
                updateSection={sectionCtx.updateSection}
                setIsOpen={setIsOpen}
              />
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default SmallNavList;
