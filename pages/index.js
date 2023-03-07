import Head from "components/AppHead/AppHead";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import CategorySection from "components/Homepage/CategorySection";
import Introduction from "components/Homepage/Introduction";
import Loading from "components/Loading/Loading";
import PageContainer from "components/PageContainer/PageContainer";
import useArticles from "hooks/useArticles";
import styles from "styles/homepage.module.scss";
import { CATEGORY } from "utils";

export default function Homepage() {
  const { articles } = useArticles();

  const renderContent = () => {
    if (articles === undefined) {
      return <Loading />;
    }

    if (articles === null || !articles.length) {
      return <ErrorMessage className={styles.errorMessage} />;
    }

    if (articles) {
      return (
        <div className={styles.wrapper}>
          <CategorySection category={CATEGORY.recent} />
          <CategorySection category={CATEGORY.finance} />
          <CategorySection category={CATEGORY.tech} />
          <CategorySection category={CATEGORY.wellbeing} />
        </div>
      );
    }
  };

  return (
    <>
      <Head
        description="Curiosity Gem is a blog that shares hidden gems of knowledge on a wide range of topics. From personal development to technology and science, this blog is dedicated to providing you with informative, engaging, and thought-provoking content. Join us on a journey of exploration and discovery and find the knowledge you've been seeking. We're excited to share this latest findings with you and explore new ideas together!"
        title="Curiosity Gem &bull; Discover hidden gems of knowledge"
      />
      <PageContainer>
        <Introduction />
        {renderContent()}
      </PageContainer>
    </>
  );
}
