import AppNavbar from "components/AppNavbar/AppNavbar";
import Footer from "components/Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <AppNavbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
