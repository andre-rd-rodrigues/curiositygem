import ArticlesProvider, { ArticlesContext } from "context/articles-context";
import React, { useContext, useEffect, useState } from "react";

function useArticles() {
  const res = useContext(ArticlesContext);

  return { ...res, articles: res.data };
}

export default useArticles;
