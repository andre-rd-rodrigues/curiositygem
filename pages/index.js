import CategorySection from "components/Homepage/CategorySection";
import Introduction from "components/Homepage/Introduction";
import Loading from "components/Loading/Loading";
import PageContainer from "components/PageContainer/PageContainer";
import { NextSeo } from "next-seo";
import styles from "styles/homepage.module.scss";
import { CATEGORY } from "utils";
import getData from "./api/getData";

export default function Homepage({ posts }) {
  const renderContent = () => {
    if (!posts) {
      return <Loading />;
    }

    if (posts) {
      return (
        <div className={styles.wrapper}>
          <CategorySection category={CATEGORY.recent} posts={posts} />
          <CategorySection category={CATEGORY.finance} posts={posts} />
          <CategorySection category={CATEGORY.tech} posts={posts} />
          <CategorySection category={CATEGORY.wellbeing} posts={posts} />
          <CategorySection category={CATEGORY.career} posts={posts} />
          <CategorySection category={CATEGORY.nutrition} posts={posts} />
          <CategorySection category={CATEGORY.games} posts={posts} />
          <CategorySection category={CATEGORY.top} posts={posts} />
        </div>
      );
    }
  };

  return (
    <>
      <NextSeo
        description="Curiosity Gem is a blog that shares hidden gems of knowledge on a wide range of topics. From personal development to technology and science, this blog is dedicated to providing you with informative, engaging, and thought-provoking content. Join us on a journey of exploration and discovery and find the knowledge you've been seeking. We're excited to share this latest findings with you and explore new ideas together!"
        title="Curiosity Gem &bull; Discover hidden gems of knowledge"
        canonical="https://www.curiositygem.com"
        openGraph={{
          url: "https://www.curiositygem.com",
          title: "Curiosity Gem - Discover hidden gems of knowledge",
          description:
            "Curiosity Gem is a blog that shares hidden gems of knowledge on a wide range of topics. From personal development to technology and science, this blog is dedicated to providing you with informative, engaging, and thought-provoking content. Join us on a journey of exploration and discovery and find the knowledge you've been seeking. We're excited to share this latest findings with you and explore new ideas together!",
          images: [
            {
              url: "https://media.graphassets.com/m3c024qER0udkPRLgxOI",
              alt: `Curiosity Gem - Blog`
            }
          ]
        }}
      />
      <PageContainer>
        <Introduction />
        {renderContent()}
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getData();

  return {
    props: { posts: posts },
    revalidate: 10
  };
}
