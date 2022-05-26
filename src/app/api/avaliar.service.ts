import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AvaliarService {

  urlApi = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  getAvaliar(){
    return this.http.get(`${this.urlApi}/Avaliar`);
    }
    saveAvaliar(avaliar){
      return this.http.post(`${this.urlApi}/avaliar`, avaliar);
  
    }
}
