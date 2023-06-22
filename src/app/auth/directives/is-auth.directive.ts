import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appIsAuth]'
})
export class IsAuthDirective {

  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) { }

  
  ngOnInit(){

    this.isAuth()
    .then((result:any)=>{
      

      if(result) {
        this.viewContainer.createEmbeddedView(this.templateRef)
      }
      else{
        this.viewContainer.clear()
      }

    })

  }

  
  async isAuth(){

    return await this.authService.isAuth()

  }

}

