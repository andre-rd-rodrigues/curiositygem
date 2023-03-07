import "bootstrap/dist/css/bootstrap.min.css";
import ArticlesProvider from "context/articles-context";
import "styles/global.scss";
import Layout from "../components/Layout/Layout";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XTDYFCW8JD"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XTDYFCW8JD', {page_path: window.location.pathname,
});
`
        }}
      />
      <ArticlesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ArticlesProvider>
    </>
  );
}
