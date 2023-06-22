import { Component } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  hidePassword = true;

  loginForm = new FormGroup({

    collegeId: new FormControl('1133',[
      Validators.required,
      Validators.minLength(3)
     ]),

    password: new FormControl('12345',[
      Validators.required,
      Validators.minLength(5)
     ]),

  })

  get collegeId(){
    return this.loginForm.get('collegeId')
  }

  get password(){
    return this.loginForm.get('password')
  }

  constructor(
    private loginService:LoginService,
    private router:Router
  ){}

  login(){
    const collegeId = this.collegeId?.value?.trim()!
    const password = this.password?.value?.trim()!
    
    if(!collegeId && !password) return


    this.loginService.login( collegeId, password)
    .subscribe((user:any)=>{

      localStorage.setItem('token', user['token'])

      localStorage.setItem('user', JSON.stringify(user['user']) )
      
      if( collegeId[0] == '1' && collegeId[1] == '1'){

        this.router.navigate(['/admin']).then(()=>{

          window.location.reload();

        })


      }else{

        this.router.navigate(['/student']).then(()=>{

          window.location.reload();

        })

      }
      
    })

  }

  getControleError(controle:FormControl){
    if(controle.hasError('required')) return 'You must enter a value'
    if(controle.hasError('minlength')) return 'minimum length must be filled'

    return 'Unknown Error'
  }

}
