import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseUrl:string = 'http://localhost:8000';
  theUser:any = JSON.parse(localStorage.getItem('user')!)

  constructor() { }
}
