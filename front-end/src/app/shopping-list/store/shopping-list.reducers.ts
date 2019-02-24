import * as ShoppingListActions from '../store/shopping-list.actions';
import { Ingredient } from "../../shared/model/ingredient.model";

export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex : number;
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10)
  ],
  editedIngredient: null,
  editedIngredientIndex: null
};

export function shoppingListReducer(state = initialState, action) {

  switch (action.type) {

    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload] //poniewaz dodalismy do typu action pole payload mozemy teraz uzyc
      };

    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };

    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.newIngredient
      };

      const ingredients = [...state.ingredients];
      ingredient[action.payload.index] = updatedIngredient;

      return {
        ...state,
        ingredients: ingredients
      };

    case ShoppingListActions.DELETE_INGREDIENT:
      let oldIngredients = state.ingredients;
      console.log(action.payload);
      oldIngredients = state.ingredients.slice(action.payload, 1);

      return {
        ...state,
        ingredients: oldIngredients
      };

    default:
      return state;
  }

}
