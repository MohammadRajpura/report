// RecipeGenerator.js

"use client"; // Enables React's client-side rendering for this component

import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling
import Navbar from "./Navbar"; // Import Navbar component
import RecipeCard from "./RecipeCard"; // Import RecipeCard component
import { recipesItem } from "./recipes"; // Import initial recipe data

const RecipeGenerator = () => {
  // State to store the list of recipes
  const [recipes, setRecipes] = useState(recipesItem);

  // State to store the user's search input
  const [search, setSearch] = useState("");

  // State to store the selected recipe for modal display
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // API credentials for Edamam Recipe API (replace with actual values)
  const APP_ID = "YOUR_APP_ID";
  const APP_KEY = "YOUR_EDAMAM_APP_KEY";

  // Function to fetch recipes from the API based on user input
  const generateRecipe = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );

      // Update the state with fetched recipes if there are results
      if (response.data.hits.length > 0) {
        setRecipes(response.data.hits);
      }
    } catch (error) {
      console.error("Failed to fetch recipe", error);
    }
  };

  // Function to open the recipe details modal
  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    document.getElementById("exampleModal").style.display = "block";
  };

  // Function to close the recipe details modal
  const closeModal = () => {
    setSelectedRecipe(null);
    document.getElementById("exampleModal").style.display = "none";
  };

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      <div className="container mt-3 justify-content-center">
        <div className="row">
          {/* Search Input Field */}
          <div className="col-md-6 mb-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control rounded-5"
              placeholder="Search for a recipe..."
            />
          </div>

          {/* Generate Recipe Button */}
          <div className="col-md-6 mb-5">
            <button
              onClick={generateRecipe}
              className="btn btn-success justify-content-center rounded-5 px-4 bg-dark border-0"
            >
              Generate Recipe
            </button>
          </div>
        </div>

        {/* Display recipes or show a message if no results are found */}
        {recipes.length === 0 ? (
          <p>No recipes found</p>
        ) : (
          <RecipeCard
            recipes={recipes}
            openModal={openModal}
            closeModal={closeModal}
            selectedRecipe={selectedRecipe}
          />
        )}
      </div>
    </>
  );
};

export default RecipeGenerator;
