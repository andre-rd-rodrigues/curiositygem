import ArticlesSlider from "components/Articles/ArticlesSlider/ArticlesSlider";
import { ArticlesContext } from "context/articles-context";
import React, { useContext } from "react";
import styles from "./relatedarticles.module.scss";

const RelatedArticles = ({ currentArticle }) => {
  const { articles } = useContext(ArticlesContext);

  if (!articles || !currentArticle) {
    return null;
  }

  const getRelatedArticles = () => {
    const result = articles.filter(
      (article) =>
        article.category === currentArticle.category &&
        article.id !== currentArticle.id
    );

    if (!result.length) return null;
  };

  const relatedArticles = getRelatedArticles();

  if (!relatedArticles) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h5>Related article{relatedArticles.length !== 1 && "s"}:</h5>
      <ArticlesSlider articles={relatedArticles} />
    </div>
  );
};

export default RelatedArticles;
