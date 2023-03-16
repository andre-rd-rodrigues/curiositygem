import { jost } from "assets/fonts/nextFonts";
import ShareLinks from "components/ShareLinks/ShareLinks";
import Image from "next/image";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { CATEGORIES, META, PAGES } from "utils/constants";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container} style={jost.style}>
      <Row className={styles.wrapper}>
        <Col className={styles.brand}>
          <div className={styles.logo}>
            <Image
              width={20}
              height={20}
              src="/favicon.ico"
              alt="Curiosity Gem"
            />
            <p>Curiosity Gem</p>
          </div>
          <ShareLinks
            image={META.homepage_img_url}
            description={META.description}
            className={styles.socialMedia}
          />
        </Col>
        <Col className={styles.sections}>
          <div>
            <h5>Pages</h5>
            {PAGES.map((page, i) => (
              <Link key={i} href={`/${page.link_title}`}>
                {page.title}
              </Link>
            ))}
          </div>
        </Col>
        <Col className={styles.categories}>
          <div>
            <h5>Categories</h5>
            <div>
              {CATEGORIES.map((category, i) => (
                <Link
                  key={i}
                  href={`/article/search?category=${category.type}`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <div className={styles.copyright}>&#169; 2022 by André Rodrigo</div>
    </footer>
  );
};

export default Footer;
