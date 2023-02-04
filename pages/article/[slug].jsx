import PageContainer from "components/PageContainer/PageContainer";
import React from "react";
import { convertDate } from "utils";
import parser from "react-html-parser";
import styles from "styles/articlepage.module.scss";
import AppImage from "components/AppImage/AppImage";
import AppIcon from "components/AppIcon/AppIcon";

function Article({ article }) {
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
              <p>{convertDate(article.date)}</p> <span>|</span>{" "}
              <p>{article.category}</p>
            </div>
          </div>
          <AppImage className={styles.headerImage} src={article.image_src} />
          <div className={styles.content}>
            {parser(article.content)}
            <ul>
              <li>lorem</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Article;

export async function getStaticPaths() {
  const res = await fetch("http://localhost");
  const articles = await res.json();

  const paths = articles.map((article) => {
    return { params: { slug: article.slug } };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const res = await fetch(`http://localhost/${slug}`);

  const data = await res.json();

  return {
    props: { article: data[0] }
  };
}
