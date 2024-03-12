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
    addRecipeInformation: "true",
    minCarbs: "0",
    maxCarbs: "0",
    minProtein: "0",
    maxProtein: "0",
    minCalories: "0",
    maxCalories: "0",
    minFat: "0",
    maxFat: "0",
    minAlcohol: "0",
    maxAlcohol: "0",
    minCaffeine: "0",
    maxCaffeine: "0",
    minCopper: "0",
    maxCopper: "0",
    minCalcium: "0",
    maxCalcium: "0",
    minCholine: "0",
    maxCholine: "0",
    minCholesterol: "0",
    maxCholesterol: "0",
    minFluoride: "0",
    maxFluoride: "0",
    minSaturatedFat: "0",
    maxSaturatedFat: "0",
    minVitaminA: "0",
    maxVitaminA: "0",
    minVitaminC: "0",
    maxVitaminC: "0",
    minVitaminD: "0",
    maxVitaminD: "0",
    minVitaminE: "0",
    maxVitaminE: "0",
    minVitaminK: "0",
    maxVitaminK: "0",
    minVitaminB1: "0",
    maxVitaminB1: "0",
    minVitaminB2: "0",
    maxVitaminB2: "0",
    minVitaminB5: "0",
    maxVitaminB5: "0",
    minVitaminB3: "0",
    maxVitaminB3: "0",
    minVitaminB6: "0",
    maxVitaminB6: "0",
    minVitaminB12: "0",
    maxVitaminB12: "0",
    minFiber: "0",
    maxFiber: "0",
    minFolate: "0",
    maxFolate: "0",
    minFolicAcid: "0",
    maxFolicAcid: "0",
    minIodine: "0",
    maxIodine: "0",
    minIron: "0",
    maxIron: "0",
    minMagnesium: "0",
    maxMagnesium: "0",
    minManganese: "0",
    maxManganese: "0",
    minPhosphorus: "0",
    maxPhosphorus: "0",
    minPotassium: "0",
    maxPotassium: "0",
    minSelenium: "0",
    maxSelenium: "0",
    minSodium: "0",
    maxSodium: "0",
    minSugar: "0",
    maxSugar: "0",
    minZinc: "0",
    maxZinc: "0",
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

export const trendingRecipes = async (searchCuisine: string, page: number) => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const url = new URL(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch"
  );

  const queryParams = {
    cuisine: searchCuisine,
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
