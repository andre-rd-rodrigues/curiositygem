/**
 *  Function to replace GOOGLE_AD with Google Ad tag
 *  @param {object} article - The article
 */

import { CLIENT_AD, IN_ARTICLE_SLOT } from "utils/helpers/googleAds";

export const getArticleWithGoogleAds = (article) => {
  const contentHTML = article.content.html.split("GOOGLE_AD_HERE");

  contentHTML.forEach((_, index) => {
    if (index % 2 !== 0) {
      contentHTML.splice(
        index,
        0,
        `<ins class="adsbygoogle" style={{ display: "block" }} data-ad-client="${CLIENT_AD}" data-ad-slot="${IN_ARTICLE_SLOT}" data-ad-format="auto" data-full-width-responsive="true"></ins>`
      );
    }
  });

  return {
    ...article,
    content: {
      html: contentHTML.join(" ")
    }
  };
};
