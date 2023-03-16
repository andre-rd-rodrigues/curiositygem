const SEARCH_TYPE = {
  category: "category",
  input: "input"
};

const SOCIAL_MEDIA = [
  { label: "facebook", ref: "https://www.facebook.com/andrerodrigoweb" },
  {
    label: "instagram",
    ref: "https://www.instagram.com/andre.creativedesign/"
  },
  {
    label: "linkedin",
    ref: "https://www.linkedin.com/in/andr%C3%A9-rodrigues-4b4a9b188/"
  }
];

const CATEGORY = {
  tech: "technology",
  games: "gaming",
  wellbeing: "wellbeing",
  finance: "finance",
  top: "top",
  recent: "recent",
  career: "career",
  nutrition: "nutrition",
  all: "all"
};

const PAGES = [
  {
    title: "About Us",
    link_title: "about"
  },
  {
    title: "Contact Us",
    link_title: "contact"
  },
  {
    title: "Terms",
    link_title: "terms"
  },
  {
    title: "Privacy",
    link_title: "privacy"
  }
];

const CATEGORIES = [
  { name: "Top", type: CATEGORY.top },
  { name: "Latest", type: CATEGORY.recent },
  { name: "Wellbeing", type: CATEGORY.wellbeing },
  { name: "Finance", type: CATEGORY.finance },
  { name: "Career", type: CATEGORY.career },
  { name: "Technology", type: CATEGORY.tech },
  { name: "Gaming", type: CATEGORY.games },
  { name: "Nutrition", type: CATEGORY.nutrition }
  /*   { name: "All", type: CATEGORY.all } */
];

const ARTICLES_VISIBLE_LIMIT = 6;

const COOKIES_NAMING = "curiosity_gem_cookies";

export {
  SEARCH_TYPE,
  CATEGORIES,
  CATEGORY,
  SOCIAL_MEDIA,
  ARTICLES_VISIBLE_LIMIT,
  PAGES,
  COOKIES_NAMING
};
