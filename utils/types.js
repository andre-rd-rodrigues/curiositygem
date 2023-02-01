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

const CATEGORIES_TYPE = {
  tech: "technology",
  games: "gaming",
  wellbeing: "wellbeing",
  finance: "finance",
  top: "top",
  recent: "recent",
  career: "career",
  all: "all"
};

const CATEGORIES = [
  { name: "Top picks", type: CATEGORIES_TYPE.top },
  { name: "Latest", type: CATEGORIES_TYPE.recent },
  { name: "Wellbeing", type: CATEGORIES_TYPE.wellbeing },
  { name: "Finance", type: CATEGORIES_TYPE.finance },
  { name: "Career", type: CATEGORIES_TYPE.career },
  { name: "Technology", type: CATEGORIES_TYPE.tech },
  { name: "Gaming", type: CATEGORIES_TYPE.games },
  { name: "All", type: CATEGORIES_TYPE.all }
];

export { SEARCH_TYPE, CATEGORIES, CATEGORIES_TYPE, SOCIAL_MEDIA };
