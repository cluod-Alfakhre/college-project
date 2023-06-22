import { Component, Output, EventEmitter} from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-allowed-subjects',
  templateUrl: './allowed-subjects.component.html',
  styleUrls: ['./allowed-subjects.component.scss']
})
export class AllowedSubjectsComponent {

  allowedSubs:any[] =[];

  @Output() onUpdate = new EventEmitter()

  constructor(

    private studentService:StudentService,
    private globalService:GlobalService,
   
  ){}

  ngOnInit(){

    const collegeId = this.globalService.theUser.collegeId

    this.studentService.getAllowedSubjects(collegeId)

    .subscribe((res:any)=>{

      this.allowedSubs = [];

      this.allowedSubs = res.allowedSubs

      this.allowedSubs.forEach( item => item.allowed = true )
            
    })

  }


  updateComponent(){

    this.ngOnInit()

    this.onUpdate.emit()
       
  }

}
