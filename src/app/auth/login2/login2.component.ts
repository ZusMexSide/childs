import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  data: any = {};
  claseBootstrap: string;
  message: string;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.data);
    this.message = 'Trying to validate';
    this.claseBootstrap = 'alert alert-success';
    this.auth.login2(this.data).
    subscribe(() => {
      if (this.auth.isLoggedIn) {
        const redirect = this.auth.redirectUrl ? this.router.parseUrl(this.auth.redirectUrl) : '/admin';
        this.router.navigateByUrl(redirect);
      } else {
        this.message = 'Trying to validate';
        this.claseBootstrap = 'alert alert-danger';
      }
    });
  }

}
