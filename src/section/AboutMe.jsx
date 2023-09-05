import React, { useContext, useEffect } from "react";
import SectionWrapper from "../UI/SectionWrapper";
import { AnimatePresence, motion } from "framer-motion";

import HeroImage from "../components/hero/HeroImage";
import SectionContext from "../store/section-context";
import OccupationsTypeWriter from "../components/hero/OccupationsTypeWriter";
import SubHeadingText from "../UI/SubHeadingText";
import DescText from "../UI/DescText";
import { container, leftItem, rightItem } from "../constants/animationList";

const AboutMe = ({ handleOnWheel, handleOnVerticalSwipe }) => {
  const sectionCtx = useContext(SectionContext);

  return (
    <SectionWrapper>
      <AnimatePresence>
        {sectionCtx.activeSection === 0 && (
          <motion.div
            id="0"
            className="flex flex-col md:flex-row-reverse w-full h-full  pt-6 md:pt-0 md:items-center"
            variants={container}
            initial="hidden"
            animate="show"
            exit="left"
            onWheel={(event) => handleOnWheel(event, 0)}
            drag="y"
            dragConstraints={{ bottom: 0 }}
            dragElastic={0}
            onDragEnd={(event, info) => handleOnVerticalSwipe(event, info, 0)}
          >
            <motion.div
              className="w-full flex justify-center items-center md:w-[55%]"
              variants={rightItem}
            >
              <HeroImage />
            </motion.div>
            <div className="md:w-[45%] flex justify-end" variants={leftItem}>
              <div className="font-raleway flex flex-col gap-2 md:gap-4 md:w-[80%] md:max-w-[500px] xl:max-w-[600px]">
                <motion.div variants={leftItem}>
                  <SubHeadingText>
                    <h3 className="text-white">Hello</h3>
                    <h3 className="text-white">
                      My name is{" "}
                      <span className=" text-main-green"> Zhahrany.</span>
                    </h3>
                    <motion.div variants={leftItem}>
                      <OccupationsTypeWriter />
                    </motion.div>
                  </SubHeadingText>
                </motion.div>

                <motion.div variants={leftItem}>
                  <DescText>
                    <p>
                      My area of interest include front-end for both web &
                      mobile app, with a performance oriented-focus. I obsessed
                      with building efficient, light, and fast application.
                      While still make it easy to maintain and give the best
                      user experience.
                    </p>
                  </DescText>
                </motion.div>
                <motion.div
                  className="font-bold text-white text-[14px] md:text-[16px] xl:text-[20px]"
                  variants={leftItem}
                >
                  <h3 className=" underline">Get My Resume</h3>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default AboutMe;
