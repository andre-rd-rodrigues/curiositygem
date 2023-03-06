import { useRouter } from "next/router";

function useRouteQuery() {
  const router = useRouter();
  const { input, category } = router.query;

  return { input, category, router };
}

export default useRouteQuery;
