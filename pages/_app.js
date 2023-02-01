import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import "styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
