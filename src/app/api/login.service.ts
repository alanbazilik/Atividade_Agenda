import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlApi = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  login(Name: string,password: string){
    return this.http.post(`${this.urlApi}/auth/login`, {Name: name, password: password });
  }

 
}
