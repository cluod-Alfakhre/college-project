import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'



const exportsArray:any[] =[
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...exportsArray
  ],
  exports: [
    ...exportsArray
  ]
})
export class MaterialModule { }
