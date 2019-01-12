import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../shared/model/recipe.model";
import {RecipeService} from "../../shared/services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeReceived: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeReceived.ingredients)
  }
}
