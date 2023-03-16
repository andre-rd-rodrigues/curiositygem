import { usePreviousRoute } from "hooks/usePreviousRoute";
import PropTypes from "prop-types";
import { createContext } from "react";

export const RouterContext = createContext();

function RouterProvider({ children }) {
  return (
    <RouterContext.Provider value={{ previousRoute: usePreviousRoute() }}>
      {children}
    </RouterContext.Provider>
  );
}

export default RouterProvider;

RouterProvider.propTypes = {
  children: PropTypes.element.isRequired
};
