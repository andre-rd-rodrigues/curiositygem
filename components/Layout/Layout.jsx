import AppNavbar from "components/AppNavbar/AppNavbar";
import Footer from "components/Footer/Footer";
import React from "react";

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
