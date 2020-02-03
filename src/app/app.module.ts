import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { SubunoComponent } from './subuno/subuno.component';
import { SubdosComponent } from './subdos/subdos.component';
import { SubtresComponent } from './subtres/subtres.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { Login2Component } from './auth/login2/login2.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
const firebaseConfig = {
  apiKey: "AIzaSyCUgcWvGEPhZCpB6e8ODxPeO40AfX_2y2A",
  authDomain: "emperador-f7b84.firebaseapp.com",
  databaseURL: "https://emperador-f7b84.firebaseio.com",
  projectId: "emperador-f7b84",
  storageBucket: "emperador-f7b84.appspot.com",
  messagingSenderId: "1081732534702",
  appId: "1:1081732534702:web:948c3bfa4a91c7a5db383f"
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UnoComponent,
    DosComponent,
    SubunoComponent,
    SubdosComponent,
    SubtresComponent,
    PageNotFoundComponent,
    LoginComponent,
    Login2Component,
    CrearCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
