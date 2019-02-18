import { NgModule} from "@angular/core";
import { SignUpComponent} from "./sign-up/sign-up.component";
import { SignInComponent} from "./sign-in/sign-in.component";
import { SharedModule} from "../shared/shared.module";
import { AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  providers: [
  ]
})
export class AuthModule { }
