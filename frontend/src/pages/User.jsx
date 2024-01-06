import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import UpperNav from "../components/UpperNav";
import UserProfile from "../components/UserProfile";
import { UserContext } from "../context/UserContext";
import UserRecipes from "../components/UserRecipes";

// const url = "http://localhost:3001";

const ShareMenu = ({ onShareFacebook, onShareTwitter }) => {
  return (
    <div className="share-menu">
      <p>Where would you like to share your recipes?</p>
      <button onClick={onShareFacebook}>Facebook</button>
      <br />

      <button onClick={onShareTwitter}>Twitter</button>
    </div>
  );
};

const User = () => {
  const [nameInput, setNameInput] = useState("");
  const [produkten, setProdukten] = useState("");
  const [steps, setSteps] = useState("");
  const [time, setTime] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [selectedUserId, setselectedUserId] = useState(null);

  const {users, setUsers, fetchUserData, url} = useContext(UserContext);

  const [shareMenuVisible, setShareMenuVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);


  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(url);
  //     setUsers(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Fehler beim Abrufen der Daten:", error.message);
  //   }
  // };

  useEffect(() => {
    fetchUserData();
  }, []);

  const updateRecipe = (orderId, recipeItemId) => {
    const selectedOrder = users.find((o) => o._id === orderId);
    if (selectedOrder) {
      const selectedRecipe = selectedOrder.recipes.find(
        (r) => r._id === recipeItemId
      );

      if (selectedRecipe) {
        setNameInput(selectedRecipe.title);
        setProdukten(selectedRecipe.ingredients);
        setSteps(selectedRecipe.steps);
        setTime(selectedRecipe.time);
        setDifficulty(selectedRecipe.difficulty);
        setSelectedRecipeId(recipeItemId);
        setselectedUserId(orderId);
      }
    }
  };

  const saveOrder = async () => {
    try {
      const newRecipeItem = {
        title: nameInput,
        ingredients: produkten,
        steps: steps,
        time: time,
        difficulty: difficulty,
      };

      if (selectedUserId && selectedRecipeId) {
        const selectedUser = users.find((user) => user._id === selectedUserId);

        if (selectedUser) {
          const selectedRecipeIndex = selectedUser.recipes.findIndex(
            (recipe) => recipe._id === selectedRecipeId
          );

          if (selectedRecipeIndex !== -1) {
            selectedUser.recipes[selectedRecipeIndex] = newRecipeItem;

            await axios.put(
              `${url}/${selectedUserId}/${selectedRecipeId}`,
              newRecipeItem
            );
          }
        }
      } else {
        await axios.post(url, newRecipeItem);
      }

      fetchUserData();

      setNameInput("");
      setProdukten("");
      setSteps("");
      setTime(0);
      setDifficulty("");
      setSelectedRecipeId(null);
      setselectedUserId(null);
    } catch (error) {
      console.error("Fehler beim Speichern der Bestellung:", error.message);
    }
  };

  const deleteOrder = async (userId, recipeItemId) => {
    try {
      await axios.delete(`${url}/${userId}/${recipeItemId}`);
      fetchUserData();
    } catch (error) {
      console.error("Fehler beim Löschen der Bestellung:", error.message);
    }
  };

  const shareOnFacebook = () => {
    try {
      const recipeDetails = `Name: ${selectedRecipe.title}\nZutaten: ${selectedRecipe.ingredients}\nTime: ${selectedRecipe.time}\nDifficulty: ${selectedRecipe.difficulty}`;
      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}&quote=${encodeURIComponent(recipeDetails)}`;
      window.open(shareUrl, "_blank");
    } catch (error) {
      console.error("Error sharing on Facebook:", error);
    }
  };

  const shareOnTwitter = () => {
    try {
      const tweetText = `Name: ${selectedRecipe.title}\nIngredients: ${selectedRecipe.ingredients}\nTime: ${selectedRecipe.time}\nDifficulty: ${selectedRecipe.difficulty}`;
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweetText
      )}`;
      window.open(tweetUrl, "_blank");
    } catch (error) {
      console.error("Error sharing on Twitter:", error);
    }
  };

  const toggleShareMenu = (recipe) => {
    setShareMenuVisible(!shareMenuVisible);
    setSelectedRecipe(recipe);
  };

  return (
    <>
    <UpperNav />
    <UserProfile />
    <UserRecipes />
      <div className="input_holder">
        <input
          type="text"
          placeholder="Food Name"
          value={nameInput}
          name="title"
          onChange={(e) => setNameInput(e.target.value)}
          className="border-[2px] block"
        />
        <textarea
          placeholder="Food Zutaten"
          value={produkten}
          name="ingredients"
          onChange={(e) => setProdukten(e.target.value)}
          rows="10"
          cols="20"
        />
        <input
          type="text"
          placeholder="Steps"
          value={steps}
          name="steps"
          onChange={(e) => setSteps(e.target.value)}
        />
        <input
          type="number"
          placeholder="time"
          value={time}
          name="time"
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Difficulty"
          value={difficulty}
          name="difficulty"
          onChange={(e) => setDifficulty(e.target.value)}
        />
        {selectedRecipeId ? (
          <button onClick={saveOrder}>Update</button>
        ) : (
          <button onClick={saveOrder}>Add</button>
        )}
      </div>
      <div className="list">
        <table>
          <thead>
            <tr>
              <th>Food Title</th>
              <th>Food Zutaten</th>
              <th>Steps</th>
              <th>Time</th>
              <th>Difficulty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              (user) =>
                user.recipes &&
                user.recipes[0] &&
                user.recipes.map((recipe, index) => (
                  <tr key={user._id + index}>
                    <td>
                      <p>{recipe.title}</p>
                    </td>
                    <td>
                      <p>{recipe.ingredients}</p>
                    </td>
                    <td>
                      <p>{recipe.steps}</p>
                    </td>
                    <td>
                      <p>{recipe.time}</p>
                    </td>
                    <td>
                      <p>{recipe.difficulty}</p>
                    </td>
                    <td>
                      <button
                        onClick={() => updateRecipe(user._id, recipe._id)}
                      >
                        <MdEdit />
                      </button>
                      <button onClick={() => deleteOrder(user._id, recipe._id)}>
                        <MdDelete />
                      </button>
                      <button onClick={() => toggleShareMenu(recipe)}>
                        <FaShareSquare />
                      </button>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
        {shareMenuVisible && selectedRecipe && (
          <ShareMenu
            onShareFacebook={() => {
              shareOnFacebook();
              setShareMenuVisible(false);
            }}
            onShareTwitter={() => {
              shareOnTwitter();
              setShareMenuVisible(false);
            }}
          />
        )}
        <Link to="/">back to Main</Link>
      </div>
    </>
  );
};

export default User;



