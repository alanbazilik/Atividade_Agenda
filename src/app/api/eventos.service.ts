import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  urlApi = " http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  getAgendas(){
    return this.http.get(`${this.urlApi}/Eventos`);
    }
    saveagenda(eventos){
      return this.http.post(`${this.urlApi}/evento`, eventos);
  
    }
}
