import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { SubunoComponent } from './subuno/subuno.component';
import { SubdosComponent } from './subdos/subdos.component';
import { SubtresComponent } from './subtres/subtres.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UnoComponent,
    DosComponent,
    SubunoComponent,
    SubdosComponent,
    SubtresComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
