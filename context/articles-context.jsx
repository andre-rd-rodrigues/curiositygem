import { ARTICLES_CARD_QUERY, graphcms } from "pages/api/graphQL/main";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ArticlesContext = createContext();

function ArticlesProvider({ children }) {
  const [responseData, setResponseData] = useState({
    isError: false,
    articles: undefined
  });

  const getArticles = async () => {
    try {
      const res = await fetch(baseURL);
      const posts = await res.json();
      setResponseData((prevState) => {
        return {
          ...prevState,
          articles: posts
        };
      });
    } catch (e) {
      setResponseData((prevState) => {
        return {
          ...prevState,
          isError: true
        };
      });
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={responseData}>
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesProvider;

ArticlesProvider.propTypes = {
  children: PropTypes.element.isRequired
};
