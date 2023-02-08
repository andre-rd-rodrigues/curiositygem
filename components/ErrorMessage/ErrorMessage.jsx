import AppButton from "components/AppButton/AppButton";
import React from "react";
import styles from "./errormessage.module.scss";

const ErrorMessage = () => {
  return (
    <div className={styles.container}>
      <h2>Upsss...</h2>
      <p>Something went really wrong</p>
      <AppButton
        label="Refresh page"
        onClick={() => window.location.reload()}
      />
    </div>
  );
};

export default ErrorMessage;
