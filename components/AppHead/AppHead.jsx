import PropTypes from "prop-types";
import Head from "next/head";
import React from "react";

function AppHead({
  title,
  description,
  image = "https://media.graphassets.com/m3c024qER0udkPRLgxOI",
  slug
}) {
  return (
    <Head>
      <meta name="description" content={description} key="desc" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="robots" content="/robots.txt" />
      {slug && (
        <>
          <meta
            property="og:url"
            content={`https://curiositygem.com/article/${slug}`}
          />
          <link
            rel="canonical"
            href={`https://curiositygem.com/article/${slug}`}
          />
        </>
      )}
      <meta property="og:site_name" content="curiositygem.com" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </Head>
  );
}

AppHead.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  slug: PropTypes.string
};

export default AppHead;
