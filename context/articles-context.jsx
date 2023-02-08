import { ARTICLES_QUERY } from "pages/api/graphQL/main";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { Provider, useFetch } from "use-http";

const INITIAL_CONTEXT = {
  data: null,
  loading: undefined,
  error: undefined
};

export const ArticlesContext = createContext({ ...INITIAL_CONTEXT });

function ArticlesProvider({ children }) {
  return (
    <ArticlesContext.Provider value={{ ...INITIAL_CONTEXT }}>
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesProvider;

ArticlesProvider.propTypes = {
  children: PropTypes.element.isRequired
};
