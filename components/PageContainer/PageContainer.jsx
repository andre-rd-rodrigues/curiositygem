import { jost } from "assets/fonts/nextFonts";
import { containerVariant } from "assets/motion/motionVariants";
import colors from "assets/styles/variables.module.scss";
import { motion } from "framer-motion";
import styles from "./pagecontainer.module.scss";

const PageContainer = ({
  children,
  bgColor = "grey-yellow",
  color = "dark",
  className
}) => {
  const containerStyles = className
    ? `${styles.container} ${className}`
    : `${styles.container}`;

  return (
    <div
      className={containerStyles}
      style={{
        backgroundColor: colors[bgColor],
        color: colors[color]
      }}
    >
      <motion.div
        variants={containerVariant}
        whileInView="visible"
        initial="hidden"
        className={styles.wrapper}
        style={jost.style}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageContainer;
