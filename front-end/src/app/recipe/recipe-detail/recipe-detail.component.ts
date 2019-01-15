import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../shared/model/recipe.model";
import {RecipeService} from "../../shared/services/recipe.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeReceived: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipeReceived = this.recipeService.getRecipe(this.id);
        }
      )
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeReceived.ingredients)
  }
}
