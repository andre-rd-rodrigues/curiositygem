import AppIcon from "components/AppIcon/AppIcon";
import AppImage from "components/AppImage/AppImage";
import Loading from "components/Loading/Loading";
import PageContainer from "components/PageContainer/PageContainer";
import { ARTICLE_QUERY, graphcms, SLUGLIST } from "pages/api/graphQL/main";
import { useEffect, useState } from "react";
import parser from "react-html-parser";
import styles from "styles/articlepage.module.scss";
import { convertDate } from "utils";
import { getArticleWithGoogleAds } from "utils/googleAds";
import { jost } from "assets/fonts/nextFonts";
import NotFound from "pages/404";
import { useRouter } from "next/router";
import Head from "next/head";

function Article({ post: articleAPI, pageHeader }) {
  const router = useRouter();

  const [article, setArticle] = useState();

  useEffect(() => {
    if (!articleAPI) {
      return;
    }

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

  if (!article) {
    return (
      <PageContainer>
        <Loading />
      </PageContainer>
    );
  }

  if (!articleAPI && router.isFallback) {
    return <NotFound />;
  }

  return (
    <>
      <Head>
        <title>{pageHeader.title}</title>
        {pageHeader.metas.map((attributes, index) => (
          <meta {...attributes} key={index} />
        ))}
      </Head>

      <PageContainer>
        <div className={styles.container} style={jost.style}>
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
    </>
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
    props: {
      post: post,
      pageHeader: {
        title: post.title,
        metas: [
          {
            name: "description",
            content: post.description
          },
          { property: "og:title", content: post.title },
          {
            property: "og:image",
            content: post.coverPhoto.url
          },
          {
            property: "og:description",
            content: post.description
          }
        ]
      }
    },
    revalidate: 10
  };
}
