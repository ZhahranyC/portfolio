import { useState } from "react";
import SectionContext from "./section-context";

const SectionProvider = (props) => {
  const [activeSection, setActiveSection] = useState(0);

  const sectionContext = {
    activeSection: activeSection,
    sectionList: [
      {
        name: "About Me",
        id: 0,
      },
      {
        name: "Skills",
        id: 1,
      },
      {
        name: "Projects",
        id: 2,
      },
      {
        name: "Contact",
        id: 3,
      },
    ],
    updateSection: (sectionId) => {
      setActiveSection(sectionId);
    },
  };

  return (
    <SectionContext.Provider value={sectionContext}>
      {props.children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
