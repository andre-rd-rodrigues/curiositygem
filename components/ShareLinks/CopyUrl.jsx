import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import styles from "./sharelinks.module.scss";

function CopyUrl({ size, url }) {
  const [showMessage, setShowMessage] = useState();

  const copyToClipboard = async () => {
    await navigator.clipboard
      .writeText(url)
      .then(() => updateMessageStatus("success"))
      .catch(() => updateMessageStatus("error"));
  };

  const updateMessageStatus = (status) => {
    setShowMessage(status);
    setTimeout(() => {
      setShowMessage(undefined);
    }, 3000);
  };

  return (
    <>
      <button className={styles.copyUrl} onClick={copyToClipboard}>
        <FeatherIcon icon="link" color="white" size={size - 11} />
      </button>

      <Alert
        show={showMessage === "success" ? true : false}
        variant="success"
        onClose={() => setShowSuccessMessage(false)}
        dismissible
        className={styles.alert}
      >
        <Alert.Heading>Success!</Alert.Heading>
        <p>Link has been copied to your clipboard.</p>
      </Alert>
      <Alert
        show={showMessage === "error" ? true : false}
        variant="danger"
        onClose={() => setShowErrorMessage(false)}
        dismissible
        className={styles.alert}
      >
        <Alert.Heading>Something went wrong</Alert.Heading>
        <p>Link could not be copied to your clipboard.</p>
      </Alert>
    </>
  );
}

export default CopyUrl;
