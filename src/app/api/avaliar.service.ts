import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AvaliarService {

  urlApi = "backend-da-agenda.vercel.app";
  constructor(private http: HttpClient) { }

  getAvaliar(){
    return this.http.get(`${this.urlApi}/Avaliar`);
    }
    saveAvaliar(avaliar){
      return this.http.post(`${this.urlApi}/avaliar`, avaliar);
  
    }
}
