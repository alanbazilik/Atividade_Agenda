import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  urlApi = " http://backend-da-agenda.vercel.app";
  constructor(private http: HttpClient) { }

  geteventos(){
    return this.http.get(`${this.urlApi}/Eventos`);
    }
    saveeventos(evento){
      return this.http.post(`${this.urlApi}/evento`, evento);
  
    }
}
