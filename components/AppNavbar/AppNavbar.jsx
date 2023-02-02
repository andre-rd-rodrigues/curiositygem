import React from "react";
import { useState } from "react";
import AppIcon from "components/AppIcon/AppIcon";
import SearchBar from "components/AppSearchBar/AppSearchBar";
import FeatherIcon from "feather-icons-react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import ReactGA from "react-ga4";
import { CATEGORIES } from "utils";
import Link from "next/link";
import styles from "./appnavbar.module.scss";

const BREAKING_POINT = "lg";

const AppNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = (category) => {
    ReactGA.event({
      category: "nav_link",
      action: "click",
      label: `category: ${category}`
    });
  };

  const navLinks = CATEGORIES.map(({ type, name }, index) => {
    // Remove categories: All, Recent and Top
    const isInvalidCategory =
      type === "all" || type === "recent" || type === "top";

    if (!isInvalidCategory) {
      return (
        <Nav.Link
          onClick={() => handleClick(type)}
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
    <Navbar expand={BREAKING_POINT} fixed="top" className={styles.nav}>
      <Navbar.Brand as={Link} href="/">
        <div className={styles.brand}>
          <div id={styles.logo} />
          <h1>CG</h1>
          <p>Curiosity Gem</p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="offcanvas-container"
        onClick={() => setShow(true)}
      >
        <AppIcon />
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
