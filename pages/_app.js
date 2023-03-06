import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import ArticlesProvider from "context/articles-context";
import "styles/global.scss";
import Layout from "../components/Layout/Layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { STALE_TIME } from "utils";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      staleTime: STALE_TIME,
      cacheTime: STALE_TIME
    }
  }
});

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticlesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ArticlesProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
