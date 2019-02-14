import { Component, OnInit } from '@angular/core';
import {HttpService} from "../shared/services/http.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  saveRecipesToDB() {
    this.http.saveRecipes();
  }

  fetchData() {
    this.http.fetchRecipes();
  }
}
