import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

}
