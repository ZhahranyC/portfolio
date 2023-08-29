const container = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const leftItem = {
  hidden: {
    opacity: 0,
    x: "-100%",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  left: {
    opacity: 0,
  },
};

const rightItem = {
  hidden: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      type: "tween",
      duration: 0.7,
    },
  },
  left: {
    opacity: 0,
  },
};

const skillAnimContainer = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  left: {
    opacity: 0,
  },
};

const skillAnim = {
  hidden: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

const projectAnimcontainer = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  left: {
    opacity: 0,
  },
};

const projectAnim = {
  hidden: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

const smallNavListCotainer = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  left: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const smallNavListItem = {
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
  show: {
    opacity: 1,
    y: "0",
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

export {
  container,
  leftItem,
  rightItem,
  skillAnim,
  skillAnimContainer,
  projectAnim,
  projectAnimcontainer,
  smallNavListCotainer,
  smallNavListItem,
};
