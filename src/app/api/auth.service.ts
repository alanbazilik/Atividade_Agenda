import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
    register(form) {
      this.AuthService.register(form.value).subscribe((res) => {
        this.router.navigateByUrl('login');
      });
    }
    login(form){
      this.authService.login(form.value).subscribe((res)=>{
        this.router.navigateByUrl('home');
      });
    }
  }
}
