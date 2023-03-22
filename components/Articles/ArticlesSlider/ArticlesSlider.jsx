import PropTypes from "prop-types";
import Slider from "react-slick";
import { SLIDER_SETTINGS } from "utils";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./articlesslider.module.scss";

const ArticlesSlider = ({ articles }) => {
  const getSlidesToShow = () => {
    const articlesLength = articles.length;
    if (articlesLength >= 3) {
      return {
        breakpoint_lg: 3,
        breakpoint_md: 2,
        breakpoint_sm: 1
      };
    }
    if (articlesLength == 2) {
      return {
        breakpoint_lg: 2,
        breakpoint_md: 2,
        breakpoint_sm: 1
      };
    }

    if (articlesLength < 2) {
      return {
        breakpoint_lg: 1,
        breakpoint_md: 1,
        breakpoint_sm: 1
      };
    }
  };

  const slidesToShow = getSlidesToShow();

  const settings = {
    ...SLIDER_SETTINGS,
    slidesToShow: slidesToShow.breakpoint_lg,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: slidesToShow.breakpoint_md,
          arrows: true,
          autoplaySpeed: 9000
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: slidesToShow.breakpoint_sm,
          arrows: false,
          autoplaySpeed: 9000
        }
      }
    ],
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
