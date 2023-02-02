import PageContainer from "components/PageContainer/PageContainer";
import React from "react";

function Article({ article }) {
  console.log(article);
  return (
    <PageContainer>
      {article ? (
        <>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </>
      ) : (
        <h1>LOADING</h1>
      )}
    </PageContainer>
  );
}

export default Article;
