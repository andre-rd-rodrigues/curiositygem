import React from "react";
import { fadeInVariant, motion } from "assets/motion/motionVariants";
import AppImage from "components/AppImage/AppImage";
import { READ_MORE_LABEL } from "utils";
import { convertDate } from "utils/helpers/date";
import styles from "./articlecard.module.scss";
import Link from "next/link";

const ArticleCard = ({ article }) => {
  return (
    <motion.div variants={fadeInVariant} className={styles.container}>
      <div className={styles.wrapper}>
        <Link href={`/article/${article.id}`}>
          <AppImage src={article.image_src} className={styles.image} />
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
            href={`/article/${article.id}`}
            onClick={() => (scrollTop ? window.scrollTo(0, 0) : null)}
          >
            {READ_MORE_LABEL}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
