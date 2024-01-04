import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";

const url = "http://localhost:3001";

const RecipeList = () => {
  const [users, setUsers] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [produkten, setProdukten] = useState("");
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Fehler beim Abrufen der Daten:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const saveOrder = async () => {
    try {
      const newRecipeItem = {
        title: nameInput,
        ingredients: produkten,
        steps: "",
        time: 20,
        difficulty: "sehr",
      };

      if (selectedRecipeId) {
        await axios.put(`${url}/${selectedRecipeId}`, {
          recipes: [newRecipeItem],
        });
      } else {
        const newRecipes = {
          recipes: [newRecipeItem],
        };
        await axios.post(url, newRecipeItem);
        console.log("nameInput:", nameInput);
        console.log("produkten:", produkten);
      }

      fetchData();

      setNameInput("");
      setProdukten("");
      setSelectedRecipeId(null);
    } catch (error) {
      console.error("Fehler beim Speichern der Bestellung:", error.message);
    }
  };

  const deleteOrder = async (userId, recipeItemId) => {
    console.log("recipiId", recipeItemId)
    try {
      await axios.delete(`${url}/${userId}/${recipeItemId}`);
      fetchData();
    } catch (error) {
      console.error("Fehler beim Löschen der Bestellung:", error.message);
    }
  };
  const updateRecipe = async (userId, recipeItemId) => {
    const newRecipeItem = {
      title: nameInput,
      ingredients: produkten,
      steps: "",
      time: 20,
      difficulty: "sehr",
    };
    try {
      await axios.put(`${url}/${userId}/${recipeItemId}`,newRecipeItem);
      fetchData();
    } catch (error) {
      console.log("Erorr")
    }
  }

  const shareRecipe = (recipeItem) => {
    console.log("Sharing recipe:", recipeItem);
  };

  return (
    <>
      <h1>Rezepte App</h1>
      <div className="input_holder">
        <input
          type="text"
          placeholder="Food Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <textarea
          placeholder="Food Zutaten"
          value={produkten}
          onChange={(e) => setProdukten(e.target.value)}
          rows="20"
          cols="50"
        />
        <button onClick={saveOrder}>Add/Update</button>
      </div>
      <div className="list">
        <table>
          <thead>
            <tr>
              <th>Food Title</th>
              <th>Food Zutaten</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <div key={user._id}>
                {user.recipes &&
                  user.recipes[0] &&
                  user.recipes.map((recipe, index) => (
                    <tr key={user._id}>
                      <td>
                        <p key={index}>{recipe.title}</p>
                      </td>
                      <td>
                        <button onClick={() => updateRecipe(user._id, recipe._id)}>
                          {" "}
                          <MdEdit />
                        </button>
                        <button onClick={() => deleteOrder(user._id,recipe._id)}>
                          <MdDelete />
                        </button>
                        <button onClick={() => shareRecipe(user)}>
                          <FaShareSquare />
                        </button>
                      </td>
                    </tr>
                  ))}
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecipeList;

// const RecipeForm = () => {
//   const [recipeData, setRecipeData] = useState({
//     title: '',
//     steps: '',

//   });

//   const [recipes, setRecipes] = useState([]);

//   const fetchData = async () => {
//          try {
//           const response = await axios.get(url);
//            setRecipes(response.data);
//           console.log(response.data);
//          } catch (error) {
//            console.error("Fehler beim Abrufen der Daten:", error.message);
//         }
//        };

//        useEffect(() => {
//          fetchData();
//        }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setRecipeData({ ...recipeData, [name]: value });
//   };

//   const handleCreateRecipe = async () => {
//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(recipeData),
//       });

//       if (response.ok) {
//         console.log('Recipe created successfully');

//       } else {
//         console.error('Failed to create recipe');

//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeleteRecipe = async (recipeId) => {
//     try {
//       const response = await fetch(`${url}/${recipeId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         console.log('Recipe deleted successfully');
//         // Hier könntest du weitere Aktionen durchführen, z.B. die Benutzeroberfläche aktualisieren
//       } else {
//         console.error('Failed to delete recipe');
//         // Hier könntest du den Benutzer über den Fehler informieren
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleUpdateRecipe = async (recipeId) => {
//     try {
//       const response = await fetch(`${url}/${recipeId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(recipeData),
//       });

//       if (response.ok) {
//         console.log('Recipe updated successfully');

//       } else {
//         console.error('Failed to update recipe');

//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleShareRecipe = async (recipeId) => {
//     try {

//       console.log('Recipe shared successfully');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create Recipe</h2>
//       <label>
//         Title:
//         <input type="text" name="title" value={recipeData.title} onChange={handleInputChange} />
//       </label>
//       <br />
//       <label>
//         Steps:
//         <textarea name="steps" value={recipeData.steps} onChange={handleInputChange} />
//       </label>
//       <br />
//       <button onClick={handleCreateRecipe}>Create Recipe</button>

//       {/* Hier werden die Rezepte aus der State-Variable "recipes" gemappt */}
//       {recipes && recipes.length > 0 ? (
//   <ul>
//     {recipes.map((recipeItem) => (
//       <li key={recipeItem._id}>
//         {recipeItem.recipe && recipeItem.recipe.title && (
//           <p>{recipeItem.recipe.title}</p>
//         )}
//         <ul>
//           {recipeItem.recipe &&
//             recipeItem.recipe.ingredients &&
//             recipeItem.recipe.ingredients.map((ingredient, index) => (
//               <li key={index}>{ingredient}</li>
//             ))}
//         </ul>
//         <button onClick={() => handleDeleteRecipe(recipeItem._id)}>
//           Delete Recipe
//         </button>
//         <button onClick={() => handleUpdateRecipe(recipeItem._id)}>
//           Update Recipe
//         </button>
//         <button onClick={() => handleShareRecipe(recipeItem._id)}>
//           Share Recipe
//         </button>
//       </li>
//     ))}
//   </ul>
// ) : (
//   <p>No recipes available</p>
// )}

//     </div>
//   );
// };

// export default RecipeForm;
