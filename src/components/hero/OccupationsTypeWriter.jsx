import React from "react";
import { Typewriter } from "react-simple-typewriter";

const OccupationsTypeWriter = () => {
  return (
    <h2 className="text-[24px] font-bold md:text-[28px] xl:text-[32px] font-raleway text-white">
      I'm{" "}
      <span className="text-main-green">
        <Typewriter
          words={["a web developer", "an android developer", "a data analyst"]}
          loop={0}
          cursorBlinking={true}
          cursor={true}
          typeSpeed={100}
          deleteSpeed={60}
        />
      </span>
    </h2>
  );
};

export default OccupationsTypeWriter;
