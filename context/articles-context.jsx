import PropTypes from "prop-types";
import { createContext } from "react";
import { useFetch } from "use-http";

export const ArticlesContext = createContext(null);

function ArticlesProvider({ children }) {
  const { data, loading, error } = useFetch(
    process.env.NEXT_PUBLIC_BASE_URL,
    {},
    []
  );

  return (
    <ArticlesContext.Provider value={{ data, loading, error }}>
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesProvider;

ArticlesProvider.propTypes = {
  children: PropTypes.element.isRequired
};
