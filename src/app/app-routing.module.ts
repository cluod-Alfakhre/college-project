import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from './auth/guards/is-auth.guard';
import { NotAuthGuard } from './auth/guards/not-auth.guard';
import { LoginComponent } from './modules/login/components/login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate: [
      NotAuthGuard
    ]
  },
  {
    path: 'student',
    loadChildren: ()=> import('./modules/student/student.module').then( m => m.StudentModule ),
    canMatch:[IsAuthGuard]
  },
  {
    path: 'admin',
    loadChildren: ()=> import('./modules/admin/admin.module').then( m => m.AdminModule ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
