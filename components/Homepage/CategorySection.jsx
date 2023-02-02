import { fadeInVariant, motion } from "assets/motion/motionVariants";
import ArticlesGrid from "components/Articles/ArticlesGrid/ArticlesGrid";
import PropTypes from "prop-types";
import { CATEGORIES, getArticlesByCategory } from "utils";
import styles from "./homepageComponents.module.scss";

const CategorySection = ({ categoryType }) => {
  // Create title according to category type
  const title = CATEGORIES.find(({ type }) => type === categoryType).name;

  const articles = getArticlesByCategory(categoryType);

  return (
    <motion.div
      className={styles.categoryContainer}
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 className="recent_post">{title}:</motion.h2>
      <ArticlesGrid articles={articles} />
    </motion.div>
  );
};

CategorySection.propTypes = {
  categoryType: PropTypes.string
};

export default CategorySection;
