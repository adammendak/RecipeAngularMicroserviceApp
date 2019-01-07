import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../shared/model/recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeReceived: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
