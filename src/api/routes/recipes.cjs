const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe.cjs");

// Getting all
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Getting one
router.get("/:id", getRecipe, (req, res) => {
  res.json(res.recipe);
});
// Creating one
router.post("/", async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    time: req.body.time,
    ingredients: req.body.ingredients,
    method: req.body.method,
  });
  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/*
Not needed for this project
// Updating one
router.patch("/:id", (req, res) => {});
// Deleting one
router.delete("/:id", (req, res) => {});
*/

async function getRecipe(req, res, next) {
  let recipe;
  try {
    recipe = await Recipe.findById(req.params.id);
    if (recipe == null) {
      return res.status(404).json({ message: "Cannot find recipe" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.recipe = recipe;
  next();
}

module.exports = router;
