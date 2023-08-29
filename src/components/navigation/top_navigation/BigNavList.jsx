import React, { useContext } from "react";
import SectionContext from "../../../store/section-context";
import BigNavItem from "./BigNavItem";

const BigNavList = ({ isOpen, setIsOpen }) => {
  const sectionCtx = useContext(SectionContext);

  const sectionList = sectionCtx.sectionList;
  const activeSection = sectionCtx.activeSection;

  return (
    <ul className="hidden md:flex gap-[54px]">
      {sectionList.map((section) => (
        <li key={section.id}>
          <BigNavItem
            sectionName={section.name}
            sectionId={section.id}
            selected={section.id === activeSection}
            updateSection={sectionCtx.updateSection}
          />
        </li>
      ))}
    </ul>
  );
};

export default BigNavList;
