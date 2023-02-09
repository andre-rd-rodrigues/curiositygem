import baseURL from "pages/api/baseURL";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ArticlesContext = createContext();

function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState();

  const getArticles = async () => {
    const res = await fetch(baseURL);
    const posts = await res.json();
    setArticles(posts);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles }}>
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesProvider;

ArticlesProvider.propTypes = {
  children: PropTypes.element.isRequired
};
