import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import skillList from "../../constants/SkillList";
import SkillsPerPage from "./SkillsPerPage";
import SkillItem from "./SkillItem";
import SectionContext from "../../store/section-context";
import { skillAnimContainer, skillAnim } from "../../constants/animationList";

const firstSkillBundle = skillList.slice(0, 6);
const secondSkillBundle = skillList.slice(6);
const skillsBundle = [firstSkillBundle, secondSkillBundle];

const SkillsContainer = ({ isOnFirstPage, setIsOnFirstPage }) => {
  const sectionCtx = useContext(SectionContext);

  return (
    <>
      <div className="md:hidden w-full  left-0 absolute aspect-[3/2] my-[20px] flex overflow-hidden pb-[20px]">
        {skillsBundle.map((skills, index) => (
          <SkillsPerPage
            skills={skills}
            index={index}
            key={index}
            isOnFirstPage={isOnFirstPage}
            setIsOnFirstPage={setIsOnFirstPage}
          />
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          className="hidden md:grid grid-cols-4 gap-[6%] px-[8%] max-w-3xl"
          variants={skillAnimContainer}
          animate="show"
          initial="hidden"
          exit="left"
        >
          {skillList.map((skill) => (
            <motion.div key={skill.name} variants={skillAnim}>
              <SkillItem skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SkillsContainer;
