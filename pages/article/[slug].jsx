import PageContainer from "components/PageContainer/PageContainer";
import React from "react";
import { convertDate } from "utils";
import parser from "react-html-parser";
import styles from "styles/articlepage.module.scss";
import AppImage from "components/AppImage/AppImage";
import AppIcon from "components/AppIcon/AppIcon";
import {
  ARTICLES_QUERY,
  ARTICLE_QUERY,
  graphcms,
  SLUGLIST
} from "pages/api/graphQL/main";

function Article({ post: article }) {
  if (!article) {
    return <p>Not found</p>;
  }

  return (
    <PageContainer>
      <div className={styles.container}>
        <AppIcon
          icon="arrow-left"
          size={30}
          color="grey"
          className={styles.arrowBack}
          onClick={() => window.history.back()}
        />
        <div>
          <div>
            <h1 className={styles.title}>{article.title}</h1>
            <div className={styles.subtitle}>
              <p>{convertDate(article.createdAt)}</p> <span>|</span>{" "}
              <p>{article.category}</p>
            </div>
          </div>
          <AppImage
            className={styles.headerImage}
            src={article.coverPhoto.url}
          />
          <div className={styles.content}>{parser(article.content.html)}</div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Article;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);

  const paths = posts.map((post) => {
    return { params: { slug: post.slug } };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const data = await graphcms.request(ARTICLE_QUERY, { slug });

  const post = data.post;

  return {
    props: { post: post },
    revalidate: 10
  };
}
