import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-st-main',
  templateUrl: './st-main.component.html',
  styleUrls: ['./st-main.component.scss']
})
export class StMainComponent {

  student:any;

  constructor(
    private globalService:GlobalService
  ){}

  ngOnInit(){
    this.student = this.globalService.theUser
  }

  
}
