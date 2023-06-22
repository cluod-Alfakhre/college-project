import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { SharedModule } from '../shared/shared.module';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { MaterialModule } from '../material/material.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    AdminMainComponent,
    AdminProfileComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class AdminModule { }
