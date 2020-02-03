import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(private auth: AuthService, private router: Router) {
    this.setMessage();
   }

  setMessage() {
    this.message = 'Logged' + (this.auth.isLoggedIn ? ' in' : ' out');
  }

  login() {
    this.message = 'Trying to validate';
    this.auth.login().
    subscribe(() => {
      this.setMessage();
      if (this.auth.isLoggedIn) {
        let redirect = this.auth.redirectUrl ? this.router.parseUrl(this.auth.redirectUrl) : '/admin';
        this.router.navigateByUrl(redirect);
      }
    });
  }

  logout() {
    this.auth.logout();
    this.setMessage();
  }

  ngOnInit() {
  }

}
