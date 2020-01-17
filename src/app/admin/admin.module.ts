import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ContentTwoComponent } from './content-two/content-two.component';
import { ContentOneComponent } from './content-one/content-one.component';


@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent, ContentTwoComponent, ContentOneComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
