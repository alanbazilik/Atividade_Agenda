import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router) { }

  ngOnInit() {
  }

}
