import React from 'react';
import { Text } from 'react-native';
import IngredientItem from './IngredientItem';

function IngredientsList(props) { //could deconstruct
    return <>
    <Text>Ingredients List</Text>
    <IngredientItem />
    </>
}

export default IngredientsList;