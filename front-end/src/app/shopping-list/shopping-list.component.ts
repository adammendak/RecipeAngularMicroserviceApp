import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/model/ingredient.model";
import {ShoppingListService} from "../shared/services/shoppingList.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



  addIngredient($event: Ingredient) {
    this.ingredients.push($event)
  }
}
