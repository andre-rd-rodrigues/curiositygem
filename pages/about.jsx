import AppHead from "components/AppHead/AppHead";
import PageContainer from "components/PageContainer/PageContainer";
import Image from "next/image";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import styles from "styles/about.module.scss";

function About() {
  return (
    <>
      <AppHead
        title="About Us - Curiosity Gem"
        description="Discover the world of curiosity with Curiosity Gem! Our blog is dedicated to sharing fascinating stories, unique perspectives, and insightful knowledge about science, history, culture, and more. Join us as we explore the wonders of the world and satisfy our curiosity. Visit our About Us page to learn more about who we are and what we do!"
      />
      <PageContainer>
        <div className={styles.container}>
          <h1>About Us</h1>
          <Row className={styles.section1}>
            <Col lg={6} md={6} sm={12}>
              <p>
                Welcome to <b>Curiosity Gem</b>, the blog where we explore the
                world and share our discoveries with you!
              </p>
              <p>
                We&apos;re a bunch of <b>curious minds</b> who love to learn new
                things and are always on the lookout for the next big thing. Our
                blog covers a variety of topics, including{" "}
                <Link href="/article/search?category=finance">finance</Link>,{" "}
                <Link href="/article/search?category=finance">technology</Link>,{" "}
                <Link href="/article/search?category=finance">nutrition</Link>,{" "}
                <Link href="/article/search?category=finance">wellbeing</Link>{" "}
                and more!
              </p>
              <p>
                We started Curiosity Gem because we believe that knowledge is
                power, and we want to empower you, our readers, with the
                information they need to <b>succeed in life</b>. Whether
                you&apos;re looking to improve your finances, stay up-to-date
                with the latest technology trends, or simply want to live a
                healthier lifestyle, we&apos;ve got you covered!
              </p>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className={styles.image}>
                <Image
                  src="https://images.unsplash.com/photo-1524492514790-8310bf594ea4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Curiosity Gem - blog where we explore the world and
                  share our discoveries with you!"
                  fill
                  objectFit="cover"
                />
              </div>
            </Col>
          </Row>
          <Row className={styles.section2}>
            <Col lg={6} md={{ span: 6, order: 1 }} sm={{ span: 12, order: 2 }}>
              <div className={styles.image}>
                <Image
                  src="https://images.unsplash.com/photo-1590157678696-a5151f512cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="Curiosity Gem - blog where we explore the world and
                  share our discoveries with you!"
                  fill
                  objectFit="cover"
                />
              </div>
            </Col>
            <Col lg={6} md={{ span: 6, order: 2 }} sm={{ span: 12, order: 1 }}>
              <p>
                Our team of writers are experts in their fields and are
                passionate about sharing their knowledge with you. We know that
                the internet can be overwhelming with information, so we&apos;ve
                made sure to keep our articles <b>easy to read</b> and
                understand. No fancy jargon or confusing terminology here, just
                plain and simple explanations of complex topics.
              </p>
              <p>
                We&apos;re constantly adding <b>new articles</b> and updating
                our existing ones, so make sure to check back often! And if you
                have any suggestions or topics you&apos;d like us to cover,
                don&apos;t hesitate to reach out. We love hearing from our
                readers and are always looking for ways to improve.
              </p>
              <p>
                Thanks for stopping by, and we hope you enjoy exploring the
                world with us here at <Link href="/">Curiosity Gem!</Link>
              </p>
            </Col>
          </Row>
        </div>
      </PageContainer>
    </>
  );
}

export default About;
