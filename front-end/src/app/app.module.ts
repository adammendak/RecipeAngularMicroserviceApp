import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { ShoppingModule } from "./shopping-list/shopping.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";
import { StoreModule } from "@ngrx/store";
import {shoppingListReducer} from "./shopping-list/store/shopping-list.reducers";

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    ShoppingModule,
    BrowserModule,
    AuthModule,
    SharedModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
