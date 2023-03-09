import { jost } from "assets/fonts/nextFonts";
import ArticlesGrid from "components/Articles/ArticlesGrid/ArticlesGrid";
import Loading from "components/Loading/Loading";
import NoResults from "components/NoResults/NoResults";
import PageContainer from "components/PageContainer/PageContainer";
import useArticles from "hooks/useArticles";
import useRouteQuery from "hooks/useRouteQuery";
import { useContext, useEffect, useState } from "react";
import styles from "styles/resultspage.module.scss";
import Head from "components/AppHead/AppHead";
import { ArticlesContext } from "context/articles-context";

const ResultsPage = () => {
  const [articlesMatched, setArticlesMatched] = useState();

  const { articles, isError } = useContext(ArticlesContext);

  const { getArticlesByInput, getArticlesByCategory } = useArticles(articles);

  const { input, category, router } = useRouteQuery();

  const searchedValue = input || category;

  const renderContent = () => {
    if (!articles) {
      return <Loading />;
    }

    if (isError || !articlesMatched.length) {
      return <NoResults searchValue={searchedValue} />;
    }

    return <ArticlesGrid articles={articlesMatched} />;
  };

  //Lifecycle
  useEffect(() => {
    if (!articles) {
      return;
    }

    let articlesSearched;

    if (input) {
      articlesSearched = getArticlesByInput(input);
    }
    if (category) {
      articlesSearched = getArticlesByCategory(category);
    }

    setArticlesMatched(articlesSearched || null);
  }, [router.asPath, input, category, articles]);

  return (
    <>
      <Head
        description="Curiosity Gem is a blog that shares hidden gems of knowledge on a wide range of topics. From personal development to technology and science, this blog is dedicated to providing you with informative, engaging, and thought-provoking content. Join us on a journey of exploration and discovery and find the knowledge you've been seeking. We're excited to share this latest findings with you and explore new ideas together!"
        title="Curiosity Gem &bull; Discover hidden gems of knowledge"
      />
      <PageContainer
        color="dark"
        bgColor="grey-yellow"
        className={styles.container}
      >
        <div className={styles.results}>
          <div className={styles.title} style={jost.style}>
            <h1>Results for:</h1>
            <h2>{searchedValue}</h2>
          </div>
          {renderContent()}
        </div>
      </PageContainer>
    </>
  );
};

export default ResultsPage;
