import {RouterModule, Routes} from "@angular/router";
import {RecipeComponent} from "./recipe.component";
import {RecipeHomeComponent} from "./recipe-home/recipe-home.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {NgModule} from "@angular/core";

const recipeRoutes: Routes = [
  {path: 'recipe', component: RecipeComponent, children:[
      {path: '', component: RecipeHomeComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
