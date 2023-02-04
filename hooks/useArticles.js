import ArticlesProvider, { ArticlesContext } from "context/articles-context";
import React, { useContext, useEffect, useState } from "react";
import { CATEGORY } from "utils";

function useArticles() {
  const { data: articles, error, loading } = useContext(ArticlesContext);

  /**
   *  Function that filters articles and returns the ones with isTopArticle
   */
  const getTopArticles = () => {
    return articles.filter((item) => item.isTopArticle);
  };

  /**
   * Function to get articles according to category
   * @param category category string
   */

  const getArticlesByCategory = (category) => {
    if (category === CATEGORY.top) {
      return getTopArticles();
    }

    if (category.length) {
      return articles.filter(
        (article) => article.category.toLowerCase() === category.toLowerCase()
      );
    }

    return null;
  };

  /**
   * Function to get the article according to title
   * @param title title string
   */

  const getArticleByTitle = (title) => {
    return articles.filter(
      (item) => item.title.toLowerCase().trim() === title.toLowerCase().trim()
    )[0];
  };

  return { articles, error, loading, getArticlesByCategory, getArticleByTitle };
}

export default useArticles;
