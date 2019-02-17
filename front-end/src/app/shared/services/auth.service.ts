import {Injectable} from "@angular/core";
import * as firebase from "firebase";

@Injectable()
export class AuthService {


  constructor() {}

  signUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  getToken() {
    return firebase.auth().currentUser.getIdToken()
      .then(result => {
        return result;
      })
      .catch(error => console.log(error));
  }

  isAuthenticated() {
    return firebase.auth().currentUser != null;
  }

  logOut() {
    firebase.auth().signOut();
  }
}
