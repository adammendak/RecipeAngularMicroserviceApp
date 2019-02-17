import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "./recipe.service";
import {Recipe} from "../model/recipe.model";
import {map} from "rxjs/operators";
import {AuthService} from "./auth.service";

@Injectable()
export class HttpService {


  constructor(private http: HttpClient, private recipeService: RecipeService, private auth: AuthService) {
  }

  saveRecipes() {
    let auth: string;
    this.auth.getToken()
      .then( resp => {
        auth = <string>resp;
        console.log(auth);

      this.http.put('https://ng-recipe-book-34846.firebaseio.com/recipes.json?auth=' + auth, this.recipeService.getRecipes())
        .subscribe(
          (response: Response) => {
            console.log(response)
          }
        );
      })
      .catch(error => {
        console.log(error);

  });
}

  fetchRecipes() {

    let auth: string;
    this.auth.getToken()
      .then( resp => {
       auth = <string>resp;
       console.log(auth);

        this.http.get<Recipe[]>('https://ng-recipe-book-34846.firebaseio.com/recipes.json?auth=' + auth)
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

      })
      .catch(error => {
        console.log(error);
      });
  }
}
