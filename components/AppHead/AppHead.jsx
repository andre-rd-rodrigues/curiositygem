import { NextSeo } from "next-seo";
import { META } from "utils";

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

export default AppHead;
