import React from "react";
import styles from "styles/resultspage.module.scss";

const NoResults = ({ searchValue }) => {
  return (
    <div className={styles.notFound}>
      <p>
        Sorry, no results found for: <span>{searchValue}</span>
        <br />
      </p>
      <p>
        Try different keywords and make sure all words are spelled correctly.
      </p>
    </div>
  );
};

export default NoResults;
