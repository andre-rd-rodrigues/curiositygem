import { graphcms, SLUGLIST } from "./api/graphQL/main";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts
       .map(
         ({ slug }) => `
       <url>
           <loc>${`https://curiositygem.com/article/${slug}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>1.0</priority>
       </url>`
       )
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  return null;
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const data = await graphcms.request(SLUGLIST);
  const posts = data["posts"];

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate");
  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
}

export default SiteMap;
