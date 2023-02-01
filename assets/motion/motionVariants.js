import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const containerDelayVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 3,
      staggerChildren: 0.5
    }
  }
};

//Blog
const HomepageDelayVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5
    }
  }
};
const fadeInVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2
    }
  }
};

//Animated heading
const wordTransition = [0.6, 0.02, 0.03, 0.9];

const animatedHeadingChildren = {
  hidden: {
    opacity: 0,
    y: "200%"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "linear",
      ease: wordTransition,
      duration: 1.5
    }
  }
};

const animatedHeadingContainer = {
  visible: {
    transition: {
      staggerChildren: 0.03
    }
  }
};

export {
  containerVariant,
  containerDelayVariant,
  animatedHeadingChildren,
  animatedHeadingContainer,
  fadeInVariant,
  HomepageDelayVariant,
  motion
};
