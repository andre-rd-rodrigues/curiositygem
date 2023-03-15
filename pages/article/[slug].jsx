import { jost } from "assets/fonts/nextFonts";
import AppIcon from "components/AppIcon/AppIcon";
import AppImage from "components/AppImage/AppImage";
import Loading from "components/Loading/Loading";
import PageContainer from "components/PageContainer/PageContainer";
import ShareLinks from "components/ShareLinks/ShareLinks";
import { NextSeo } from "next-seo";
import baseURL from "pages/api/baseURL";
import getData from "pages/api/getData";
import parser from "react-html-parser";
import styles from "styles/articlepage.module.scss";
import { convertDate } from "utils";

function Article({ post: article }) {
  return (
    <>
      <NextSeo
        title={article.title}
        description={article.description}
        canonical={`https://www.curiositygem.com/article/${article.slug}`}
        openGraph={{
          url: `https://www.curiositygem.com/article/${article.slug}`,
          title: article.title,
          description: article.description,
          datePublished: article.createdAt,
          authorName: "André Rodrigues",
          images: [
            {
              url: article.coverPhoto.url,
              alt: `${article.title} article`
            }
          ]
        }}
      />
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
                  <div className={styles.header}>
                    <div className={styles.subtitle}>
                      <p>{convertDate(article.createdAt)}</p> <span>|</span>{" "}
                      <p>{article.category}</p>
                    </div>
                    <ShareLinks
                      slug={article.slug}
                      image={article.coverPhoto.url}
                      description={article.description}
                    />
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
  const posts = await getData();

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

  const response = await fetch(`${baseURL}article/${slug}`);
  const post = await response.json();

  return {
    props: { post: post[0] },
    revalidate: 10
  };
}
