import axios from "axios";

const BACKEND_URL = "https://plantbasedking-e175d-default-rtdb.firebaseio.com/";

// export async function storeRecipe(recipeData) {
export async function storeRecipe() {
  console.log("within storeRecipe function", BACKEND_URL + "recipes.json");
  const data = { name: "Paul" };
  const response = await axios.post(BACKEND_URL + "recipes.json", data);
}
