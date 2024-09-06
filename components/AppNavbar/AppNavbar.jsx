import { jost } from "assets/fonts/nextFonts";
import SearchBar from "components/AppSearchBar/AppSearchBar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { CATEGORIES } from "utils";
import styles from "./appnavbar.module.scss";

const BREAKING_POINT = "lg";

const AppNavbar = () => {
  const [show, setShow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
    <AnimatePresence>
      {showNavbar && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{
            ease: "easeOut",
            duration: 0.3
          }}
          className={styles.outerNav}
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppNavbar;
