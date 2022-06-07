import { Component, OnInit } from '@angular/core';
import { LoginService } from '../api/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logins = {
    id:'',
    Name: '',
    email: '',
    password: '',
  };
  logar:any = []

  constructor(private loginsservice: LoginService,) { }

  ngOnInit() {
  }

  logars(Name: string, password: string){
     this.loginsservice.login(this.logins.Name,this.logins.password).subscribe(res => {
  
     })
  }
}
