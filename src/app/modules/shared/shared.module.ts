import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { IsAuthDirective } from 'src/app/auth/directives/is-auth.directive';
import { RouterModule } from '@angular/router';

const exportsComponents:any[] = [
  NavbarComponent,
  IsAuthDirective
]

@NgModule({
  declarations: [
    ...exportsComponents
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    ...exportsComponents
  ]
})
export class SharedModule { }
