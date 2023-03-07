import PropTypes from "prop-types";
import Head from "next/head";
import React from "react";

function AppHead({ title, description }) {
  return (
    <Head>
      <meta name="description" content={description} key="desc" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="assets/images/socialMediaPreview.png"
      />
      <title>{title}</title>
    </Head>
  );
}

AppHead.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default AppHead;
