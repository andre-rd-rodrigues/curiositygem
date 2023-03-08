import { jost } from "assets/fonts/nextFonts";
import AppIcon from "components/AppIcon/AppIcon";
import AppImage from "components/AppImage/AppImage";
import Loading from "components/Loading/Loading";
import PageContainer from "components/PageContainer/PageContainer";
import { NextSeo } from "next-seo";
import { ARTICLE_QUERY, graphcms, SLUGLIST } from "pages/api/graphQL/main";
import parser from "react-html-parser";
import styles from "styles/articlepage.module.scss";
import { convertDate } from "utils";

function Article({ post: article }) {
  return (
    <>
      <NextSeo
        title={article.title}
        description={article.description}
        openGraph={{
          url: `https://www.curiositygem.com/article/${article.title}`,
          title: article.title,
          description: article.description,
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
    props: { post: post },
    revalidate: 10
  };
}
