import React, { useContext } from "react";
import { motion } from "framer-motion";

import SectionContext from "../../../store/section-context";

const ScrollHint = () => {
  const sectionCtx = useContext(SectionContext);

  const activeSection = sectionCtx.activeSection;

  return (
    <div className="hidden fixed bottom-0 left-0 pl-[54px] md:flex ">
      <div className=" rotate-90 aspect-square flex items-end text-white">
        <motion.div
          className="flex items-center gap-6"
          animate={{
            x: activeSection === 0 ? "0" : "100%",
          }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
        >
          <h2 className="text-[14px] font-raleway font-light">SCROLL DOWN</h2>
          <div className=" border-b-2 border-white w-[96px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollHint;
