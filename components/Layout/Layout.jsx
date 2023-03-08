import AppNavbar from "components/AppNavbar/AppNavbar";
import Footer from "components/Footer/Footer";
import Script from "next/script";

function Layout({ children }) {
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
      <AppNavbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
