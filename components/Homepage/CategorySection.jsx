import { fadeInVariant, motion } from "assets/motion/motionVariants";
import ArticlesGrid from "components/Articles/ArticlesGrid/ArticlesGrid";
import PropTypes from "prop-types";
import { CATEGORIES } from "utils";
import styles from "./homepageComponents.module.scss";

const CategorySection = ({ category, articles }) => {
  // Create title according to category type
  const title = CATEGORIES.find(({ type }) => type === category).name;

  return (
    <motion.div
      className={styles.categoryContainer}
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 className={styles.categoryTitle}>{title}:</motion.h2>
      <ArticlesGrid articles={articles} />
    </motion.div>
  );
};

CategorySection.propTypes = {
  categoryType: PropTypes.string
};

export default CategorySection;
