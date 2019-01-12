import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../model/ingredient.model";

@Injectable()
export class ShoppingListService {

  public ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomato', 10)];

  public getIngredients() {
    return this.ingredients.slice();
  }

  public addIngredient(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  public addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
