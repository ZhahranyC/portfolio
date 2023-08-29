import React from "react";
import { motion } from "framer-motion";

import heroImage from "../../assets/hero/tara_head.webp";

const HeroImage = () => {
  return (
    <div className=" relative w-full aspect-square flex justify-center items-center">
      <motion.div
        className=" absolute w-[70%] max-w-[500px] aspect-square bg-sub-bg translate-x-[8%] translate-y-[8%] rounded-[58px]"
        initial={{
          x: "5%",
          y: "5%",
        }}
        animate={{
          y: "15%",
          x: "10%",
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={heroImage}
        alt="hero image"
        className="absolute w-[70%] max-w-[500px] -translate-x-[8%] -translate-y-[8%] rounded-[58px] shadow-xl"
        animate={{
          y: "-10%",
          x: "-5%",
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default HeroImage;
