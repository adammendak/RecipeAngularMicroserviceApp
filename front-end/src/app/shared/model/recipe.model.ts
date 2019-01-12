import {Ingredient} from "./ingredient.model";

export class Recipe {
  constructor(public name: String, public description: String, public imgPath: String, public ingredients: Ingredient[]) {}
}
