import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {
  data: any = {};
  constructor(private auht: AuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.auht.createNewAccount(this.data.email, this.data.password).finally(() => {
      this.auht.loginFirebase(this.data.email, this.data.password);
    });
  }
}
