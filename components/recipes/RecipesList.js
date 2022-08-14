import React from "react";
import { Text } from "react-native";
import RecipeItem from "./RecipeItem";

function RecipesList(props) {
  //could deconstruct
  return (
    <>
      <Text>Recipes List</Text>
      <RecipeItem />
    </>
  );
}

export default RecipesList;
