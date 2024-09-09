import { Icon } from "@iconify/react";
import Head from "components/AppHead/AppHead";
import PageContainer from "components/PageContainer/PageContainer";
import { useNavigation } from "hooks/useNavigation";
import Link from "next/link";
import React from "react";
import styles from "styles/404.module.scss";

function NotFound() {
  const navigation = useNavigation();

  return (
    <>
      <Head
        title="Not found - Blog"
        description="Oops! The page you're looking for isn't here. But don't worry, Blog has plenty of other interesting articles to explore. Use our search bar or browse our categories to find the content you're looking for. We apologize for any inconvenience and invite you to continue your journey of curiosity with us."
      />
      <PageContainer>
        <div className={styles.container}>
          <h1>404</h1>
          <h2>Oops! Page not found.</h2>
          <p>
            The page you&apos;re looking for could be removed or the provided
            link does not match any current existing page. Use our{" "}
            <b>search bar</b> or browse our <b>categories</b> to find the
            content you&apos;re looking for.
          </p>
          <div className={styles.backButtonContainer}>
            <Link className={styles.backButton} href={navigation.previousRoute}>
              <Icon
                icon="heroicons:arrow-long-left-solid"
                style={{ fontSize: "25px" }}
              />
              go back
            </Link>
          </div>
        </div>
      </PageContainer>
    </>
  );
}

export default NotFound;
