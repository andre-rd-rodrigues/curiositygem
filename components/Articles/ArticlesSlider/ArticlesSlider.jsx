import PropTypes from "prop-types";
import Slider from "react-slick";
import { SLIDER_SETTINGS } from "utils";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./articlesslider.module.scss";

const ArticlesSlider = ({ articles }) => {
  const settings = {
    ...SLIDER_SETTINGS,
    dotsClass: `${styles.dots} slick-dots`
  };

  const renderArticles = articles.map((article) => (
    <div className={styles.cardContainer} key={article.id}>
      <ArticleCard article={article} />
    </div>
  ));

  return (
    <Slider {...settings} className={styles.container}>
      {renderArticles}
    </Slider>
  );
};

ArticlesSlider.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticlesSlider;
