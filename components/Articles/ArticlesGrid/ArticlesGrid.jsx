import { containerVariant, motion } from "assets/motion/motionVariants";
import AppButton from "components/AppButton/AppButton";
import { useEffect, useState } from "react";
import { ARTICLES_VISIBLE_LIMIT } from "utils";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./articlesgrid.module.scss";

const ArticlesGrid = ({ articles }) => {
  const [articlesState, setArticlesState] = useState({
    articlesVisible: articles.slice(0, ARTICLES_VISIBLE_LIMIT),
    visible: ARTICLES_VISIBLE_LIMIT
  });

  const isLoadMoreButtonVisible = articles.length > articlesState.visible;

  const handleLoadMoreArticles = () => {
    const newRenderLimit = articlesState.visible + 4;

    const newVisibleArticles = articles.slice(
      articlesState.visible,
      newRenderLimit
    );

    if (newVisibleArticles) {
      setArticlesState((prevState) => {
        return {
          articlesVisible: [
            ...prevState.articlesVisible,
            ...newVisibleArticles
          ],
          visible: newRenderLimit
        };
      });
    }
  };

  useEffect(() => {
    if (articles) {
      setArticlesState({
        articlesVisible: articles.slice(0, ARTICLES_VISIBLE_LIMIT),
        visible: ARTICLES_VISIBLE_LIMIT
      });
    }
  }, [articles]);

  return (
    <div className={styles.container}>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className={styles.grid}
      >
        {articlesState.articlesVisible?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </motion.div>
      {isLoadMoreButtonVisible && (
        <AppButton onClick={handleLoadMoreArticles} label="load more" />
      )}
    </div>
  );
};

export default ArticlesGrid;
