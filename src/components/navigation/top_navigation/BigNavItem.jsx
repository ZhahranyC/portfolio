import React from "react";
import { motion } from "framer-motion";

const BigNavItem = ({ sectionName, sectionId, selected, updateSection }) => {
  return (
    <div>
      <button
        onClick={() => {
          updateSection(sectionId);
        }}
        className={`font-raleway text-[16px] xl:text-[19px] ${
          selected
            ? " text-white font-semibold"
            : "font-light text-navbar-base hover:text-white hover:font-normal"
        } `}
      >
        {sectionName}
      </button>
      <motion.div
        className="h-1 bg-main-green"
        animate={{
          width: selected ? "100%" : "0px",
        }}
        initial={{
          width: "0px",
        }}
      />
    </div>
  );
};

export default BigNavItem;
