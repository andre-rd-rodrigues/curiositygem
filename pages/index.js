import CategorySection from "components/Homepage/CategorySection";
import Introduction from "components/Homepage/Introduction";
import Loading from "components/Loading/Loading";
import PageContainer from "components/PageContainer/PageContainer";
import useArticles from "hooks/useArticles";
import Head from "next/head";
import { ARTICLES_CARD_QUERY, graphcms } from "pages/api/graphQL/main";
import styles from "styles/homepage.module.scss";
import { CATEGORY } from "utils";

export default function Homepage({ articles }) {
  const { getArticlesByCategory } = useArticles(articles);
  console.log(articles);
  return (
    <>
      <Head>
        <title>Curiosity Gem &bull; Discover hidden gems of knowledge</title>
      </Head>
      <PageContainer>
        <Introduction />
        {articles ? (
          <div className={styles.wrapper}>
            <CategorySection
              articles={getArticlesByCategory(CATEGORY.recent)}
              category={CATEGORY.recent}
            />
            <CategorySection
              articles={getArticlesByCategory(CATEGORY.tech)}
              category={CATEGORY.tech}
            />
            <CategorySection
              articles={getArticlesByCategory(CATEGORY.wellbeing)}
              category={CATEGORY.wellbeing}
            />
          </div>
        ) : (
          <Loading />
        )}
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  const { posts } = await graphcms.request(ARTICLES_CARD_QUERY);

  return {
    props: { articles: posts }
  };
}
