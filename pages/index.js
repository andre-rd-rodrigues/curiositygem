import CategorySection from "components/Homepage/CategorySection";
import Introduction from "components/Homepage/Introduction";
import Loading from "components/Loading/Loading";
import PageContainer from "components/PageContainer/PageContainer";
import useArticles from "hooks/useArticles";
import Head from "next/head";
import styles from "styles/homepage.module.scss";
import { CATEGORY } from "utils";

export default function Homepage() {
  const { articles } = useArticles();

  return (
    <>
      <Head>
        <title>Curiosity Gem &bull; Discover hidden gems of knowledge</title>
      </Head>
      <PageContainer>
        <Introduction />
        {articles ? (
          <div className={styles.wrapper}>
            <CategorySection category={CATEGORY.recent} />
            <CategorySection category={CATEGORY.tech} />
            <CategorySection category={CATEGORY.wellbeing} />
          </div>
        ) : (
          <Loading />
        )}
      </PageContainer>
    </>
  );
}
