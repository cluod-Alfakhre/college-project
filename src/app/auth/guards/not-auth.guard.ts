import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/global.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {

  constructor(
    private authService:AuthService,
    private globalService:GlobalService,
    private router:Router
  ){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>  {

    const isAuth = await this.authService.isAuth()

    if(!isAuth) return true

    if(this.globalService.theUser.collegeId.toString()[0] == '1' && this.globalService.theUser.collegeId.toString()[1] == '1'){
      this.router.navigate(['/admin'])

    }else{
      this.router.navigate(['/student'])
    }
    return false;
    
  }
  
}
