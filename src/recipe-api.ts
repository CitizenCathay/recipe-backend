require("dotenv").config();

const apiKey = process.env.API_KEY;

export const searchRecipes = async (searchTerm: string, page: number) => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const url = new URL(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch"
  );

  const queryParams = {
    query: searchTerm,
    number: "15",
    offset: (page * 10).toString(),
  };
  url.search = new URLSearchParams(queryParams).toString();

  const headers = {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  };

  try {
    const searchResponse = await fetch(url, { headers });
    const resultsJson = await searchResponse.json();
    return resultsJson;
  } catch (error) {
    console.log(error);
  }
};
