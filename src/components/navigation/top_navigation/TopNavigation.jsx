import React, { useState } from "react";

import { Sling as Hamburger } from "hamburger-react";
import TopLogo from "./TopLogo";
import BigNavList from "./BigNavList";
import SmallNavList from "./SmallNavList";
import { AnimatePresence, motion } from "framer-motion";
import { smallNavListCotainer } from "../../../constants/animationList";

const TopNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full">
      <div
        className={`w-full flex justify-between pt-[28px] px-[25px] items-center md:bg-transparent md:pt-[54px] md:px-[54px] ${
          isOpen ? " bg-main-bg" : " bg-transparent"
        }`}
      >
        <div>{!isOpen && <TopLogo />}</div>

        <div>
          <div className=" md:hidden  text-white">
            <Hamburger size={22} toggle={setIsOpen} toggled={isOpen} />
          </div>

          <nav className="">
            <BigNavList isOpen={isOpen} setIsOpen={setIsOpen} />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={smallNavListCotainer}
            animate="show"
            initial="hidden"
            exit="left"
            className="md:hidden w-full h-screen pt-[108px] bg-main-bg"
          >
            <nav>
              <SmallNavList isOpen={isOpen} setIsOpen={setIsOpen} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopNavigation;
