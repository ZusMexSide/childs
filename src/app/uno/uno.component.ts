import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {
  mostrar: boolean = true;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  cambiarValues() {
    if (this.mostrar === true) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
  }

}
