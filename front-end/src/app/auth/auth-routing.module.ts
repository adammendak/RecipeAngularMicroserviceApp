import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { NgModule } from "@angular/core";

const authRoutes: Routes = [
  {path: 'signUp', component: SignUpComponent},
  {path: 'signIn', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
