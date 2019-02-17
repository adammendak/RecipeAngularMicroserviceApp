import { Component, OnInit } from '@angular/core';
import {HttpService} from "../shared/services/http.service";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpService, private  auth: AuthService) { }

  ngOnInit() {
  }

  saveRecipesToDB() {
    this.http.saveRecipes();
  }

  fetchData() {
    this.http.fetchRecipes();
  }

  logOut() {
    this.auth.logOut()
  }
}
