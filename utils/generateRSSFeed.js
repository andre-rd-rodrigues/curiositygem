import RSS from "rss";
import fs from "fs";
import { META } from "./constants";

import { ARTICLES_CARD_QUERY, graphcms } from "pages/api/graphQL/main";

export default async function generateRssFeed() {
  const site_url = "https://blog.andrerodrigo.com";
  const data = await graphcms.request(ARTICLES_CARD_QUERY);

  const posts = data.posts;

  const feedOptions = {
    title: META.title,
    description: META.description,
    site_url: site_url,
    feed_url: `${site_url}/feed.xml`,
    image_url: META.homepage_img_url,
    copyright: "All rights reserved 2022, André Rodrigues"
  };

  const feed = new RSS(feedOptions);

  posts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${site_url}/article/${post.slug}`,
      date: post.publishedDate
    });
  });

  fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
