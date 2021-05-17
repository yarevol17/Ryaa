import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userListener = new BehaviorSubject<any>(null);

  public static user: any;

  public readonly user$ = this.userListener.asObservable()

  constructor(private afAuth: AngularFireAuth) {}
  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
    // return firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
  }
  signout() {
    return this.afAuth.signOut();
  }
  doEmailLogin(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  getUser() {
    return this.userListener.getValue()
  }
  getUserEmail() {
    return AuthService.user.email;
  }

  resolveUser() {
    this.afAuth.authState.subscribe((user) => {
      AuthService.user = user;
      this.userListener.next(user);
    });
  }
}
