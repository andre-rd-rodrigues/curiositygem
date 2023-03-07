import PropTypes from "prop-types";
import AppButton from "components/AppButton/AppButton";
import AppIcon from "components/AppIcon/AppIcon";
import React from "react";
import styles from "./errormessage.module.scss";

const ErrorMessage = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <AppIcon icon="alert-triangle" size={80} />
      <h2>No articles</h2>
      <p>Sorry for the inconvenience. We are working to resolve the issue.</p>
      <AppButton
        label="Refresh page"
        onClick={() => window.location.reload()}
      />
    </div>
  );
};

ErrorMessage.propTypes = {
  className: PropTypes.string
};

export default ErrorMessage;
