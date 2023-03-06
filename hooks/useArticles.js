import { ArticlesContext } from "context/articles-context";
import { useContext } from "react";
import { CATEGORY } from "utils";

function useArticles() {
  const { articles, isError } = useContext(ArticlesContext);

  if (isError || !articles || articles[0] === null) {
    return {
      articles: null
    };
  }

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

    if (category === CATEGORY.recent) {
      return articles;
    }

    return articles.filter(
      (article) => article.category.toLowerCase() === category.toLowerCase()
    );
  };

  /**
   *  Function to get articles by input query string
   *  @param {string} input - The input query string
   */
  const getArticlesByInput = (input) => {
    const filteredArticles = articles.filter(
      (item) =>
        item.title.toLowerCase().includes(input) ||
        item.category.includes(input)
    );

    return filteredArticles;
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

  return {
    getArticlesByCategory,
    getArticleByTitle,
    articles,
    getArticlesByInput
  };
}

export default useArticles;
