import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

const ProjectsPerPage = ({
  page,
  repos,
  activePage,
  setActivePage,
  pageCount,
}) => {
  const initialPageOverflow =
    page === 0 ? "" : page === 1 ? "left-[100vw]" : "left-[200vw]";

  const swipeAnimation =
    activePage === 0 ? "0vw" : activePage === 1 ? "-100vw" : "-200vw";

  const hanldeSwipe = (event, info) => {
    const swipeThreshold = 10;

    if (info.offset.x < -swipeThreshold && activePage != pageCount - 1) {
      setActivePage(activePage + 1);
    } else if (info.offset.x > swipeThreshold && activePage != 0) {
      setActivePage(activePage - 1);
    }
  };

  return (
    <motion.div
      className={`${initialPageOverflow} absolute flex flex-col gap-[24px] w-full h-auto px-[26px] md:hidden`}
      drag="x"
      dragElastic={0.1}
      onDragEnd={(event, info) => hanldeSwipe(event, info)}
      animate={{
        x: swipeAnimation,
      }}
    >
      {repos.map((repo, index) => (
        <ProjectCard key={index} repo={repo} />
      ))}
    </motion.div>
  );
};

export default ProjectsPerPage;
