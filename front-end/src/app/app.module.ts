import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from "./shared/services/recipe.service";
import { ShoppingListService } from "./shared/services/shoppingList.service";
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";
import { HttpService } from "./shared/services/http.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./shared/interceptors/auth.interceptor";
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthService } from "./shared/services/auth.service";
import { RecipeModule } from "./recipe/recipe.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ErrorPageComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    RecipeModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [RecipeService,
              ShoppingListService,
              HttpService,
              AuthService,
              {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
