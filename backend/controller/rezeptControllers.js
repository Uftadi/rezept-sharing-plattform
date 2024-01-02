import RecipesSchema from "../models/rezeptSchema.js";

export const getAllRecipes = async (req, res) => {
    const recipes = await RecipesSchema.find()
    res.send(recipes)
}