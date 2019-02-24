import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/model/ingredient.model";
import {ShoppingListService} from "../../shared/services/shoppingList.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('addForm')
  editForm: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  // @ViewChild('nameInput')
  // nameInput: ElementRef;
  //
  // @ViewChild('amountInput')
  // amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService, private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        let temp = this.store.select('ingredients').subscribe();
        this.editedItem = temp[index];
        this.editForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if(!this.editMode) {
      // this.shoppingListService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient))
    } else {
      // this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({index: this.editedItemIndex,
        newIngredient: newIngredient}))
    }
    this.resetForm(form)
    // event.preventDefault()
    // this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value))
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.editMode = false;
  }

  deleteIngredient(index: any, form: NgForm) {
    // this.shoppingListService.deleteIngredient(index);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient({index: this.editedItemIndex}));
    this.resetForm(form);
  }
}
