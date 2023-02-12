import { containerVariant, motion } from "assets/motion/motionVariants";
import Button from "components/AppButton/AppButton";
import { memo, useEffect, useState } from "react";
import { ARTICLES_VISIBLE_LIMIT } from "utils";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./articlesgrid.module.scss";

const ArticlesGrid = ({ articles: articlesProps }) => {
  const [articlesState, setArticlesState] = useState({
    articles: articlesProps.slice(0, ARTICLES_VISIBLE_LIMIT),
    limit: ARTICLES_VISIBLE_LIMIT
  });

  const { articles, limit } = articlesState;

  const loadMoreButtonVisible = articlesProps.length > limit;

  const handleLoadMoreArticles = () => {
    const newRenderLimit = limit + 4;

    const newVisibleArticles = articlesProps.slice(limit, newRenderLimit);

    if (newVisibleArticles) {
      setArticlesState((prevState) => {
        return {
          articles: [...prevState.articles, ...newVisibleArticles],
          limit: newRenderLimit
        };
      });
    }
  };

  useEffect(() => {
    setArticlesState({
      articles: articlesProps.slice(0, ARTICLES_VISIBLE_LIMIT),
      limit: ARTICLES_VISIBLE_LIMIT
    });
  }, [articlesProps]);

  return (
    <div className={styles.container}>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className={styles.grid}
      >
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </motion.div>
      {loadMoreButtonVisible && (
        <Button onClick={handleLoadMoreArticles} label="load more" />
      )}
    </div>
  );
};

export default memo(ArticlesGrid);
