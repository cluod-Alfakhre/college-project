import { Component, Input, Output, EventEmitter, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GlobalService } from 'src/app/global.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-st-table',
  templateUrl: './st-table.component.html',
  styleUrls: ['./st-table.component.scss']
})
export class StTableComponent {

  @Input() title!:string;
  @Input() subsArray!:any[];

  @Output() onUpdate = new EventEmitter();

  @ViewChildren('dataRow') dataRows!:QueryList<any>;

  stId:any;
  collegeId:any;
  populate:boolean = true;

  constructor(

    private studentService:StudentService,
    private globalService:GlobalService,
    private renderer:Renderer2

  ){}

  async ngOnInit(){
    
    this.stId = this.globalService.theUser._id;
    this.collegeId = this.globalService.theUser.collegeId;
    
    this.subsArray = await this.studentService.populateArray(this.subsArray, this.title)
    
  }

  addSubject(subId:string|number){

    this.studentService.addSubject(this.stId, subId).subscribe((res)=>{

      this.onUpdate.emit('add')
            
    })

  }

  deleteSubject(subId:string|number){

    this.studentService.deleteSubject(this.collegeId, subId).subscribe((res)=>{

      this.onUpdate.emit('delete')
    })

  }


  toggleRow(rowElement:HTMLElement){

    this.dataRows.forEach((el)=>{

      if(el.nativeElement !== rowElement)
      el.nativeElement.classList.remove('active')

    })

    rowElement.classList.toggle('active')

  }

}
