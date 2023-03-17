import ArticlesGrid from "components/Articles/ArticlesGrid/ArticlesGrid";
import Loading from "components/Loading/Loading";
import NoResults from "components/NoResults/NoResults";
import PageContainer from "components/PageContainer/PageContainer";
import { ArticlesContext } from "context/articles-context";
import useArticles from "hooks/useArticles";
import useRouteQuery from "hooks/useRouteQuery";
import { useContext, useEffect, useState } from "react";
import styles from "styles/resultspage.module.scss";

const ResultsPage = () => {
  const [articlesMatched, setArticlesMatched] = useState([]);

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

    setArticlesMatched(articlesSearched || []);
  }, [router.asPath, input, category, articles]);

  return (
    <>
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
    </>
  );
};

export default ResultsPage;
