import { useRouter } from "next/router";

function useQuery() {
  const router = useRouter();
  const { input, category } = router.query;

  return { input, category, router };
}

export default useQuery;
