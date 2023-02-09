import "bootstrap/dist/css/bootstrap.min.css";
import ArticlesProvider, { ArticlesContext } from "context/articles-context";
import { useContext, useEffect } from "react";
import "styles/global.scss";
import Layout from "../components/Layout/Layout";
import baseURL from "./api/baseURL";

export default function App({ Component, pageProps }) {
  return (
    <ArticlesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ArticlesProvider>
  );
}
