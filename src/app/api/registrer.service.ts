import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrerService {
  urlApi = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  registar(Name: string, email: string, senha: string){
    return this.http.post(`${this.urlApi}/auth/register`, { name: name, email: email, senha: senha });
  }
}
