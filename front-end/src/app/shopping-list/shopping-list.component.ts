import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/model/ingredient.model";
import {ShoppingListService} from "../shared/services/shoppingList.service";
import {Observable, Subject, Subscription} from "rxjs";
import { Store } from "@ngrx/store";
import {AddIngredient} from "./store/shopping-list.actions";
import * as fromShoppingList from './store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // private shoppingListState: Ingredient[];
  private shoppingListState: Observable<{ingredients: Ingredient[]}>;
  // private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService, private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    // this.shoppingListState = this.shoppingListService.getIngredients();
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription = this.shoppingListService.ingredientsChanged
    //   .subscribe(
    //     (shoppingListState: Ingredient[]) => {
    //       this.shoppingListState = shoppingListState;
    //     }
    //   )

  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  addIngredient($event: Ingredient) {
    // this.shoppingListState.push($event)
    // this.store.dispatch(new AddIngredient)
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
