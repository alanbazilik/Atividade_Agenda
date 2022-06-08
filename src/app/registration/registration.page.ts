import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RegistrerService } from '../api/registrer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  logins = {
    id:'',
    Name: '',
    email: '',
    password: '',
  };
  logar:any = []

  constructor(private Registerservice: RegistrerService) { }

  ngOnInit() {
  }
  cradastrar(Name: string, email: string ,senha: string){
    this.Registerservice.registar(this.logins.Name,this.logins.email,this.logins.password).subscribe(res => {
 
    })
 }
}
