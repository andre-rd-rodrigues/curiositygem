const { default: baseURL } = require("./baseURL");

async function getData(slug) {
  const response = await fetch(`${baseURL}${slug ? `article/${slug}` : ""}`);
  return response.json();
}

export default getData;
