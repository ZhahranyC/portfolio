import React, { useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SectionContext from "../store/section-context";
import SubHeadingText from "../UI/SubHeadingText";
import DescText from "../UI/DescText";
import OverflowSectionWrapper from "../UI/OverflowSectionWrapper";
import ProjectsContainer from "../components/github_project/ProjectsContainer";
import ProjectsPageIndicator from "../components/github_project/ProjectsPageIndicator";
import profile from "../assets/projects/profile.webp";
import { container, leftItem, rightItem } from "../constants/animationList";

const Projects = ({ handleOnWheel, handleOnVerticalSwipe }) => {
  const sectionCtx = useContext(SectionContext);
  const [activePage, setActivePage] = useState(0);

  const [repoGroups, setRepoGroups] = useState([]);

  useEffect(() => {
    const apiUrl =
      "https://api.github.com/users/ZhahranyC/repos?type=public&sort=stars";
    const token = import.meta.env.VITE_GITHUB_TOKEN;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => {
        const nonForkedRepos = data.filter((repo) => !repo.fork);
        nonForkedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);

        const topRepos = nonForkedRepos.slice(0, 6);

        const groupedRepos = [];
        for (let i = 0; i < nonForkedRepos.length; i += 2) {
          const group = [nonForkedRepos[i], nonForkedRepos[i + 1]].filter(
            Boolean
          ); // Remove undefined values
          groupedRepos.push(group);
        }

        setRepoGroups(groupedRepos);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <OverflowSectionWrapper>
      <AnimatePresence>
        {sectionCtx.activeSection === 2 && (
          <motion.div
            variants={container}
            animate="show"
            initial="hidden"
            exit="left"
            id="2"
            className="w-full h-full pt-[60px] md:pt-0 md:flex md:items-center justify-center "
            onWheel={(event) => handleOnWheel(event, 2)}
            drag
            dragConstraints={{ bottom: 0, left: 0, right: 0, top: 0 }}
            dragElastic={0}
            onDragEnd={(event, info) => handleOnVerticalSwipe(event, info, 2)}
          >
            <div className="w-full h-full md:w-[80%]  xl:max-w-[1400px]  flex flex-col  gap-14 md:gap-6  md:justify-center ">
              <div className="px-[26px] md:px-0  md:flex md:w-full md:justify-between md:items-start  md:gap-7">
                <div className="flex flex-col gap-2 md:gap-4  md:w-[70%] xl:w-[55%]">
                  <motion.div variants={leftItem}>
                    <SubHeadingText>
                      <h2>Projects.</h2>
                    </SubHeadingText>
                  </motion.div>
                  <motion.div variants={leftItem}>
                    <DescText>
                      <p className=" line-clamp-3">
                        These are my open source projects which are fetched
                        directly from Github. If you're a developer, fell free
                        to make a pull request.
                      </p>
                    </DescText>
                  </motion.div>
                </div>
                <motion.div
                  variants={rightItem}
                  className="hidden md:flex items-center gap-4"
                >
                  <div className="w-[60px] hidden md:block">
                    <img
                      src={profile}
                      alt="github profile pic"
                      className="w-full aspect-square rounded-full"
                    />
                  </div>
                  <div className="hidden md:block">
                    <h2 className=" font-raleway font-bold text-[20px] text-white">
                      Zhahrany
                    </h2>
                    <h2 className="font-raleway font-light text-[18px] text-white">
                      ZhahranyC
                    </h2>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col gap-8 h-full md:gap-0  md:h-fit">
                <ProjectsPageIndicator
                  activePage={activePage}
                  pageCount={repoGroups.length}
                />
                <div className="relative w-full grow overflow-hidden md:grow-0">
                  <ProjectsContainer
                    activePage={activePage}
                    setActivePage={setActivePage}
                    repoGroups={repoGroups}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </OverflowSectionWrapper>
  );
};

export default Projects;
