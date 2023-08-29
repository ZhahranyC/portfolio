import React, { Fragment } from "react";
import TopNavigation from "./top_navigation/TopNavigation";
import SideNavigation from "./side_navigation/SideNavigation";
import ScrollHint from "./side_navigation/ScrollHint";
import SideSocialMedia from "./social_media/SideSocialMedia";
import BottomNextIndicator from "./BottomNextIndicator";
import BottomNavigaton from "./BottomNavigaton";

const Nav = () => {
  return (
    <Fragment>
      <TopNavigation />
      <ScrollHint />
      <SideNavigation />
      <SideSocialMedia />
      <BottomNextIndicator />
      <BottomNavigaton />
    </Fragment>
  );
};

export default Nav;
