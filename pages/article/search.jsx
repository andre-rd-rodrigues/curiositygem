import React, { useState, useEffect } from "react";
import ArticlesGrid from "components/Articles/ArticlesGrid/ArticlesGrid";
import PageContainer from "components/PageContainer/PageContainer";
import useQuery from "hooks/useQuery";
import NoResults from "components/NoResults/NoResults";
import styles from "styles/resultspage.module.scss";
import useArticles from "hooks/useArticles";
import Loading from "components/Loading/Loading";

const ResultsPage = () => {
  const [articlesMatched, setArticlesMatched] = useState();
  const { articles, getArticlesByInput, getArticlesByCategory } = useArticles();

  const { input, category, router } = useQuery();

  //Lifecycle
  useEffect(() => {
    handleArticlesSearch();
  }, [router.asPath, input, category, articles]);

  if (!articles) {
    return <Loading />;
  }

  const searchedValue = input || category;

  const handleArticlesSearch = () => {
    if (input) {
      setArticlesMatched(getArticlesByInput(input));
    }
    if (category) {
      setArticlesMatched(getArticlesByCategory(category));
    }
  };

  const renderContent = () => {
    if (!articlesMatched) {
      return <Loading />;
    }

    if (!articlesMatched.length) {
      return <NoResults searchValue={searchedValue} />;
    }

    return <ArticlesGrid articles={articlesMatched} />;
  };

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
