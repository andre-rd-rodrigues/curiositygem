import Link from "next/link";
import PropTypes from "prop-types";
import { getArticleByTitle } from "utils";

const ArticleLink = ({ title }) => {
  const article = getArticleByTitle(title);

  if (!article) return "";

  return <Link href={`/article/${article.id}`}>{title}</Link>;
};

ArticleLink.propTypes = {
  title: PropTypes.string.isRequired
};

export default ArticleLink;
