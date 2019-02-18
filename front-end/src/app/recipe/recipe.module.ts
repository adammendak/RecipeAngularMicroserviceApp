import { NgModule } from '@angular/core';
import {RecipeComponent} from "./recipe.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipeHomeComponent} from "./recipe-home/recipe-home.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeRoutingModule} from "./recipe-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeHomeComponent,
    RecipeEditComponent,
    RecipeDetailComponent
  ],
  imports: [
    RecipeRoutingModule,
    SharedModule
  ],
  providers: []
})
export class RecipeModule { }
