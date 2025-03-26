// RecipeGenerator.js

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import RecipeCard from "./RecipeCard";

const RecipeGenerator = () => {
  //   const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const APP_ID = "900da95e";
  const APP_KEY = "YOUR_EDAMAM_APP_KEY";

  const generateRecipe = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${search}&app_id=bbb0cce2&app_key=2fe683efd1286808ab9fc1d52132e3dd`
      );
      if (response.data.hits.length > 0) {
        setRecipes(response.data.hits);
      }
    } catch (error) {
      console.error("Failed to fetch recipe", error);
    }
  };

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    document.getElementById("exampleModal").style.display = "block";
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    document.getElementById("exampleModal").style.display = "none";
  };
  const recipes = [
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_0f0ca6019c3104c1a67470b909bce4d4",
        label: "Sparkling fruit punch",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "taste.com.au",
        yield: 12.0,
        ingredientLines: [
          "3 oranges",
          "825g can fruit salad in juice",
          "1/4 cup torn fresh mint leaves",
          "1 litre orange juice, chilled",
          "2 x 750ml bottles sparkling apple juice, chilled",
          "Ice cubes, to serve",
        ],
        calories: 1637.2295622831316,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/0f0ca6019c3104c1a67470b909bce4d4",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_c4f43103ab647914e33515ba6584011b",
        label: "Salad Salsa",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "BigOven",
        yield: 4.0,
        ingredientLines: [
          "2 green chilli peppers",
          "8 small sweet tomatoes",
          "4 spring onions",
          "1/3 cup red onion",
          "1/2 cup red/green/yellow bell pepper",
          "3 tablespoons chunky salsa dip",
        ],
        calories: 280.31111111111113,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/c4f43103ab647914e33515ba6584011b",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_66354b08a61b7ea4c8442d2eb6975112",
        label: 'Tropical Green "Juice"',
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "recipes.sparkpeople.com",
        yield: 3.0,
        ingredientLines: [
          "6 cups fresh spinach",
          "2 cups fresh kale (stems removed)",
          "1 can of Dole Tropical Fruit Salad (or any canned pineapple and/or passion fruit)",
          "1 bag of frozen mango chunks",
          "3 heaping Tbsp of psyllium husk",
        ],
        calories: 874.6124999863054,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/66354b08a61b7ea4c8442d2eb6975112",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8f556d95be42f1aeb06fe4de4cb984f2",
        label: "Broccoli Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "McCormick",
        yield: 6.0,
        ingredientLines: [
          "8 cups water",
          "4 cups broccoli florets",
          "3 tablespoons Lawry's® Teriyaki Marinade with Pineapple Juice",
          "3 tablespoons orange juice",
          "1/4 teaspoon McCormick® Red Pepper, Crushed",
          "1/2 cup shredded carrot",
        ],
        calories: 150.5402708325691,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/8f556d95be42f1aeb06fe4de4cb984f2",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3fd4804477c46599b89a106619675f4b",
        label: "Juicy Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 6.0,
        ingredientLines: [
          "1 (15 ounce) can pineapple chunks with juice",
          "1 apple - peeled, cored and diced",
          "1 orange - peeled, diced and juice reserved",
          "1 banana, sliced",
          "1 cup seedless green grapes, halved",
        ],
        calories: 575.9944234375,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/3fd4804477c46599b89a106619675f4b",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_85a634cdb4900e4cd9a7dc0c9208809f",
        label: "Rum Flavored Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "McCormick",
        yield: 12.0,
        ingredientLines: [
          "6 cups fresh fruit, such as grapes, melon, berries and kiwi",
          "1/4 cup confectioners' sugar",
          "1 tablespoon McCormick® Imitation Rum Extract",
        ],
        calories: 807.6089999994572,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/85a634cdb4900e4cd9a7dc0c9208809f",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_e7eb7cc5b4721262190c32f06cadd705",
        label: "Tropical Island Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 14.0,
        ingredientLines: [
          "1 pineapple - peeled, cored, and cut into 1/2-inch cubes",
          "2 mangos - peeled, pitted, and cut into small cubes",
          "2 papayas - halved lengthwise, seeded, peeled, and cut into 1/2-inch cubes",
          "3 bananas, sliced",
        ],
        calories: 1523.2963333333332,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/e7eb7cc5b4721262190c32f06cadd705",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_c3d25af55297fd106dcbbd89a76800de",
        label: "Mom's Carrot and Raisin Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 4.0,
        ingredientLines: [
          "1 (16 ounce) package carrots, peeled and shredded",
          "3 tablespoons orange juice",
          "1/3 cup raisins",
        ],
        calories: 351.41453836631285,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/c3d25af55297fd106dcbbd89a76800de",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_aa602a1c15f181156cc668e5e6acf1ec",
        label: "Citrus Tossed Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 4.0,
        ingredientLines: [
          "1 teaspoon cornstarch",
          "1/4 cup orange juice",
          "1/4 cup grapefruit juice",
          "2 tablespoons cider vinegar",
          "2 tablespoons orange marmalade",
          "1 teaspoon Dijon mustard",
          "1/2 teaspoon grated orange peel",
          "1/8 teaspoon garlic powder",
          "1/8 teaspoon onion powder",
          "8 cups torn leaf lettuce",
          "1 medium grapefruit, peeled and sectioned",
          "1 medium navel orange, peeled and sectioned",
        ],
        calories: 376.75612500127,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/aa602a1c15f181156cc668e5e6acf1ec",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_070fdcbda27113d5c82f853ccb2e14d1",
        label: "Blackberry-Cantaloupe Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Martha Stewart",
        yield: 4.0,
        ingredientLines: [
          "2 cups blackberries",
          "1/2 cantaloupe, cut into 1-inch pieces",
          "1 tablespoon sugar",
          "1 teaspoon grated peeled fresh ginger",
          "1/2 teaspoon grated lime zest plus 1 tablespoon juice",
          "2 tablespoons thinly sliced fresh mint leaves",
        ],
        calories: 283.6223333333334,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/070fdcbda27113d5c82f853ccb2e14d1",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_0c9482e2710f4bad8a706008aad1c17c",
        label: "Minted Strawberry Melon Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Food52",
        yield: 6.0,
        ingredientLines: [
          "4 cups whole strawberries",
          "4 cups cubed cantaloupe",
          "1 1/2 tablespoons chopped fresh mint",
        ],
        calories: 405.682,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/0c9482e2710f4bad8a706008aad1c17c",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8a0b1e87d2874b6c9c04b70d71c3a549",
        label: "Mango, Mint, and Pea Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Honest Cooking",
        yield: 4.0,
        ingredientLines: [
          "8 oz fresh green peas, such as Sugar Snaps, English Peas or even Snow Peas",
          "10 oz shelled peas (If using frozen, just thaw them according to package directions)",
          "2-4 T fresh chopped mint",
          "A couple big handfuls of watercress (optional)",
          "1 Mango, sliced",
          "½ c chopped red onion",
        ],
        calories: 561.9285350126272,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/8a0b1e87d2874b6c9c04b70d71c3a549",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_e37a3c7422c7626eb09202d9ac58035a",
        label: "Quick and Easy Bean Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Epicurious",
        yield: 2.0,
        ingredientLines: [
          "1 1/2 cups cooked or 1 (15-ounce) can low-sodium or no-salt-added cannellini beans or other white beans, drained",
          "1/2 small red onion, chopped",
          "1 tomato, chopped",
          "1/2 cup chopped parsley",
          "1 tablespoon balsamic vinegar",
          "1 teaspoon no-salt seasoning blend, adjusted to taste",
        ],
        calories: 1074.615,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/e37a3c7422c7626eb09202d9ac58035a",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_f5c2a10e9bb74c978b2a4e4990673ea4",
        label: "Xie Xie's Tofu Salad with Pickled Vegetables",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Food & Wine",
        yield: 6.0,
        ingredientLines: [
          "2 tablespoons rice vinegar",
          "2 tablespoons sugar",
          "1/2 teaspoon kosher salt",
          "1 pound red cabbage, finely shredded (4 cups)",
        ],
        calories: 188.91400000000002,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/f5c2a10e9bb74c978b2a4e4990673ea4",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_7d87084868b8d220abf1f062821a275c",
        label: "Layered Tropical Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Martha Stewart",
        yield: 8.0,
        ingredientLines: [
          "1 pineapple (about 5 pounds), peeled, cored, and cut crosswise into thin slices",
          "1 papaya (about 1 pound), peeled, halved lengthwise, seeded, and cut crosswise into thin slices",
          "1 star fruit, cut crosswise into thin slices",
          "2 tablespoons sugar",
          "1/2 cup fresh lime juice, plus 3 tablespoons grated lime zest strips, for garnish (4 to 6 limes total)",
          "Light rum (optional)",
        ],
        calories: 846.7779975923816,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/7d87084868b8d220abf1f062821a275c",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_d2d14294105a68e5e175c11470a4e841",
        label: "PointsPlus Marinated Cucumber and Melon Salad Recipe",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "The Daily Meal",
        yield: 8.0,
        ingredientLines: [
          "1 medium English cucumber, thinly sliced",
          "1 ½ cup radishes, thinly sliced",
          "¼ medium honeydew melon, cut into slices",
          "½ cup mint leaves, fresh, cut into thin ribbons",
          "¼ cup fresh lemon juice",
          "1 tablespoon sugar",
        ],
        calories: 260.899,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/d2d14294105a68e5e175c11470a4e841",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_274e09368699f8a19e7b3955c0913006",
        label: "Winter Fruit Salad in Ginger-Lime Syrup",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Delish",
        yield: 6.0,
        ingredientLines: [
          "¼ c. pure maple syrup",
          "1 tbsp. water",
          "1 piece of fresh ginger",
          "2 tbsp. fresh lime juice",
          "3 clementines or mandarins",
          "2 blood oranges",
          "1 grapefruit",
          "1 Fuyu persimmon",
          "1 Asian pear",
          "1 red pear",
          "1 c. pomegranate seeds",
          "2 tbsp. mint",
          "hemp seeds",
        ],
        calories: 923.5426666665363,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/274e09368699f8a19e7b3955c0913006",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_c35a3aaf9f711b8ab4777fa4b99168f1",
        label: "Peach and Crab Salad With Mesclun and Herbs",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Martha Stewart",
        yield: 4.0,
        ingredientLines: [
          "1/2 cup fresh orange juice (from 2 oranges)",
          "1/2 cup sugar",
          "3 tablespoons coarsely ground coriander",
          "1/2 cup fresh lime juice (from 4 limes)",
        ],
        calories: 517.75,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/c35a3aaf9f711b8ab4777fa4b99168f1",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_dbc955c59d33cbd56429fbd94c8fe7f3",
        label: "Citrus Fruit Cups",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "EatingWell",
        yield: 14.0,
        ingredientLines: [
          "4 pink grapefruit",
          "3 oranges",
          "3 tangerines",
          "2 cups strawberries",
          "1 cup blueberries",
          "2 kiwifruits, peeled and quartered",
          "2 limes",
          "1 sprig Fresh mint sprigs",
          "2 Lime wedges",
        ],
        calories: 954.912,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/dbc955c59d33cbd56429fbd94c8fe7f3",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_b818feb562224918a8211b66862e737b",
        label: "Quick Pickled Rhubarb",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "EatingWell",
        yield: 16.0,
        ingredientLines: [
          "1 teaspoon juniper berries",
          "1 teaspoon allspice berries",
          "1 teaspoon coriander seeds",
          "½ teaspoon whole black peppercorns",
          "2 chiles de arbol or other dried small red chiles",
          "1 shallot, halved",
          "2 small bay leaves",
          "2 star anise",
          "1 cup rice vinegar",
          "1 cup water",
          "½ cup plus 1 tablespoon sugar",
          "1 teaspoon kosher salt",
          "1 ¼ pounds trimmed fresh rhubarb stalks",
        ],
        calories: 683.057497125,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/b818feb562224918a8211b66862e737b",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_0f0ca6019c3104c1a67470b909bce4d4",
        label: "Sparkling fruit punch",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "taste.com.au",
        yield: 12.0,
        ingredientLines: [
          "3 oranges",
          "825g can fruit salad in juice",
          "1/4 cup torn fresh mint leaves",
          "1 litre orange juice, chilled",
          "2 x 750ml bottles sparkling apple juice, chilled",
          "Ice cubes, to serve",
        ],
        calories: 1637.2295622831316,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/0f0ca6019c3104c1a67470b909bce4d4",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_c4f43103ab647914e33515ba6584011b",
        label: "Salad Salsa",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "BigOven",
        yield: 4.0,
        ingredientLines: [
          "2 green chilli peppers",
          "8 small sweet tomatoes",
          "4 spring onions",
          "1/3 cup red onion",
          "1/2 cup red/green/yellow bell pepper",
          "3 tablespoons chunky salsa dip",
        ],
        calories: 280.31111111111113,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/c4f43103ab647914e33515ba6584011b",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_66354b08a61b7ea4c8442d2eb6975112",
        label: 'Tropical Green "Juice"',
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "recipes.sparkpeople.com",
        yield: 3.0,
        ingredientLines: [
          "6 cups fresh spinach",
          "2 cups fresh kale (stems removed)",
          "1 can of Dole Tropical Fruit Salad (or any canned pineapple and/or passion fruit)",
          "1 bag of frozen mango chunks",
          "3 heaping Tbsp of psyllium husk",
        ],
        calories: 874.6124999863054,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/66354b08a61b7ea4c8442d2eb6975112",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8f556d95be42f1aeb06fe4de4cb984f2",
        label: "Broccoli Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "McCormick",
        yield: 6.0,
        ingredientLines: [
          "8 cups water",
          "4 cups broccoli florets",
          "3 tablespoons Lawry's® Teriyaki Marinade with Pineapple Juice",
          "3 tablespoons orange juice",
          "1/4 teaspoon McCormick® Red Pepper, Crushed",
          "1/2 cup shredded carrot",
        ],
        calories: 150.5402708325691,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/8f556d95be42f1aeb06fe4de4cb984f2",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3fd4804477c46599b89a106619675f4b",
        label: "Juicy Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 6.0,
        ingredientLines: [
          "1 (15 ounce) can pineapple chunks with juice",
          "1 apple - peeled, cored and diced",
          "1 orange - peeled, diced and juice reserved",
          "1 banana, sliced",
          "1 cup seedless green grapes, halved",
        ],
        calories: 575.9944234375,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/3fd4804477c46599b89a106619675f4b",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_85a634cdb4900e4cd9a7dc0c9208809f",
        label: "Rum Flavored Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "McCormick",
        yield: 12.0,
        ingredientLines: [
          "6 cups fresh fruit, such as grapes, melon, berries and kiwi",
          "1/4 cup confectioners' sugar",
          "1 tablespoon McCormick® Imitation Rum Extract",
        ],
        calories: 807.6089999994572,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/85a634cdb4900e4cd9a7dc0c9208809f",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_e7eb7cc5b4721262190c32f06cadd705",
        label: "Tropical Island Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 14.0,
        ingredientLines: [
          "1 pineapple - peeled, cored, and cut into 1/2-inch cubes",
          "2 mangos - peeled, pitted, and cut into small cubes",
          "2 papayas - halved lengthwise, seeded, peeled, and cut into 1/2-inch cubes",
          "3 bananas, sliced",
        ],
        calories: 1523.2963333333332,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/e7eb7cc5b4721262190c32f06cadd705",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_c3d25af55297fd106dcbbd89a76800de",
        label: "Mom's Carrot and Raisin Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 4.0,
        ingredientLines: [
          "1 (16 ounce) package carrots, peeled and shredded",
          "3 tablespoons orange juice",
          "1/3 cup raisins",
        ],
        calories: 351.41453836631285,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/c3d25af55297fd106dcbbd89a76800de",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_aa602a1c15f181156cc668e5e6acf1ec",
        label: "Citrus Tossed Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 4.0,
        ingredientLines: [
          "1 teaspoon cornstarch",
          "1/4 cup orange juice",
          "1/4 cup grapefruit juice",
          "2 tablespoons cider vinegar",
          "2 tablespoons orange marmalade",
          "1 teaspoon Dijon mustard",
          "1/2 teaspoon grated orange peel",
          "1/8 teaspoon garlic powder",
          "1/8 teaspoon onion powder",
          "8 cups torn leaf lettuce",
          "1 medium grapefruit, peeled and sectioned",
          "1 medium navel orange, peeled and sectioned",
        ],
        calories: 376.75612500127,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/aa602a1c15f181156cc668e5e6acf1ec",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_070fdcbda27113d5c82f853ccb2e14d1",
        label: "Blackberry-Cantaloupe Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Martha Stewart",
        yield: 4.0,
        ingredientLines: [
          "2 cups blackberries",
          "1/2 cantaloupe, cut into 1-inch pieces",
          "1 tablespoon sugar",
          "1 teaspoon grated peeled fresh ginger",
          "1/2 teaspoon grated lime zest plus 1 tablespoon juice",
          "2 tablespoons thinly sliced fresh mint leaves",
        ],
        calories: 283.6223333333334,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/070fdcbda27113d5c82f853ccb2e14d1",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_0c9482e2710f4bad8a706008aad1c17c",
        label: "Minted Strawberry Melon Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Food52",
        yield: 6.0,
        ingredientLines: [
          "4 cups whole strawberries",
          "4 cups cubed cantaloupe",
          "1 1/2 tablespoons chopped fresh mint",
        ],
        calories: 405.682,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/0c9482e2710f4bad8a706008aad1c17c",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_0f0ca6019c3104c1a67470b909bce4d4",
        label: "Sparkling fruit punch",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "taste.com.au",
        yield: 12.0,
        ingredientLines: [
          "3 oranges",
          "825g can fruit salad in juice",
          "1/4 cup torn fresh mint leaves",
          "1 litre orange juice, chilled",
          "2 x 750ml bottles sparkling apple juice, chilled",
          "Ice cubes, to serve",
        ],
        calories: 1637.2295622831316,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/0f0ca6019c3104c1a67470b909bce4d4",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_c4f43103ab647914e33515ba6584011b",
        label: "Salad Salsa",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "BigOven",
        yield: 4.0,
        ingredientLines: [
          "2 green chilli peppers",
          "8 small sweet tomatoes",
          "4 spring onions",
          "1/3 cup red onion",
          "1/2 cup red/green/yellow bell pepper",
          "3 tablespoons chunky salsa dip",
        ],
        calories: 280.31111111111113,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/c4f43103ab647914e33515ba6584011b",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_66354b08a61b7ea4c8442d2eb6975112",
        label: 'Tropical Green "Juice"',
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "recipes.sparkpeople.com",
        yield: 3.0,
        ingredientLines: [
          "6 cups fresh spinach",
          "2 cups fresh kale (stems removed)",
          "1 can of Dole Tropical Fruit Salad (or any canned pineapple and/or passion fruit)",
          "1 bag of frozen mango chunks",
          "3 heaping Tbsp of psyllium husk",
        ],
        calories: 874.6124999863054,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/66354b08a61b7ea4c8442d2eb6975112",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8f556d95be42f1aeb06fe4de4cb984f2",
        label: "Broccoli Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "McCormick",
        yield: 6.0,
        ingredientLines: [
          "8 cups water",
          "4 cups broccoli florets",
          "3 tablespoons Lawry's® Teriyaki Marinade with Pineapple Juice",
          "3 tablespoons orange juice",
          "1/4 teaspoon McCormick® Red Pepper, Crushed",
          "1/2 cup shredded carrot",
        ],
        calories: 150.5402708325691,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/8f556d95be42f1aeb06fe4de4cb984f2",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3fd4804477c46599b89a106619675f4b",
        label: "Juicy Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 6.0,
        ingredientLines: [
          "1 (15 ounce) can pineapple chunks with juice",
          "1 apple - peeled, cored and diced",
          "1 orange - peeled, diced and juice reserved",
          "1 banana, sliced",
          "1 cup seedless green grapes, halved",
        ],
        calories: 575.9944234375,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/3fd4804477c46599b89a106619675f4b",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_85a634cdb4900e4cd9a7dc0c9208809f",
        label: "Rum Flavored Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "McCormick",
        yield: 12.0,
        ingredientLines: [
          "6 cups fresh fruit, such as grapes, melon, berries and kiwi",
          "1/4 cup confectioners' sugar",
          "1 tablespoon McCormick® Imitation Rum Extract",
        ],
        calories: 807.6089999994572,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/85a634cdb4900e4cd9a7dc0c9208809f",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_e7eb7cc5b4721262190c32f06cadd705",
        label: "Tropical Island Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 14.0,
        ingredientLines: [
          "1 pineapple - peeled, cored, and cut into 1/2-inch cubes",
          "2 mangos - peeled, pitted, and cut into small cubes",
          "2 papayas - halved lengthwise, seeded, peeled, and cut into 1/2-inch cubes",
          "3 bananas, sliced",
        ],
        calories: 1523.2963333333332,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/e7eb7cc5b4721262190c32f06cadd705",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_c3d25af55297fd106dcbbd89a76800de",
        label: "Mom's Carrot and Raisin Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 4.0,
        ingredientLines: [
          "1 (16 ounce) package carrots, peeled and shredded",
          "3 tablespoons orange juice",
          "1/3 cup raisins",
        ],
        calories: 351.41453836631285,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/c3d25af55297fd106dcbbd89a76800de",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_aa602a1c15f181156cc668e5e6acf1ec",
        label: "Citrus Tossed Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 4.0,
        ingredientLines: [
          "1 teaspoon cornstarch",
          "1/4 cup orange juice",
          "1/4 cup grapefruit juice",
          "2 tablespoons cider vinegar",
          "2 tablespoons orange marmalade",
          "1 teaspoon Dijon mustard",
          "1/2 teaspoon grated orange peel",
          "1/8 teaspoon garlic powder",
          "1/8 teaspoon onion powder",
          "8 cups torn leaf lettuce",
          "1 medium grapefruit, peeled and sectioned",
          "1 medium navel orange, peeled and sectioned",
        ],
        calories: 376.75612500127,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/aa602a1c15f181156cc668e5e6acf1ec",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_070fdcbda27113d5c82f853ccb2e14d1",
        label: "Blackberry-Cantaloupe Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Martha Stewart",
        yield: 4.0,
        ingredientLines: [
          "2 cups blackberries",
          "1/2 cantaloupe, cut into 1-inch pieces",
          "1 tablespoon sugar",
          "1 teaspoon grated peeled fresh ginger",
          "1/2 teaspoon grated lime zest plus 1 tablespoon juice",
          "2 tablespoons thinly sliced fresh mint leaves",
        ],
        calories: 283.6223333333334,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/070fdcbda27113d5c82f853ccb2e14d1",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_0c9482e2710f4bad8a706008aad1c17c",
        label: "Minted Strawberry Melon Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Food52",
        yield: 6.0,
        ingredientLines: [
          "4 cups whole strawberries",
          "4 cups cubed cantaloupe",
          "1 1/2 tablespoons chopped fresh mint",
        ],
        calories: 405.682,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/0c9482e2710f4bad8a706008aad1c17c",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8a0b1e87d2874b6c9c04b70d71c3a549",
        label: "Mango, Mint, and Pea Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Honest Cooking",
        yield: 4.0,
        ingredientLines: [
          "8 oz fresh green peas, such as Sugar Snaps, English Peas or even Snow Peas",
          "10 oz shelled peas (If using frozen, just thaw them according to package directions)",
          "2-4 T fresh chopped mint",
          "A couple big handfuls of watercress (optional)",
          "1 Mango, sliced",
          "½ c chopped red onion",
        ],
        calories: 561.9285350126272,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/8a0b1e87d2874b6c9c04b70d71c3a549",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_e37a3c7422c7626eb09202d9ac58035a",
        label: "Quick and Easy Bean Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Epicurious",
        yield: 2.0,
        ingredientLines: [
          "1 1/2 cups cooked or 1 (15-ounce) can low-sodium or no-salt-added cannellini beans or other white beans, drained",
          "1/2 small red onion, chopped",
          "1 tomato, chopped",
          "1/2 cup chopped parsley",
          "1 tablespoon balsamic vinegar",
          "1 teaspoon no-salt seasoning blend, adjusted to taste",
        ],
        calories: 1074.615,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/e37a3c7422c7626eb09202d9ac58035a",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_f5c2a10e9bb74c978b2a4e4990673ea4",
        label: "Xie Xie's Tofu Salad with Pickled Vegetables",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Food & Wine",
        yield: 6.0,
        ingredientLines: [
          "2 tablespoons rice vinegar",
          "2 tablespoons sugar",
          "1/2 teaspoon kosher salt",
          "1 pound red cabbage, finely shredded (4 cups)",
        ],
        calories: 188.91400000000002,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/f5c2a10e9bb74c978b2a4e4990673ea4",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_7d87084868b8d220abf1f062821a275c",
        label: "Layered Tropical Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Martha Stewart",
        yield: 8.0,
        ingredientLines: [
          "1 pineapple (about 5 pounds), peeled, cored, and cut crosswise into thin slices",
          "1 papaya (about 1 pound), peeled, halved lengthwise, seeded, and cut crosswise into thin slices",
          "1 star fruit, cut crosswise into thin slices",
          "2 tablespoons sugar",
          "1/2 cup fresh lime juice, plus 3 tablespoons grated lime zest strips, for garnish (4 to 6 limes total)",
          "Light rum (optional)",
        ],
        calories: 846.7779975923816,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/7d87084868b8d220abf1f062821a275c",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_d2d14294105a68e5e175c11470a4e841",
        label: "PointsPlus Marinated Cucumber and Melon Salad Recipe",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "The Daily Meal",
        yield: 8.0,
        ingredientLines: [
          "1 medium English cucumber, thinly sliced",
          "1 ½ cup radishes, thinly sliced",
          "¼ medium honeydew melon, cut into slices",
          "½ cup mint leaves, fresh, cut into thin ribbons",
          "¼ cup fresh lemon juice",
          "1 tablespoon sugar",
        ],
        calories: 260.899,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/d2d14294105a68e5e175c11470a4e841",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_274e09368699f8a19e7b3955c0913006",
        label: "Winter Fruit Salad in Ginger-Lime Syrup",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Delish",
        yield: 6.0,
        ingredientLines: [
          "¼ c. pure maple syrup",
          "1 tbsp. water",
          "1 piece of fresh ginger",
          "2 tbsp. fresh lime juice",
          "3 clementines or mandarins",
          "2 blood oranges",
          "1 grapefruit",
          "1 Fuyu persimmon",
          "1 Asian pear",
          "1 red pear",
          "1 c. pomegranate seeds",
          "2 tbsp. mint",
          "hemp seeds",
        ],
        calories: 923.5426666665363,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/274e09368699f8a19e7b3955c0913006",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_c35a3aaf9f711b8ab4777fa4b99168f1",
        label: "Peach and Crab Salad With Mesclun and Herbs",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Martha Stewart",
        yield: 4.0,
        ingredientLines: [
          "1/2 cup fresh orange juice (from 2 oranges)",
          "1/2 cup sugar",
          "3 tablespoons coarsely ground coriander",
          "1/2 cup fresh lime juice (from 4 limes)",
        ],
        calories: 517.75,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/c35a3aaf9f711b8ab4777fa4b99168f1",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_dbc955c59d33cbd56429fbd94c8fe7f3",
        label: "Citrus Fruit Cups",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "EatingWell",
        yield: 14.0,
        ingredientLines: [
          "4 pink grapefruit",
          "3 oranges",
          "3 tangerines",
          "2 cups strawberries",
          "1 cup blueberries",
          "2 kiwifruits, peeled and quartered",
          "2 limes",
          "1 sprig Fresh mint sprigs",
          "2 Lime wedges",
        ],
        calories: 954.912,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/dbc955c59d33cbd56429fbd94c8fe7f3",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_b818feb562224918a8211b66862e737b",
        label: "Quick Pickled Rhubarb",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "EatingWell",
        yield: 16.0,
        ingredientLines: [
          "1 teaspoon juniper berries",
          "1 teaspoon allspice berries",
          "1 teaspoon coriander seeds",
          "½ teaspoon whole black peppercorns",
          "2 chiles de arbol or other dried small red chiles",
          "1 shallot, halved",
          "2 small bay leaves",
          "2 star anise",
          "1 cup rice vinegar",
          "1 cup water",
          "½ cup plus 1 tablespoon sugar",
          "1 teaspoon kosher salt",
          "1 ¼ pounds trimmed fresh rhubarb stalks",
        ],
        calories: 683.057497125,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/b818feb562224918a8211b66862e737b",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_0f0ca6019c3104c1a67470b909bce4d4",
        label: "Sparkling fruit punch",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "taste.com.au",
        yield: 12.0,
        ingredientLines: [
          "3 oranges",
          "825g can fruit salad in juice",
          "1/4 cup torn fresh mint leaves",
          "1 litre orange juice, chilled",
          "2 x 750ml bottles sparkling apple juice, chilled",
          "Ice cubes, to serve",
        ],
        calories: 1637.2295622831316,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/0f0ca6019c3104c1a67470b909bce4d4",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_c4f43103ab647914e33515ba6584011b",
        label: "Salad Salsa",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "BigOven",
        yield: 4.0,
        ingredientLines: [
          "2 green chilli peppers",
          "8 small sweet tomatoes",
          "4 spring onions",
          "1/3 cup red onion",
          "1/2 cup red/green/yellow bell pepper",
          "3 tablespoons chunky salsa dip",
        ],
        calories: 280.31111111111113,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/c4f43103ab647914e33515ba6584011b",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_66354b08a61b7ea4c8442d2eb6975112",
        label: 'Tropical Green "Juice"',
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "recipes.sparkpeople.com",
        yield: 3.0,
        ingredientLines: [
          "6 cups fresh spinach",
          "2 cups fresh kale (stems removed)",
          "1 can of Dole Tropical Fruit Salad (or any canned pineapple and/or passion fruit)",
          "1 bag of frozen mango chunks",
          "3 heaping Tbsp of psyllium husk",
        ],
        calories: 874.6124999863054,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/66354b08a61b7ea4c8442d2eb6975112",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8f556d95be42f1aeb06fe4de4cb984f2",
        label: "Broccoli Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "McCormick",
        yield: 6.0,
        ingredientLines: [
          "8 cups water",
          "4 cups broccoli florets",
          "3 tablespoons Lawry's® Teriyaki Marinade with Pineapple Juice",
          "3 tablespoons orange juice",
          "1/4 teaspoon McCormick® Red Pepper, Crushed",
          "1/2 cup shredded carrot",
        ],
        calories: 150.5402708325691,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/8f556d95be42f1aeb06fe4de4cb984f2",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3fd4804477c46599b89a106619675f4b",
        label: "Juicy Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 6.0,
        ingredientLines: [
          "1 (15 ounce) can pineapple chunks with juice",
          "1 apple - peeled, cored and diced",
          "1 orange - peeled, diced and juice reserved",
          "1 banana, sliced",
          "1 cup seedless green grapes, halved",
        ],
        calories: 575.9944234375,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/3fd4804477c46599b89a106619675f4b",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_85a634cdb4900e4cd9a7dc0c9208809f",
        label: "Rum Flavored Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "McCormick",
        yield: 12.0,
        ingredientLines: [
          "6 cups fresh fruit, such as grapes, melon, berries and kiwi",
          "1/4 cup confectioners' sugar",
          "1 tablespoon McCormick® Imitation Rum Extract",
        ],
        calories: 807.6089999994572,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/85a634cdb4900e4cd9a7dc0c9208809f",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_e7eb7cc5b4721262190c32f06cadd705",
        label: "Tropical Island Fruit Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 14.0,
        ingredientLines: [
          "1 pineapple - peeled, cored, and cut into 1/2-inch cubes",
          "2 mangos - peeled, pitted, and cut into small cubes",
          "2 papayas - halved lengthwise, seeded, peeled, and cut into 1/2-inch cubes",
          "3 bananas, sliced",
        ],
        calories: 1523.2963333333332,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/e7eb7cc5b4721262190c32f06cadd705",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_c3d25af55297fd106dcbbd89a76800de",
        label: "Mom's Carrot and Raisin Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 4.0,
        ingredientLines: [
          "1 (16 ounce) package carrots, peeled and shredded",
          "3 tablespoons orange juice",
          "1/3 cup raisins",
        ],
        calories: 351.41453836631285,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/c3d25af55297fd106dcbbd89a76800de",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_aa602a1c15f181156cc668e5e6acf1ec",
        label: "Citrus Tossed Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Allrecipes",
        yield: 4.0,
        ingredientLines: [
          "1 teaspoon cornstarch",
          "1/4 cup orange juice",
          "1/4 cup grapefruit juice",
          "2 tablespoons cider vinegar",
          "2 tablespoons orange marmalade",
          "1 teaspoon Dijon mustard",
          "1/2 teaspoon grated orange peel",
          "1/8 teaspoon garlic powder",
          "1/8 teaspoon onion powder",
          "8 cups torn leaf lettuce",
          "1 medium grapefruit, peeled and sectioned",
          "1 medium navel orange, peeled and sectioned",
        ],
        calories: 376.75612500127,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/aa602a1c15f181156cc668e5e6acf1ec",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_070fdcbda27113d5c82f853ccb2e14d1",
        label: "Blackberry-Cantaloupe Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Martha Stewart",
        yield: 4.0,
        ingredientLines: [
          "2 cups blackberries",
          "1/2 cantaloupe, cut into 1-inch pieces",
          "1 tablespoon sugar",
          "1 teaspoon grated peeled fresh ginger",
          "1/2 teaspoon grated lime zest plus 1 tablespoon juice",
          "2 tablespoons thinly sliced fresh mint leaves",
        ],
        calories: 283.6223333333334,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/070fdcbda27113d5c82f853ccb2e14d1",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_0c9482e2710f4bad8a706008aad1c17c",
        label: "Minted Strawberry Melon Salad",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        source: "Food52",
        yield: 6.0,
        ingredientLines: [
          "4 cups whole strawberries",
          "4 cups cubed cantaloupe",
          "1 1/2 tablespoons chopped fresh mint",
        ],
        calories: 405.682,
      },
      bookmarked: false,
      bought: false,
      _links: {
        self: {
          href: "https://www.edamam.com/api/recipes/v2/0c9482e2710f4bad8a706008aad1c17c",
          title: "Self",
        },
      },
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-3 justify-content-center">
        <div className="row">
          <div className="col-md-6 mb-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control rounded-5"
            />
          </div>
          <div className="col-md-6 mb-5">
            <button
              onClick={generateRecipe}
              className="btn btn-success justify-content-center rounded-5 px-4 bg-dark border-0"
            >
              Generate Recipe
            </button>
          </div>
        </div>

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
