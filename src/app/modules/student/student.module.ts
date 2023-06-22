import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StMainComponent } from './components/st-main/st-main.component';
import { StRoutingRoutingModule } from './st-routing-routing.module';
import { StProfileComponent } from './components/profile/st-profile.component';
import { StNavComponent } from './components/st-nav/st-nav.component';
import { MaterialModule } from '../material/material.module';
import { StTableComponent } from './components/st-table/st-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllowedSubjectsComponent } from './components/allowed-subjects/allowed-subjects.component';
import { ScheduleSubjectsComponent } from './components/schedule-subjects/schedule-subjects.component';
import { AllSubjectsComponent } from './components/all-subjects/all-subjects.component';



@NgModule({
  declarations: [
    StMainComponent,
    StProfileComponent,
    StNavComponent,
    StTableComponent,
    DashboardComponent,
    AllowedSubjectsComponent,
    ScheduleSubjectsComponent,
    AllSubjectsComponent
  ],
  imports: [
    CommonModule,
    StRoutingRoutingModule,
    MaterialModule
  ]
})
export class StudentModule { }
