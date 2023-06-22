import { Component, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isOpened = false;
  @ViewChild('switchTheme') themeBtn:any;

  constructor(
    private renderer:Renderer2,
    private router: Router
  ){}

  ngAfterViewInit(){

    if(localStorage.getItem('theme') == 'dark') this.themeBtn.nativeElement.checked = true
    
    if(this.themeBtn.nativeElement.checked) {
      this.renderer.addClass(document.body, 'dark')
    }else{
      this.renderer.removeClass(document.body, 'dark')
    }

  }

  toggleSideNav(){
    this.isOpened = !this.isOpened
  }

  toggleTheme(input:HTMLInputElement){

    if(input.checked) {
      this.renderer.addClass(document.body, 'dark')

      localStorage.setItem('theme', 'dark')
    }else{
      this.renderer.removeClass(document.body, 'dark')
      localStorage.setItem('theme', 'light')
    }

  }

  logout(){
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    
    this.router.navigate(['/login']).then(()=>{

      window.location.reload();

    })

  }
}
