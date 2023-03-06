import { useQuery } from "@tanstack/react-query";
import { ARTICLES_CARD_QUERY, graphcms } from "pages/api/graphQL/main";
import PropTypes from "prop-types";
import { createContext } from "react";

export const ArticlesContext = createContext();

function ArticlesProvider({ children }) {
  const { data: articles, isError } = useQuery(["articles"], () =>
    graphcms.request(ARTICLES_CARD_QUERY).then((data) => data["posts"])
  );

  return (
    <ArticlesContext.Provider value={{ articles, isError }}>
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesProvider;

ArticlesProvider.propTypes = {
  children: PropTypes.element.isRequired
};
