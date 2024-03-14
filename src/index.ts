import express from "express";
import cors from "cors";
import * as RecipeAPI from "./recipe-api";

const app = express();

app.use(express.json()); // Converts body of requests & responses to JSON
app.use(
  cors({
    origin: "https://recipe-oukjatatt-kurais-projects-2013c57e.vercel.app",
  })
); // Allows for cross-origin requests

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on localhost:5000"));

app.get("/api/recipes/search", async (req, res) => {
  console.log(req.query);

  const searchTerm = req.query.searchTerm as string;
  const page = parseInt(req.query.page as string);
  const results = await RecipeAPI.searchRecipes(searchTerm, page);

  // console.log("Response data:", results);
  return res.json(results);
});

export default app;
