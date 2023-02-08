import ArticlesProvider from "context/articles-context";
import Layout from "../components/Layout/Layout";
import "styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "use-http";

export default function App({ Component, pageProps }) {
  return (
    <ArticlesProvider>
      <Provider url={process.env.NEXT_PUBLIC_BASE_URL}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ArticlesProvider>
  );
}
