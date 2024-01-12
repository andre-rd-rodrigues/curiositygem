import Head from "components/AppHead/AppHead";
import ArticleHighlight from "components/Articles/ArticleHighlight/ArticleHighlight";
import CategorySection from "components/Homepage/CategorySection";
import Loading from "components/Loading/Loading";
import PageContainer from "components/PageContainer/PageContainer";
import styles from "styles/homepage.module.scss";
import { CATEGORY } from "utils";
import generateRssFeed from "utils/generateRSSFeed";
import { ARTICLES_CARD_QUERY, graphcms } from "./api/graphQL/main";

export default function Homepage({ posts }) {
  const renderContent = () => {
    if (!posts) {
      return <Loading />;
    }

    if (posts) {
      const articleHighlight = posts.filter((post) => {
        const articleTopSlug =
          "start-your-journey-to-becoming-a-web-developer-free-online-resources-to-learn-from";
        return post.slug === articleTopSlug;
      })[0];

      return (
        <div className={styles.wrapper}>
          <ArticleHighlight post={articleHighlight} />
          <CategorySection category={CATEGORY.recent} posts={posts} />
          <CategorySection category={CATEGORY.finance} posts={posts} />
          <CategorySection category={CATEGORY.tech} posts={posts} />
          <CategorySection category={CATEGORY.wellbeing} posts={posts} />
          <CategorySection category={CATEGORY.career} posts={posts} />
          <CategorySection category={CATEGORY.nutrition} posts={posts} />
          <CategorySection category={CATEGORY.top} posts={posts} />
        </div>
      );
    }
  };

  return (
    <>
      <Head />
      <PageContainer>{renderContent()}</PageContainer>
    </>
  );
}

export async function getStaticProps() {
  await generateRssFeed();
  const data = await graphcms.request(ARTICLES_CARD_QUERY);

  const posts = data.posts;

  return {
    props: { posts: posts },
    revalidate: 10
  };
}
