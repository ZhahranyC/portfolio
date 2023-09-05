import React, { useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SectionWrapper from "../UI/SectionWrapper";
import SectionContext from "../store/section-context";
import SubHeadingText from "../UI/SubHeadingText";
import DescText from "../UI/DescText";
import { container, leftItem } from "../constants/animationList";

const socialMediaList = [
  {
    source: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="100px"
        height="100px"
      >
        <path d="M42.298,11.65c-0.676-1.021-1.633-1.802-2.768-2.256c-2.464-0.988-4.583-1.648-6.479-2.02	C31.721,7.114,30.404,7.768,29.771,9l-0.158,0.308c-1.404-0.155-2.895-0.207-4.593-0.164c-1.741-0.042-3.237,0.009-4.643,0.164	L20.22,9c-0.633-1.232-1.952-1.885-3.279-1.625c-1.896,0.371-4.016,1.031-6.479,2.02c-1.134,0.454-2.091,1.234-2.768,2.256	c-4.721,7.131-6.571,14.823-5.655,23.517c0.032,0.305,0.202,0.578,0.461,0.741c3.632,2.29,6.775,3.858,9.891,4.936	c1.303,0.455,2.748-0.054,3.517-1.229l1.371-2.101c-1.092-0.412-2.158-0.9-3.18-1.483c-0.479-0.273-0.646-0.884-0.373-1.363	c0.273-0.481,0.884-0.65,1.364-0.373c3.041,1.734,6.479,2.651,9.942,2.651s6.901-0.917,9.942-2.651	c0.479-0.277,1.09-0.108,1.364,0.373c0.273,0.479,0.106,1.09-0.373,1.363c-1.056,0.603-2.16,1.105-3.291,1.524l1.411,2.102	c0.581,0.865,1.54,1.357,2.528,1.357c0.322,0,0.647-0.053,0.963-0.161c3.125-1.079,6.274-2.649,9.914-4.944	c0.259-0.163,0.429-0.437,0.461-0.741C48.869,26.474,47.019,18.781,42.298,11.65z M18.608,28.983c-1.926,0-3.511-2.029-3.511-4.495	c0-2.466,1.585-4.495,3.511-4.495s3.511,2.029,3.511,4.495C22.119,26.954,20.534,28.983,18.608,28.983z M31.601,28.957	c-1.908,0-3.478-2.041-3.478-4.522s1.57-4.522,3.478-4.522c1.908,0,3.478,2.041,3.478,4.522S33.509,28.957,31.601,28.957z" />
      </svg>
    ),
    name: "discord",
    url: "https://www.discordapp.com/users/1051364796794159134",
  },
  {
    source: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="100px"
        height="100px"
      >
        {" "}
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
      </svg>
    ),
    name: "linkedin",
    url: "https://www.linkedin.com/in/chandra-rafli-665a18271/",
  },
  {
    source: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="100px"
        height="100px"
      >
        {" "}
        <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
      </svg>
    ),
    name: "github",
    url: "https://github.com/ZhahranyC",
  },
];

const Contact = ({ handleOnWheel, handleOnVerticalSwipe }) => {
  const sectionCtx = useContext(SectionContext);

  return (
    <SectionWrapper>
      <AnimatePresence>
        {sectionCtx.activeSection === 3 && (
          <motion.div
            variants={container}
            animate="show"
            initial="hidden"
            exit="left"
            id="3"
            className="w-full h-full  pt-[60px]  flex justify-center md:pt-[10%]"
            onWheel={(event) => handleOnWheel(event, 3)}
            drag="y"
            dragConstraints={{ bottom: 0, top: 0 }}
            dragElasti={0.1}
            onDragEnd={(event, info) => handleOnVerticalSwipe(event, info, 3)}
          >
            <div className="md:w-[80%] xl:max-w-[1400px] flex flex-col gap-11 ">
              <div className="flex flex-col gap-2 md:w-[60%] md:gap-4">
                <motion.div variants={leftItem}>
                  <SubHeadingText>
                    <h2>Contact.</h2>
                  </SubHeadingText>
                </motion.div>
                <motion.div variants={leftItem}>
                  <DescText>
                    Feel free to reach out if you want to build something
                    together, have a question, or just want to connect.
                  </DescText>
                </motion.div>
                <motion.a
                  variants={leftItem}
                  href="mailTo:zhahrany@gmail.com"
                  className=" font-raleway font-bold text-white hover:text-light-green text-[14px] md:text-[16px] xl:text-[20px] underline"
                >
                  zhahrany@gmail.com
                </motion.a>
              </div>
              <motion.div
                variants={leftItem}
                className="w-full flex items-center justify-center gap-5 md:justify-start"
              >
                {socialMediaList.map((socialMedia) => (
                  <a
                    href={socialMedia.url}
                    key={socialMedia.name}
                    className="fill-white hover:fill-light-green"
                    target="_blank"
                  >
                    <div className="w-[20px] aspect-square md:w-[22px] relative">
                      <div className="w-full absolute hover:w-[24px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                        {socialMedia.source}
                      </div>
                    </div>
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Contact;
