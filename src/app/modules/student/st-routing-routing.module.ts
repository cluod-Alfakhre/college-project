import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSubjectsComponent } from './components/all-subjects/all-subjects.component';
import { AllowedSubjectsComponent } from './components/allowed-subjects/allowed-subjects.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StProfileComponent } from './components/profile/st-profile.component';
import { ScheduleSubjectsComponent } from './components/schedule-subjects/schedule-subjects.component';
import { StMainComponent } from './components/st-main/st-main.component';

const routes: Routes = [
  {
    path:'',
    component: StMainComponent,
    children: [
      {
        path:'',
        redirectTo:'profile',
        pathMatch:'full'
      },
      {
        path:'profile',
        component:StProfileComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'all-subjects',
        component:AllSubjectsComponent
      },
      {
        path:'allowed-subjects',
        component:AllowedSubjectsComponent
      },
      {
        path:'schedule-subjects',
        component:ScheduleSubjectsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StRoutingRoutingModule { }
