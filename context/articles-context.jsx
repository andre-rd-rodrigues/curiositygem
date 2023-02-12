import { ARTICLES_CARD_QUERY, graphcms } from "pages/api/graphQL/main";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ArticlesContext = createContext();

function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    await graphcms.request(ARTICLES_CARD_QUERY).then(
      (data) => setArticles(data["posts"]),
      (e) => {
        setArticles([null]);
      }
    );
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={[...articles]}>
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesProvider;

ArticlesProvider.propTypes = {
  children: PropTypes.element.isRequired
};
