import { fadeInVariant, motion } from "assets/motion/motionVariants";
import AppImage from "components/AppImage/AppImage";
import Link from "next/link";
import { convertDate } from "utils/helpers/date";
import styles from "./articlecard.module.scss";

const ArticleCard = ({ article }) => {
  return (
    <motion.div variants={fadeInVariant} className={styles.container}>
      <div className={styles.wrapper}>
        <Link href={`/article/${article.slug}`}>
          <AppImage src={article.coverPhoto.url} className={styles.image} />
          <div className={styles.subtitle}>
            <p>{article.category}</p>
            <p>{convertDate(article.date)}</p>
          </div>
          <div className={styles.body}>
            <h5>{article.title}</h5>
            <p>{article.description}</p>
          </div>
        </Link>
        <div className={styles.footer}>
          <Link
            className={styles.readMore}
            href={`/article/${article.slug}`}
            onClick={() => (scrollTop ? window.scrollTo(0, 0) : null)}
          >
            Read more
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
