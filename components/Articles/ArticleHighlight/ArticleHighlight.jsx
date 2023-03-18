import React from "react";
import { fadeInVariant, motion } from "assets/motion/motionVariants";
import AppImage from "components/AppImage/AppImage";
import Link from "next/link";
import { convertDate } from "utils/helpers/date";
import styles from "./articlehighlight.module.scss";
import Image from "next/image";
import { jost } from "assets/fonts/nextFonts";

const ArticleHighlight = ({ post: article }) => {
  return (
    <motion.div
      variants={fadeInVariant}
      className={styles.container}
      style={jost.style}
    >
      <div className={styles.content}>
        <div className={styles.subtitle}>
          <p>{convertDate(article.publishedDate)}</p> <span>|</span>{" "}
          <p>{article.category}</p>
        </div>
        <div className={styles.body}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>

        <div className={styles.footer}>
          <Link className={styles.readMore} href={`/article/${article.slug}`}>
            Read more
          </Link>
        </div>
      </div>
      <AppImage
        containerClassName={styles.containerImage}
        src={article.coverPhoto.url}
        alt={article.title}
      />
    </motion.div>
  );
};

export default ArticleHighlight;
