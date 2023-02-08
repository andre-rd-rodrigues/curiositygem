import React from "react";
import { ThreeDots } from "react-loader-spinner";
import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <ThreeDots color="dark" />
      Loading
    </div>
  );
};

export default Loading;
