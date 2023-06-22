import { Component, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  @ViewChildren('component') myComponents!:QueryList<any>;

  updateComponents(){

    this.myComponents.forEach((comp)=>{
      comp.ngOnInit()
    })

  }

}
