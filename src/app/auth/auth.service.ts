import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data: any;
  isLoggedIn = false;
  redirectUrl: string;
  password = '2511';
  email = 'jedahymc@gmail.com';
  dataUser: any;
  user: any;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.data = this.cargarData();
        this.dataUser = JSON.parse(this.data);
      } else {
        localStorage.setItem('user', null);
      }
    });
   }
   async loginFirebase(email: any, password: any) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/admin'])
      this.isLoggedIn = true;
    } catch (e) {
      alert(e.message);
    }
  }
  async createUserWithFirebase(email: any, password: any) {
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.router.navigate(['/admin'])
      this.isLoggedIn = true;
    } catch (e) {
      alert(e.message);
    }
  }
  async loginWithInstance(instance) {
    try {
      await this.afAuth.auth.signInWithPopup(instance).then((res) => {
        console.log('You´re logged in ' + JSON.stringify(res));
        this.router.navigate(['/admin'])
        this.isLoggedIn = true;
      });
    } catch (error) {
      console.log(error);
    }
  }
  loginWithFacebook() {
    let provider = new auth.FacebookAuthProvider();
    this.loginWithInstance(provider);
  }
  loginWithGoogle() {
    let provider = new auth.GoogleAuthProvider();
    this.loginWithInstance(provider);
  }
  loginWithGitHub() {
    let provider = new auth.GithubAuthProvider();
    this.loginWithInstance(provider);
  }
  loginWithTwitter() {
    let provider = new auth.TwitterAuthProvider();
    this.loginWithInstance(provider);
  }

  createNewAccount(email, password): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  cargarData() {
    this.data = localStorage.getItem('user');
    return this.data;
  }
  async logOutFirebase() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.isLoggedIn = false;
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }
  login2(data): Observable<boolean> {
    if (data.email === this.email && data.password === this.password) {
      return of(true).pipe(
        delay(1000),
        tap(val => this.isLoggedIn = true)
      );
    } else {
      return of(false);
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
