import { ArticlesContext } from "context/articles-context";
import { useContext } from "react";
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

    if (category === CATEGORY.recent) {
      return articles;
    }

    return articles.filter(
      (article) => article.category.toLowerCase() === category.toLowerCase()
    );
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
