import UserSchema from "../models/rezeptSchema.js";

export const getAllRecipes = async (req, res) => {
    const recipes = await UserSchema.find()
    res.send(recipes)
}

export const createRecipe = async (req, res) => {
    try {
        const recipeData = req.body;
        const userId = '65951d5c550a1735bed894c2'; // Replace with the actual user ID or use req.user or any authentication method to get the user ID
        // Find the user by ID
        const user = await UserSchema.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Add the new recipe to the user's recipes array
        user.recipes.push(recipeData);
        // Save the updated user document
        await user.save();
        res.send("Recipe saved successfully");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create recipe' });
    }
};