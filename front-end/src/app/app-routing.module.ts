import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipe', loadChildren: './recipe/recipe.module#RecipeModule'},
  {path: '404', component:ErrorPageComponent},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
