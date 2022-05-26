import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  urlApi = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  geteventos(){
    return this.http.get(`${this.urlApi}/Eventos`);
    }
    saveeventos(evento){
      return this.http.post(`${this.urlApi}/evento`, evento);
  
    }
}
