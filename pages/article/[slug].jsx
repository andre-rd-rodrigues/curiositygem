import PageContainer from "components/PageContainer/PageContainer";
import React from "react";
import { convertDate } from "utils";
import parser from "react-html-parser";
import styles from "styles/articlepage.module.scss";
import AppImage from "components/AppImage/AppImage";
import AppIcon from "components/AppIcon/AppIcon";
import baseURL from "pages/api/baseURL";

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
  const res = await fetch(baseURL);
  const posts = await res.json();

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

  const res = await fetch(`${baseURL}/article/${slug}`);
  const post = await res.json();

  return {
    props: { post: post[0] },
    revalidate: 10
  };
}
