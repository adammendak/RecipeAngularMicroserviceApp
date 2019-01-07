import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/model/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')
  nameInput: ElementRef;

  @ViewChild('amountInput')
  amountInput: ElementRef;

  @Output() ingredientAdder = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    event.preventDefault()
    this.ingredientAdder.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }
}
