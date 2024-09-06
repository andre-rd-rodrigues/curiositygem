import AppHead from "components/AppHead/AppHead";
import ArticlesGrid from "components/Articles/ArticlesGrid/ArticlesGrid";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import Loading from "components/Loading/Loading";
import PageContainer from "components/PageContainer/PageContainer";
import { ArticlesContext } from "context/articles-context";
import useArticles from "hooks/useArticles";
import useRouteQuery from "hooks/useRouteQuery";
import { useContext, useEffect, useState } from "react";
import styles from "styles/resultspage.module.scss";

const ResultsPage = () => {
  const [articlesMatched, setArticlesMatched] = useState([]);

  const { articles, isError, isLoading } = useContext(ArticlesContext);

  const { getArticlesByInput, getArticlesByCategory } = useArticles(articles);

  const { input, category, router } = useRouteQuery();

  const searchedValue = input || category;

  const renderContent = () => {
    if (isError) {
      return <ErrorMessage />;
    }

    if (isLoading) {
      return <Loading />;
    }

    if (!articles || !articlesMatched.length) {
      return (
        <p className="text-center">
          The article you&apos;re looking for couldn&apos;t be found. Please try
          searching with a different phrase.
        </p>
      );
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

    setArticlesMatched(articlesSearched || []);
  }, [router.asPath, input, category, articles]);

  return (
    <>
      <AppHead
        title="Search - Curiosity Gem"
        description="Looking for fascinating articles? Search no further than Curiosity Gem! Our Search page allows you to explore a vast collection of curated content on science, history, culture, and more. Find the answers to your questions and satisfy your curiosity with ease. Start your search today!"
      />
      <PageContainer
        color="dark"
        bgColor="bg-color"
        className={styles.container}
      >
        <div className={styles.results}>
          <div className={styles.title}>
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
