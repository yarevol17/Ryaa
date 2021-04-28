import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static user: any;

  constructor(
    private afAuth: AngularFireAuth
  ) { }
  register(email:string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      // return firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(email, password)
  }
  doEmailLogin(email:string, password: string) {
      return this.afAuth
        .signInWithEmailAndPassword(email, password)
  }

  getUser() {
    return AuthService.user
  }

  resolveUser() {
    this.afAuth.authState.subscribe(user => AuthService.user = user
    )
  }

}
