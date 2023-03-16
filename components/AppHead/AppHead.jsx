import PropTypes from "prop-types";
import Head from "next/head";
import React from "react";
import { META } from "utils";
import { NextSeo } from "next-seo";

function AppHead(props) {
  const {
    title = META.title,
    description = META.description,
    openGraph
  } = props;

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={
        openGraph
          ? openGraph
          : {
              url: `https://www.curiositygem.com`,
              title,
              description,
              images: [
                {
                  url: META.homepage_img_url,
                  alt: META.title
                }
              ]
            }
      }
      {...props}
    />
  );
}

AppHead.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  slug: PropTypes.string
};

export default AppHead;
