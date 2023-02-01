const convertTextIntoWords = (text, words) => {
  const getWordsFromChildren = text.split(" ");

  for (const [, item] of getWordsFromChildren.entries()) {
    words.push(item.split(""));
  }

  words.map((word, index) => {
    //Prevent adding space to the last word
    if (index !== words.length - 1) return word.push("\u00A0");
  });
};

export { convertTextIntoWords };
