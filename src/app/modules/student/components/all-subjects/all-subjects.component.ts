import { Component, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styleUrls: ['./all-subjects.component.scss']
})
export class AllSubjectsComponent {

  allSubjects:any[] = [];

  @Output() onUpdate = new EventEmitter()


  constructor(
    private studentService:StudentService
  ){}

  ngOnInit(){

    this.studentService.getAllSubs()
    .subscribe((res:any)=>{
      this.allSubjects = res.allSubs
    })

  }

  updateComponent(){

    this.ngOnInit()

    this.onUpdate.emit()
       
  }
  
}
