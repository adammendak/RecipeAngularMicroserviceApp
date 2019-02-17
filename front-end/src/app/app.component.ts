import {Component, OnInit} from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'front-end';

  config = {
    apiKey: "AIzaSyA7_XqUsouR6a_ISdJVTZIVtVBbvh9tUXQ",
    authDomain: "ng-recipe-book-34846.firebaseapp.com",
    databaseURL: "https://ng-recipe-book-34846.firebaseio.com",
    projectId: "ng-recipe-book-34846",
    storageBucket: "ng-recipe-book-34846.appspot.com",
    messagingSenderId: "823577872571"
  };

  ngOnInit(): void {
    firebase.initializeApp(this.config);
  }
}
