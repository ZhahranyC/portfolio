import React from "react";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

const SkillsPerPage = ({ skills, index, isOnFirstPage, setIsOnFirstPage }) => {
  const hanldeSwipe = (event, info) => {
    const swipeThreshold = 10;

    if (info.offset.x > swipeThreshold) {
      setIsOnFirstPage(true);
    } else if (info.offset.x < -swipeThreshold) {
      setIsOnFirstPage(false);
    }
  };

  return (
    <motion.div
      className={`${
        index == 1 ? " left-[100vw]" : ""
      } absolute w-full  grid grid-cols-3 gap-[8%] px-[12%]`}
      drag="x"
      dragElastic={0.1}
      onDragEnd={(event, info) => hanldeSwipe(event, info)}
      animate={{
        x: isOnFirstPage ? "0vw" : "-100vw",
      }}
    >
      {skills.map((skill, skillIndex) => (
        <SkillItem skill={skill} key={skillIndex} />
      ))}
    </motion.div>
  );
};

export default SkillsPerPage;
