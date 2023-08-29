import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ProjectsPerPage from "./ProjectsPerPage";
import ProjectCard from "./ProjectCard";
import {
  projectAnim,
  projectAnimcontainer,
} from "../../constants/animationList";
import SectionContext from "../../store/section-context";

const ProjectsContainer = ({ activePage, setActivePage, repoGroups }) => {
  const sectionCtx = useContext(SectionContext);

  const repos = [].concat(...repoGroups);

  return (
    <div className=" absolute w-full md:static ">
      {repoGroups.map((repos, index) => (
        <ProjectsPerPage
          key={index}
          page={index}
          repos={repos}
          activePage={activePage}
          setActivePage={setActivePage}
          pageCount={repoGroups.length}
        />
      ))}
      <AnimatePresence>
        {sectionCtx.activeSection === 2 && (
          <motion.div
            variants={projectAnimcontainer}
            animate="show"
            initial="hidden"
            exit="left"
            className="hidden md:grid md:grid-cols-2 md:gap-5 xl:grid-cols-3 w-full  "
          >
            {repos.map((repo) => (
              <motion.div key={repo.name} variants={projectAnim}>
                <ProjectCard repo={repo} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsContainer;
