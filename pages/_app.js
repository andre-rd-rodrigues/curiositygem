import "bootstrap/dist/css/bootstrap.min.css";
import ArticlesProvider from "context/articles-context";
import "styles/global.scss";
import Layout from "../components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ArticlesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ArticlesProvider>
  );
}
