import Head from "next/head";
import PageContainer from "components/PageContainer/PageContainer";
import Introduction from "components/Homepage/Introduction";
import CategorySection from "components/Homepage/CategorySection";
import styles from "styles/homepage.module.scss";
import { CATEGORIES_TYPE } from "utils";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Curiosity Gem &bull; Discover hidden gems of knowledge</title>
      </Head>
      <PageContainer>
        <Introduction />
        <div className={styles.wrapper}>
          <CategorySection categoryType={CATEGORIES_TYPE.recent} />
          <CategorySection categoryType={CATEGORIES_TYPE.tech} />
          <CategorySection categoryType={CATEGORIES_TYPE.wellbeing} />
        </div>
      </PageContainer>
    </>
  );
}
