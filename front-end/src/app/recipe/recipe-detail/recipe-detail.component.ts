import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../shared/model/recipe.model";
import {RecipeService} from "../../shared/services/recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AddIngredients} from "../../shopping-list/store/shopping-list.actions";
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeReceived: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private store: Store<fromShoppingList.AppState>) { }

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
    // this.recipeService.addIngredientsToShoppingList(this.recipeReceived.ingredients)
    this.store.dispatch(new AddIngredients(this.recipeReceived.ingredients))
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipe']);
  }
}
