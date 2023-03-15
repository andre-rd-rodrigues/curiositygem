import getData from "pages/api/getData";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ArticlesContext = createContext();

function ArticlesProvider({ children }) {
  const [responseData, setResponseData] = useState({
    isError: false,
    articles: undefined
  });

  const getArticles = () => {
    getData()
      .then((data) =>
        setResponseData((prevState) => {
          return { ...prevState, articles: data };
        })
      )
      .catch((e) =>
        setResponseData((prevState) => {
          return { ...prevState, isError: true };
        })
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
