import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RecipeCard = ({ recipes, openModal, closeModal, selectedRecipe }) => {
  return (
    <div className="row">
      {/* Loop through each recipe and create a card */}
      {recipes.map((recipe, index) => (
        <div
          key={`${recipe.recipe.label}-${index}`}
          className="col-lg-3 col-md-6 mb-3 rounded-4 h-auto"
        >
          <div className="card border-0 bg-transparent rounded-5 !h-full">
            <div className="relative">
              {/* Recipe Image */}
              <img
                src={recipe.recipe.image}
                className="card-img-top rounded-5 object-cover h-[250px] w-full"
                alt={recipe.recipe.label}
              />

              {/* Dark Overlay for Better Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-5"></div>

              {/* Recipe Title and Calories */}
              <div className="absolute bottom-0 left-0 w-full p-3 text-white flex justify-between items-center">
                <div>
                  <h5 className="card-title text-lg font-bold">
                    {recipe.recipe.label}
                  </h5>
                  <p className="card-text text-sm">
                    Calories: {recipe.recipe.calories.toFixed(2)}
                  </p>
                </div>

                {/* Open Modal Button (Ingredient Icon) */}
                <button
                  onClick={() => openModal(recipe)}
                  className="bg-white text-black min-w-10 h-10 flex items-center justify-center rounded-5 overflow-hidden shadow-md"
                >
                  🍜
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Recipe Details Modal */}
      <div
        className="modal bg-black bg-opacity-50"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onClick={closeModal}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          style={{ margin: "auto" }}
        >
          <div
            className="modal-content bg-transparent border-0"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="modal-body p-0 border-0 overflow-auto">
              {selectedRecipe && (
                <div
                  className="inset-0 overflow-auto bg-transparent flex items-center justify-center z-50"
                  onClick={closeModal}
                >
                  <div
                    className="bg-[#FCEACC] mt-5 mb-4 rounded-2xl shadow-xl max-w-sm w-full pt-4 p-2 relative overflow-hidden"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
                  >
                    {/* Close Button */}
                    <button
                      onClick={closeModal}
                      className="bg-white p-2 rounded-5 text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    {/* Recipe Details */}
                    <div className="relative flex justify-between mt-4 mb-4">
                      <div>
                        {/* Recipe Name */}
                        <h2
                          className="text-lg font-semibold mt-6"
                          style={{ color: "#3C4B38" }}
                        >
                          {selectedRecipe.recipe.label}
                        </h2>

                        {/* Display Some Ingredients */}
                        <div className="mt-4">
                          {selectedRecipe.recipe.ingredientLines
                            .slice(0, 3)
                            .map((ingredient, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2 mt-3"
                              >
                                <span
                                  className={`min-w-1.5 h-6 rounded-full ${
                                    index === 0
                                      ? "bg-green-500"
                                      : index === 1
                                      ? "bg-blue-500"
                                      : "bg-orange-400"
                                  }`}
                                ></span>
                                <p className="text-sm font-semibold text-gray-800 mb-0">
                                  {ingredient}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Recipe Image */}
                      <div className="min-w-[200px] w-[200px] h-[200px] -mr-[55px]">
                        <img
                          src={selectedRecipe.recipe.image}
                          alt={selectedRecipe.recipe.label}
                          className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Full Ingredients List */}
                    <div className="bg-white p-3 rounded-2xl">
                      <h3 className="text-md font-semibold mb-2">
                        Ingredients
                      </h3>
                      <ul className="space-y-2 !pl-0">
                        {selectedRecipe.recipe.ingredientLines.map(
                          (ingredient, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-2 bg-white p-2 rounded-md shadow-sm"
                            >
                              <span className="min-w-4 h-4 bg-green-500 rounded-full"></span>
                              <span className="text-sm">{ingredient}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
