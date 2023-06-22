import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GlobalService } from 'src/app/global.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private globalService:GlobalService,
    private http: HttpClient
  ) { }


  getStudent(collegeId: string | number){
    return this.http.get( this.globalService.baseUrl + '/student/get_user?collegeid=' + collegeId )
  }

  getAllSubs(){
    return this.http.get( this.globalService.baseUrl + '/subjects/allsubjects')
  }

  getAllowedSubjects(collegeId: string | number){

    return this.http.get( this.globalService.baseUrl + '/student/get_allowed?stid=' + collegeId )

  }

  addSubject(stId:string|number, subId:string|number){
    return this.http.post(

      this.globalService.baseUrl + '/student/add_Subject?id=' + stId ,

      {
        subjectId:subId
      }

    )

  }


  deleteSubject(collegeId:string|number, subId:string|number){
    return this.http.post(

      this.globalService.baseUrl + '/student/delete_Subject' ,

      {
        subjectId:subId,
        studentId:collegeId
      }

    )

  }


  populateSubject(subjectId:string|number){
    return this.http.get( this.globalService.baseUrl + '/student/get_subject?sbid=' + subjectId )
  }

  async populateArray(array:any[], title:string){

    const newSubsArray: any[] = []

    for (let item of array) {

      const sub:any = await lastValueFrom( this.populateSubject(item.collegeId) )

      if(title.includes('allowed')){
        sub.subject.allowed = true
      }

      if(title.includes('schedule')){

        sub.subject.status = item.status

      }

      newSubsArray.push(sub.subject)
      
    }

    return newSubsArray

  }
  
}
