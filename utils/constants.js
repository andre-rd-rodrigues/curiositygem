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

const CATEGORIES = [
  { name: "Top picks", type: CATEGORY.top },
  { name: "Latest", type: CATEGORY.recent },
  { name: "Wellbeing", type: CATEGORY.wellbeing },
  { name: "Finance", type: CATEGORY.finance },
  { name: "Career", type: CATEGORY.career },
  { name: "Technology", type: CATEGORY.tech },
  { name: "Gaming", type: CATEGORY.games },
  { name: "Nutrition", type: CATEGORY.nutrition },
  { name: "All", type: CATEGORY.all }
];

const ARTICLES_VISIBLE_LIMIT = 6;

export {
  SEARCH_TYPE,
  CATEGORIES,
  CATEGORY,
  SOCIAL_MEDIA,
  ARTICLES_VISIBLE_LIMIT
};
