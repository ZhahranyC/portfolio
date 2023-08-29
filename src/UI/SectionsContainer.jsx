import React, { useContext } from "react";
import { useEffect, useRef, useState } from "react";

import AboutMe from "../section/AboutMe";
import Skills from "../section/Skills";
import Projects from "../section/Projects";
import Contact from "../section/Contact";
import SectionContext from "../store/section-context";

const SectionsContainer = () => {
  const firstSectionRef = useRef();
  const secondSectionRef = useRef();
  const thirdSectionRef = useRef();
  const fourthSectionRef = useRef();
  const sectionCtx = useContext(SectionContext);

  useEffect(() => {
    switch (sectionCtx.activeSection) {
      case 0:
        firstSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        break;

      case 1:
        secondSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        thirdSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        fourthSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }, [sectionCtx.activeSection]);

  const handleOnWheel = (event, sectionId) => {
    const scrollThreshold = 100;

    if (event.deltaY > scrollThreshold && sectionCtx.activeSection != 3) {
      sectionCtx.updateSection(sectionId + 1);
    } else if (
      event.deltaY < -scrollThreshold &&
      sectionCtx.activeSection != 0
    ) {
      sectionCtx.updateSection(sectionId - 1);
    }
  };

  return (
    <div className="w-full h-full overflow-y-hidden">
      <section ref={firstSectionRef}>
        <AboutMe handleOnWheel={handleOnWheel} />
      </section>
      <section ref={secondSectionRef}>
        <Skills handleOnWheel={handleOnWheel} />
      </section>
      <section ref={thirdSectionRef}>
        <Projects handleOnWheel={handleOnWheel} />
      </section>
      <section ref={fourthSectionRef}>
        <Contact handleOnWheel={handleOnWheel} />
      </section>
    </div>
  );
};

export default SectionsContainer;
