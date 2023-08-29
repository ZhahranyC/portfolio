import React, { useState, useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SkillsContainer from "../components/skills/SkillsContainer";
import SkillsPageIndicator from "../components/skills/SkillsPageIndicator";
import SkillInterest from "../components/skills/SkillInterest";

import SectionContext from "../store/section-context";
import OverflowSectionWrapper from "../UI/OverflowSectionWrapper";
import SubHeadingText from "../UI/SubHeadingText";
import DescText from "../UI/DescText";
import { container, leftItem, rightItem } from "../constants/animationList";

const Skills = ({ handleOnWheel }) => {
  const [isOnFirstPage, setIsOnFirstPage] = useState(true);
  const sectionCtx = useContext(SectionContext);

  return (
    <OverflowSectionWrapper>
      <AnimatePresence>
        {sectionCtx.activeSection === 1 && (
          <motion.div
            variants={container}
            animate="show"
            initial="hidden"
            exit="left"
            id="1"
            className="relative h-full w-full pt-[60px] md:flex md:flex-row-reverse md:items-center"
            onWheel={(event) => handleOnWheel(event, 1)}
          >
            <div className="md:w-[55%] w-full aspect-[3/2] md:aspect-auto">
              <motion.div
                className="w-full aspect-[3/2] md:flex items-center mb-[50px] md:justify-center"
                variants={rightItem}
              >
                <SkillsContainer
                  isOnFirstPage={isOnFirstPage}
                  setIsOnFirstPage={setIsOnFirstPage}
                />
              </motion.div>

              <SkillsPageIndicator
                isOnFirstPage={isOnFirstPage}
                setIsOnFirstPage={setIsOnFirstPage}
              />
            </div>
            <div className="md:w-[45%] flex md:justify-end px-[26px] md:px-0">
              <div className="flex flex-col gap-2 md:gap-4 md:w-[80%] md:max-w-[500px] xl:max-w-[600px]">
                <motion.div variants={leftItem}>
                  <SubHeadingText>
                    <h2>Skills.</h2>
                  </SubHeadingText>
                </motion.div>
                <motion.div variants={leftItem}>
                  <DescText>
                    <p>
                      An individual eager to learn and explore new fields of
                      life and technology with good listening skills and fast
                      learning abilities.
                    </p>
                  </DescText>
                </motion.div>
                <motion.div variants={leftItem}>
                  <SkillInterest />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </OverflowSectionWrapper>
  );
};

export default Skills;
