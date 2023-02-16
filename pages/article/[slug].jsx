import PageContainer from "components/PageContainer/PageContainer";
import React, { createElement, useEffect, useState } from "react";
import { convertDate } from "utils";
import parser from "react-html-parser";
import styles from "styles/articlepage.module.scss";
import AppImage from "components/AppImage/AppImage";
import AppIcon from "components/AppIcon/AppIcon";
import baseURL from "pages/api/baseURL";
import Loading from "components/Loading/Loading";
import { getArticleWithGoogleAds } from "utils/helpers/googleAds";

function Article({ post: articleAPI }) {
  const [article, setArticle] = useState();

  if (!articleAPI) {
    return <p>Not found</p>;
  }

  useEffect(() => {
    const articleConverted = getArticleWithGoogleAds(articleAPI);

    setArticle(articleConverted);
  }, [articleAPI]);

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      return console.log(e);
    }
  }, []);

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
          {article ? (
            <>
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
              <div className={styles.content}>
                {parser(article.content.html)}
              </div>
            </>
          ) : (
            <Loading />
          )}
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
