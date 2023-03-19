import { RouterContext } from "context/route-context";
import { useContext } from "react";

export const useNavigation = () => {
  const { previousRoute: previousRouteCtx } = useContext(RouterContext);

  const getPreviousRoute = (previousRoute) => {
    if (!previousRoute) return "/";
    return previousRoute;
  };

  const previousRoute = getPreviousRoute(previousRouteCtx);

  return { previousRoute };
};
