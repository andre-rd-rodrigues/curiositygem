import getData from "pages/api/getData";
import RSS from "rss";
import fs from "fs";
import { META } from "./constants";

export default async function generateRssFeed() {
  const site_url = "localhost:3000";
  const allPosts = await getData();

  const feedOptions = {
    title: META.title,
    description: META.description,
    site_url: site_url,
    feed_url: `${site_url}/feed.xml`,
    image_url: META.homepage_img_url,
    copyright: `All rights reserved 2022, André Rodrigues`
  };

  const feed = new RSS(feedOptions);

  allPosts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${site_url}/article/${post.slug}`,
      date: post.createdAt
    });
  });

  fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
