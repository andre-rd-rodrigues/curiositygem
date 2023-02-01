import React from "react";
import PropTypes from "prop-types";
import { getArticleByTitle } from "utils";
import Link from "next/link";

const ArticleLink = ({ title }) => {
  const article = getArticleByTitle(title);

  if (!article) return "";

  return <Link href={`/article/${article.id}`}>{title}</Link>;
};

ArticleLink.propTypes = {
  title: PropTypes.string.isRequired
};

export default ArticleLink;
