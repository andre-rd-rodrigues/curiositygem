import Head from "components/AppHead/AppHead";
import AppIcon from "components/AppIcon/AppIcon";
import AppImage from "components/AppImage/AppImage";
import ContentNavigator from "components/ContentNavigator";
import Loading from "components/Loading/Loading";
import PageContainer from "components/PageContainer/PageContainer";
import RelatedArticles from "components/RelatedArticles/RelatedArticles";
import ShareLinks from "components/ShareLinks/ShareLinks";
import { useNavigation } from "hooks/useNavigation";
import Link from "next/link";
import { ARTICLE_QUERY, graphcms, SLUGLIST } from "pages/api/graphQL/main";
import { useEffect, useState } from "react";
import parser from "react-html-parser";
import styles from "styles/articlepage.module.scss";
import { convertDate, injectHeaderIds } from "utils";

function Article({ post: article }) {
  const [enhancedArticle, setEnhancedArticle] = useState({
    html: undefined,
    headings: undefined
  });

  const navigation = useNavigation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (article?.content?.html) {
      const { html, headings } = injectHeaderIds(article.content.html);
      setEnhancedArticle({ html, headings, ...article });
    }
  }, [article?.content?.html]);

  return (
    <>
      <Head
        title={article.title}
        description={article.description}
        canonical={`https://www.curiositygem.com/article/${article.slug}`}
        openGraph={{
          url: `https://www.curiositygem.com/article/${article.slug}`,
          title: article.title,
          description: article.description,
          datePublished: article.publishedDate,
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
        <div className={styles.container}>
          <Link href={navigation.previousRoute}>
            <AppIcon
              icon="arrow-left"
              size={30}
              color="grey"
              className={styles.arrowBack}
            />
          </Link>
          <div>
            {article ? (
              <>
                <div>
                  <h1 className={styles.title}>{article.title}</h1>
                  <div className={styles.header}>
                    <div className={styles.subtitle}>
                      <p>{convertDate(article.publishedDate)}</p> <span>|</span>{" "}
                      <p>{article.category}</p>
                    </div>
                    <ShareLinks
                      slug={article.slug}
                      image={article.coverPhoto.url}
                      description={article.description}
                      className={styles.socialMedia}
                    />
                  </div>
                </div>
                <AppImage
                  containerClassName={styles.headerImage}
                  src={article.coverPhoto.url}
                  alt={article.title}
                />
                <div className={styles.content}>
                  {parser(enhancedArticle.html)}
                </div>
                <ContentNavigator headings={enhancedArticle.headings} />
              </>
            ) : (
              <Loading />
            )}
          </div>
        </div>
        <RelatedArticles currentArticle={article} />
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
