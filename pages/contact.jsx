import AppHead from "components/AppHead/AppHead";
import PageContainer from "components/PageContainer/PageContainer";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import styles from "styles/contact.module.scss";

const Contact = () => {
  return (
    <>
      <AppHead
        title="Contact Us - Blog"
        description="Have a question, comment, or suggestion? Get in touch today! The Contact Us page provides various ways to connect, including email. We welcome your feedback and are always happy to hear from our readers. Visit our page to reach out and start the conversation!"
      />
      <PageContainer
        className={styles.pageContainer}
        bgColor="dark"
        color="white"
      >
        <div className={styles.container}>
          <Row>
            <Col className={styles.col} sm={12} md={6} lg={6}>
              <div className={styles.title}>
                <h1>Get in touch!</h1>
              </div>
            </Col>
            <Col className={styles.col} sm={12} md={6} lg={6}>
              <div>
                <h3>Let&apos;s chat</h3>
                <a
                  id="contact_email"
                  href="mailto:andrerodrigo.web@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  andrerodrigo.web@gmail.com
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </PageContainer>
    </>
  );
};

export default Contact;
