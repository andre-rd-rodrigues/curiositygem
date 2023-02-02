import PropTypes from "prop-types";
import Slider from "react-slick";
import { SLIDER_SETTINGS } from "utils";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./articlesslider.module.scss";

const ArticlesSlider = ({ weeklyArticles }) => {
  const settings = {
    ...SLIDER_SETTINGS,
    dotsClass: `${styles.dots} slick-dots`
  };

  const articles = weeklyArticles.map((article) => (
    <div id="articles-card-container" key={article.id}>
      <ArticleCard article={article} />
    </div>
  ));

  return (
    <Slider {...settings} className={styles.sliderContainer}>
      {articles}
    </Slider>
  );
};

ArticlesSlider.propTypes = {
  weeklyArticles: PropTypes.array
};

export default ArticlesSlider;
