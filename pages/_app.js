import "bootstrap/dist/css/bootstrap.min.css";
import ArticlesProvider from "context/articles-context";
import RouterProvider from "context/route-context";
import "styles/global.scss";
import Layout from "../components/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <ArticlesProvider>
      <RouterProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RouterProvider>
    </ArticlesProvider>
  );
}
