import SearchBar from "components/AppSearchBar/AppSearchBar";
import Link from "next/link";
import { useState } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import ReactGA from "react-ga4";
import { CATEGORIES } from "utils";
import styles from "./appnavbar.module.scss";
import { jost } from "assets/fonts/nextFonts";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const BREAKING_POINT = "lg";

const AppNavbar = () => {
  const [show, setShow] = useState(false);
  /* 
  const handleClick = (category) => {
    ReactGA.event({
      category: "nav_link",
      action: "click",
      label: `category: ${category}`
    });
  }; */

  const navLinks = CATEGORIES.map(({ type, name }, index) => {
    // Remove categories: All, Recent and Top
    const isInvalidCategory =
      type === "all" || type === "recent" || type === "top";

    if (!isInvalidCategory) {
      return (
        <Nav.Link
          /*  onClick={() => handleClick(type)} */
          as={Link}
          href={`/article/search?category=${type}`}
          key={index}
        >
          <li>{name}</li>
        </Nav.Link>
      );
    }
  });

  return (
    <Navbar
      expand={BREAKING_POINT}
      fixed="top"
      className={styles.nav}
      style={jost.style}
    >
      <Navbar.Brand className={styles.brand}>
        <Link id={styles.logo} href="https://www.andrerodrigo.com" />
        <Link href="/" className="d-flex">
          <h5>AR</h5>
          <p>Blog</p>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="offcanvas-container"
        onClick={() => setShow(true)}
      >
        <FeatherIcon icon="menu" color="white" />
      </Navbar.Toggle>
      <Navbar.Offcanvas
        show={show}
        responsive={BREAKING_POINT}
        onHide={() => setShow(false)}
        aria-labelledby="offcanvas-container"
        className="offcanvas-container"
        placement="end"
      >
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Nav onSelect={() => setShow(false)}>
            {navLinks}
            <SearchBar className={styles.search} />
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default AppNavbar;
