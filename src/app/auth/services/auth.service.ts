import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { GlobalService } from 'src/app/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  checkAuth = false;

  constructor(
    private http:HttpClient,
    private global:GlobalService
  ) { }

  async isAuth(admin:boolean = false){
    
    const token = localStorage.getItem('token')!

    const endPoint = admin ? '/isadmin' : '/isauth';

    if(!token) return false

    const $isAuth = this.http.get(this.global.baseUrl + endPoint)
    .pipe(
      map((res:any)=>{

        if(res.massege == 'true') return true

        return false

      })
    )

    const result = await lastValueFrom($isAuth).catch((error:any)=>{//onReject the promise resolve to nothing so its undifinde
      console.log(error)
    })


    return result
  }


}
