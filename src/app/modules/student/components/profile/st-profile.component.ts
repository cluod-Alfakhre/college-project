import { Component, Input, OnChanges} from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-st-profile',
  templateUrl: './st-profile.component.html',
  styleUrls: ['./st-profile.component.scss']
})

export class StProfileComponent {
  @Input() student:any;

  subsArray:any[] = [];

  constructor(
    private globalService:GlobalService,
    private studentServie:StudentService
  ){}

  
  ngOnInit(){
    const collegeId = this.globalService.theUser.collegeId

    this.studentServie.getStudent(collegeId).subscribe((res:any)=>{

      this.student = res.student

      this.student.subjects.forEach((item:any) => {
        
        item.sub.status = item.status

        this.subsArray.push(item.sub)

      });

      this.subsArray = this.subsArray.filter((item:any) => {
        return item.status != 'passed'
      });

    })

  }

}
