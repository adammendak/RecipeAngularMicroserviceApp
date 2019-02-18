import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/model/ingredient.model";
import {ShoppingListService} from "../../shared/services/shoppingList.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

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

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
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

    if(!this.editMode) {
      this.shoppingListService.addIngredient(new Ingredient(value.name, value.amount));
    } else {
      this.shoppingListService.updateIngredient(this.editedItemIndex, new Ingredient(value.name, value.amount))
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
    this.shoppingListService.deleteIngredient(index);
    this.resetForm(form);
  }
}
