import { ARTICLES_CARD_QUERY, graphcms } from "pages/api/graphQL/main";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ArticlesContext = createContext();

function ArticlesProvider({ children }) {
  const [responseData, setResponseData] = useState({
    isError: false,
    isLoading: true,
    articles: undefined
  });

  const getArticles = async () => {
    await graphcms.request(ARTICLES_CARD_QUERY).then(
      (data) => {
        setResponseData((prevState) => {
          return { ...prevState, articles: data["posts"], isLoading: false };
        });
      },
      (e) => {
        setResponseData((prevState) => {
          return { ...prevState, isError: true, isLoading: false };
        });
      }
    );
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
