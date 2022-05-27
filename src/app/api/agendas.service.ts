import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AgendasService {

  urlApi = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  getAgendas(){
    return this.http.get(`${this.urlApi}/Agendas`);
    }
    saveagenda(agendas){
      return this.http.post(`${this.urlApi}/agenda`, agendas);
  
    }
    update(id: any, dados: any){

      return this.http.put<any>(`${`${this.urlApi}/edit`}/${id}`, dados);
      }
      
      destroy(id: any){
      
      return this.http.delete<any>(`${`${this.urlApi}/delete`}/${id}`);
      }
    
}
