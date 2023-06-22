import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanMatch {

  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  async canMatch(
    route: Route,
    segments: UrlSegment[]): Promise<boolean | UrlTree>  {

    const isAuth = await this.authService.isAuth()


    if(isAuth) return true

    this.router.navigate(['/login'])
    return false;
    
  }
}
