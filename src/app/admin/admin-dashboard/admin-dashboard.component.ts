import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  texto: any;
  json: any;
  constructor(private authS: AuthService) { }

  ngOnInit() {
    this.cargarUsuario();
  }
   cargarUsuario() {
    this.texto = this.authS.cargarData();
    this.json = JSON.parse(this.texto);
  }
}
