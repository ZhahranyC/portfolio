import React from "react";

const SectionContext = React.createContext({
  activeSection: 0,
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
  updateSection: (section) => {},
});

export default SectionContext;
