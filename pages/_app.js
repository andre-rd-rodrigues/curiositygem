import ArticlesProvider from "context/articles-context";
import Layout from "../components/Layout/Layout";
import "styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "use-http";

export default function App({ Component, pageProps }) {
  return (
    <ArticlesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ArticlesProvider>
  );
}
