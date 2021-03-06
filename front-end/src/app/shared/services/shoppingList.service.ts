import { Injectable } from "@angular/core";
import { Ingredient } from "../model/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class ShoppingListService {

  public ingredientsChanged = new Subject<Ingredient[]>();

  public startedEditing = new Subject<number>();

  // private ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomato', 10)];

  // public getIngredients() {
  //   return this.ingredients.slice();
  // }

  public getIngredient(index: number) {
    // return this.ingredients[index];
  }

  // public addIngredient(ingredient:Ingredient) {
  //   this.ingredients.push(ingredient);
  //   this.ingredientsChanged.next(this.ingredients.slice());
  // }

  // public addIngredients(ingredients: Ingredient[]) {
  //   this.ingredients.push(...ingredients);
  //   this.ingredientsChanged.next(this.ingredients.slice())
  // }

  public updateIngredient( index: number, newIngredient: Ingredient) {
    // this.ingredients[index] = newIngredient;
    // this.ingredientsChanged.next(this.ingredients.slice())
  }

  public deleteIngredient(index:number) {
    // this.ingredients.splice(index,1);
    // this.ingredientsChanged.next(this.ingredients.slice())
  }
}
