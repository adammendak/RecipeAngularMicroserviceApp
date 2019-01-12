import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "../model/recipe.model";
import {Ingredient} from "../model/ingredient.model";
import {ShoppingListService} from "./shoppingList.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe("schabowy", "kotlet jak nic",
      "https://static.smaker.pl/photos/f/8/3/f83c3e62c2a4e8ac6c400a7561fcd259_110705_57b32d412bf06_wm.jpg",
      [new Ingredient("jajko", 12), new Ingredient("bułka", 5)]),
    new Recipe("kolejny schab", "kotlet jak nic",
      "https://static.smaker.pl/photos/f/8/3/f83c3e62c2a4e8ac6c400a7561fcd259_110705_57b32d412bf06_wm.jpg",
      [new Ingredient("jajko", 12), new Ingredient("bułka", 5)])
  ];

  public getRecipes() {
    return this.recipes.slice();
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
