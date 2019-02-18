import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { ShoppingModule } from "./shopping-list/shopping.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";

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
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
