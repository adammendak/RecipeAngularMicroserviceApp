import {NgModule} from "@angular/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [

  ],
  imports: [
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  exports: [
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule]
})
export class SharedModule { }
