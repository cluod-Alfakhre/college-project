import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/global.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private global:GlobalService,
    private http:HttpClient,

  ) { }

  login(userId: string| number, password:string){

    return this.http.post(this.global.baseUrl + '/auth/login', {
      collegeId:userId,
      password
    })
    
  }
}
