import AppNavbar from "components/AppNavbar/AppNavbar";
import CookieBanner from "components/CookieBanner/CookieBanner";
import Footer from "components/Footer/Footer";
import Script from "next/script";

function Layout({ children }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7060164950879253"
      />
      <AppNavbar />
      {children}
      <CookieBanner />
      <Footer />
    </>
  );
}

export default Layout;
