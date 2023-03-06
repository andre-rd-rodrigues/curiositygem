import { Icon } from "@iconify/react";
import PageContainer from "components/PageContainer/PageContainer";
import React from "react";
import styles from "styles/404.module.scss";
import { jost } from "assets/fonts/nextFonts";

function NotFound() {
  return (
    <PageContainer>
      <div className={styles.container}>
        <h1>404</h1>
        <h2 style={jost.style}>Page not found.</h2>
        <p>
          The page you&apos;re looking for could be removed or the provided link
          does not match any current existing page.
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
  );
}

export default NotFound;
