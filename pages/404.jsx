import { Icon } from "@iconify/react";
import Head from "components/AppHead/AppHead";
import PageContainer from "components/PageContainer/PageContainer";
import React from "react";
import styles from "styles/404.module.scss";

function NotFound() {
  return (
    <>
      <Head
        description="Curiosity Gem is a blog that shares hidden gems of knowledge on a wide range of topics. From personal development to technology and science, this blog is dedicated to providing you with informative, engaging, and thought-provoking content. Join us on a journey of exploration and discovery and find the knowledge you've been seeking. We're excited to share this latest findings with you and explore new ideas together!"
        title="Curiosity Gem &bull; Discover hidden gems of knowledge"
      />
      <PageContainer>
        <div className={styles.container} style={styles.jost}>
          <h1>404</h1>
          <h2>Page not found.</h2>
          <p>
            The page you&apos;re looking for could be removed or the provided
            link does not match any current existing page.
          </p>
          <button
            className={styles.backButton}
            onClick={() => window.history.back()}
          >
            <Icon
              icon="heroicons:arrow-long-left-solid"
              style={{ fontSize: "25px" }}
            />
            go back
          </button>
        </div>
      </PageContainer>
    </>
  );
}

export default NotFound;
