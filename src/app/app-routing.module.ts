import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { SubunoComponent } from './subuno/subuno.component';
import { SubdosComponent } from './subdos/subdos.component';
import { SubtresComponent } from './subtres/subtres.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmperadorGuard } from './auth/emperador.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: UnoComponent
  },
  {
    path: 'dos',
    component: DosComponent
  },
  {
    path: 'subuno',
    component: SubunoComponent
  },
  {
    path: 'subdos',
    component: SubdosComponent
  },
  {
    path: 'subtres',
    component: SubtresComponent
  },
  {
    path: 'enlace1',
    component: UnoComponent,
    canActivate: [EmperadorGuard]
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
