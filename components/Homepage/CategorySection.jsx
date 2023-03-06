import { fadeInVariant, motion } from "assets/motion/motionVariants";
import ArticlesGrid from "components/Articles/ArticlesGrid/ArticlesGrid";
import useArticles from "hooks/useArticles";
import PropTypes from "prop-types";
import { CATEGORIES } from "utils";
import styles from "./homepageComponents.module.scss";
import { jost } from "assets/fonts/nextFonts";

const CategorySection = ({ category }) => {
  const { getArticlesByCategory } = useArticles();

  // Create title according to category type
  const title = CATEGORIES.find(({ type }) => type === category).name;

  const articles = getArticlesByCategory(category);

  return (
    <motion.div
      className={styles.categoryContainer}
      style={jost.style}
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
