import express from "express";
import cors from "cors";
import * as RecipeAPI from "./recipe-api";

const app = express();

app.use(express.json()); // Converts body of requests & responses to JSON
app.use(cors()); // Allows for cross-origin requests

app.get("/api/recipes/search", async (req, res) => {
  const searchTerm = req.query.searchTerm as string;
  const page = parseInt(req.query.page as string);
  const results = await RecipeAPI.searchRecipes(searchTerm, page);

  return res.json(results);
});

app.listen(5000, () => console.log("Server running on localhost:5000"));
