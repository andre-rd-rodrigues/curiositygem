import React, { useState, useEffect } from "react";
import ArticlesGrid from "components/Articles/ArticlesGrid/ArticlesGrid";
import PageContainer from "components/PageContainer/PageContainer";
import useRouteQuery from "hooks/useRouteQuery";
import NoResults from "components/NoResults/NoResults";
import styles from "styles/resultspage.module.scss";
import useArticles from "hooks/useArticles";
import Loading from "components/Loading/Loading";

const ResultsPage = () => {
  const [articlesMatched, setArticlesMatched] = useState();
  const { articles, isError, getArticlesByInput, getArticlesByCategory } =
    useArticles();

  const { input, category, router } = useRouteQuery();

  const searchedValue = input || category;

  const renderContent = () => {
    if (!articles) {
      return <Loading />;
    }

    if (isError || !articlesMatched) {
      return <NoResults searchValue={searchedValue} />;
    }

    return <ArticlesGrid articles={articlesMatched} />;
  };

  //Lifecycle
  useEffect(() => {
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
    <PageContainer
      color="dark"
      bgColor="grey-yellow"
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
  );
};

export default ResultsPage;
