import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "../model/recipe.model";
import {Ingredient} from "../model/ingredient.model";
import {Subject} from "rxjs";
import {Store} from "@ngrx/store";
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject();

  recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  private recipes: Recipe[] = [
    new Recipe("schabowy", "kotlet jak nic",
      "https://static.smaker.pl/photos/f/8/3/f83c3e62c2a4e8ac6c400a7561fcd259_110705_57b32d412bf06_wm.jpg",
      [new Ingredient("jajko", 12), new Ingredient("bułka", 5)]),
    new Recipe("kolejny schab", "kotlet jak nic",
      "https://static.smaker.pl/photos/f/8/3/f83c3e62c2a4e8ac6c400a7561fcd259_110705_57b32d412bf06_wm.jpg",
      [new Ingredient("jajko", 12), new Ingredient("bułka", 5)])
  ];

  public setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  public getRecipes() {
    return this.recipes.slice();
  }

  public getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients))
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  public updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  public deleteRecipe(index: number) {
    this.recipes.slice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
