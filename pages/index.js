import Head from "next/head";
import PageContainer from "components/PageContainer/PageContainer";
import Introduction from "components/Homepage/Introduction";
import CategorySection from "components/Homepage/CategorySection";
import styles from "styles/homepage.module.scss";
import { CATEGORY } from "utils";

export default function Homepage({ articles }) {
  return (
    <>
      <Head>
        <title>Curiosity Gem &bull; Discover hidden gems of knowledge</title>
      </Head>
      <PageContainer>
        <Introduction />
        <div className={styles.wrapper}>
          <CategorySection articles={articles} category={CATEGORY.recent} />
          <CategorySection articles={articles} category={CATEGORY.tech} />
          <CategorySection articles={articles} category={CATEGORY.wellbeing} />
        </div>
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost");
  const data = await res.json();

  return {
    props: { articles: data }
  };
}
