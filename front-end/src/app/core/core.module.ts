import { NgModule } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { RecipeService } from "../shared/services/recipe.service";
import { ShoppingListService } from "../shared/services/shoppingList.service";
import { HttpService } from "../shared/services/http.service";
import { AuthService } from "../shared/services/auth.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../shared/interceptors/auth.interceptor";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    HttpService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule
  ]

})
export class CoreModule { }
