import { Component, Output, EventEmitter } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-schedule-subjects',
  templateUrl: './schedule-subjects.component.html',
  styleUrls: ['./schedule-subjects.component.scss']
})
export class ScheduleSubjectsComponent {

  subsArray:any[] = [];

  @Output() onUpdate = new EventEmitter()


  constructor(
    private globalService:GlobalService,
    private studentServie:StudentService,
  ){}

  
  ngOnInit(){
    const collegeId = this.globalService.theUser.collegeId

    this.studentServie.getStudent(collegeId).subscribe((res:any)=>{      

      this.subsArray = [];

      res.student.subjects.forEach((item:any) => {
        
        item.sub.status = item.status

        this.subsArray.push(item.sub)

      });

      this.subsArray = this.subsArray.filter((item:any) => {
        return item.status != 'passed'
      });

    })

  }

  updateComponent(){

    this.ngOnInit()

    this.onUpdate.emit()
   
  }

}
