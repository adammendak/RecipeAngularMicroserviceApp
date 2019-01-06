import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../shared/model/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("schabowy", "kotlet jak nic", "https://static.smaker.pl/photos/f/8/3/f83c3e62c2a4e8ac6c400a7561fcd259_110705_57b32d412bf06_wm.jpg"),
    new Recipe("schabowy", "kotlet jak nic", "https://static.smaker.pl/photos/f/8/3/f83c3e62c2a4e8ac6c400a7561fcd259_110705_57b32d412bf06_wm.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
