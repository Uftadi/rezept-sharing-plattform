import UserSchema from "../models/rezeptSchema.js";

export const getAllRecipes = async (req, res) => {
    try {
      const recipes = await UserSchema.find();
      res.status(200).json(recipes); 
    } catch (error) {
      res.status(500).send("Fehler beim Abrufen der Recipe: " + error.message); 
    }
  };

  export const createUser = async (req, res) => {
    const userData = req.body;
    const user = new UserSchema(userData);
    try {
        await user.save();
        res.send("todolist gespeichert")
    } catch(error) {
        console.error(error);
    }
}

export const createRecipe = async (req, res) => {
    console.log("Hallo Welt", req.body)
    try {
        const recipeData = req.body;
        const userId = '65956bcb1bb0197d3b42c6e5'; // Replace with the actual user ID or use req.user or any authentication method to get the user ID
        // Find the user by ID
        const user = await UserSchema.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });

        }
        // recipeData.steps = "Fake";
        // recipeData.title = "Fake";
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

 export const  deleteRecipe = async(req,res) =>   {
    try {
       const userId = req.params.userId
      const  recipeId = req.params.recipeId
        console.log("userId", userId);
        console.log("recepiId", recipeId)
      await UserSchema.updateOne(
        { _id: userId },
        { $pull: { recipes: { _id: recipeId } } } // pull löscht einen eintrag aus dem array und zwar den mit der _id aus recipeId
      );
      res.send("Daten gelösht")
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  }

export const  updateRecipe = async (req, res) => {
    const userId = req.params.userId; // wie bei delete
    const recipeId = req.params.recipeId;
    const recipeUpdate = req.body;
    try {
      await UserSchema.updateOne(
        { 
          _id: userId, 
          'recipes._id': recipeId 
        },
        { 
          $set: { 
            'recipes.$': recipeUpdate  // recipes.$ findet das erste element im array, das die _id aus recipeId hat und ersetzt es mit recipeUpdate
          } 
        }
      );
      res.send("Recipe updated")
    } catch (error) {
      console.error("Error updating recipe:", error);
      throw error; // Re-throw the error for the caller to handle
    }
  }



// export const updateRecipe = async (req, res) => {
//     const recipeId = req.params.id;
//     const newRecipe = req.body;
//     try {
//       const updatedRecipe = await UserSchema.findByIdAndUpdate(recipeId, newRecipe, {
//         new: true,
//       });
//       if (updatedRecipe) {
//         res.status(200).send("Recipe erfolgreich aktualisiert: " + updatedRecipe); 
//       } else {
//         res.status(404).send("Recipe nicht gefunden"); 
//       }
//     } catch (error) {
//       res.status(500).send("Fehler beim Aktualisieren der Recipe: " + error.message); 
//     }
//   };

//   export const deleteRecipe = async (req, res) => {
//     const recipeId = req.params.id;
//     try {
//       const deletedRecipe = await UserSchema.findByIdAndDelete(recipeId);
//       if (deletedRecipe) {
//         res.status(200).send("Recipe erfolgreich gelöscht: " + deletedRecipe); 
//       } else {
//         res.status(404).send("Recipe nicht gefunden"); 
//       }
//     } catch (error) {
//       res.status(500).send("Fehler beim Löschen der Recipe: " + error.message); 
//     }
//   };