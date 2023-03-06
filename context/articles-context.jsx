import { useQuery } from "@tanstack/react-query";
import baseURL from "pages/api/baseURL";
import PropTypes from "prop-types";
import { createContext } from "react";
import axios from "axios";

export const ArticlesContext = createContext();

function ArticlesProvider({ children }) {
  const { data: articles, isError } = useQuery(["articles"], () =>
    axios.get(baseURL).then((res) => res.data)
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
