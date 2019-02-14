import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "./recipe.service";
import {Recipe} from "../model/recipe.model";
import {map} from "rxjs/operators";

@Injectable()
export class HttpService {


  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  saveRecipes() {
    this.http.put('https://ng-recipe-book-34846.firebaseio.com/recipes.json', this.recipeService.getRecipes())
      .subscribe(
        (response: Response) => {
          console.log(response)
        }
      );
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://ng-recipe-book-34846.firebaseio.com/recipes.json')
      .pipe(map(
        (recipes: Recipe[]) => {
          for(let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe((data : Recipe[]) =>{
        this.recipeService.setRecipes(data)
      });
  }
}
