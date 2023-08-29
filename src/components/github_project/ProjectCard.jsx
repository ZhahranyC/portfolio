import React from "react";

import languageColors from "../../assets/projects/colors/colors.json";

import {
  gitFork,
  bookmark1,
  bookmark2,
  star,
  repo,
} from "../../assets/projects";
import ProjectCardGeneralText from "./ProjectCardGeneralText";

const ProjectCard = ({ repo }) => {
  const colorSource = languageColors[repo.language];
  console.log(repo);

  return (
    <div className="w-full flex flex-col gap-[12px] border-[1px] rounded-md border-white/70 py-[22px] px-[18px] md:min-h-[150px]">
      <div className="flex gap-2 h-[20px] items-center">
        <img
          src={bookmark1}
          alt="repository icon"
          className=" h-full aspect-auto"
        />
        <a
          href={repo.html_url}
          target="_blank"
          className=" font-raleway text-[15px] text-light-green hover:text-blue-500 hover:underline transition-colors font-medium md:text-[18px] xl:text-[19px]"
        >
          {repo.name}
        </a>
      </div>
      <div className="flex grow">
        <p className="font-raleway font-light text-[12px] text-white/80 leading-[13px] md:text-[14px] md:leading-[18px]">
          {repo.description ? repo.description : "no description added"}
        </p>
      </div>
      <div className="flex gap-[12px]">
        <div className="flex items-center gap-1">
          <div
            className={`bg w-[8px] aspect-square rounded-full`}
            style={{
              backgroundColor: colorSource ? colorSource.color : "white",
            }}
          />
          <ProjectCardGeneralText>
            <p>{repo.language ? repo.language : "general"}</p>
          </ProjectCardGeneralText>
        </div>
        <div className="flex items-center gap-1 h-[10px]">
          <img src={star} alt="stargazer count" className="h-full" />
          <ProjectCardGeneralText>
            <p className="">{repo.stargazers_count}</p>
          </ProjectCardGeneralText>
        </div>
        <div className="flex items-center gap-1 h-[10px]">
          <img src={gitFork} alt="fork count" className="h-full" />
          <ProjectCardGeneralText>
            <p>{repo.forks_count}</p>
          </ProjectCardGeneralText>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
