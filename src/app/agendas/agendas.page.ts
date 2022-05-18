import { Component, OnInit } from '@angular/core';
import { AgendasService } from 'src/app/api/agendas.service';
@Component({
  selector: 'app-agendas',
  templateUrl: './agendas.page.html',
  styleUrls: ['./agendas.page.scss'],
})
export class AgendasPage implements OnInit {
  agendas = {
    nome: '',
    email: '',
    telefone: '',
    messagem: '',
  };
  
    constructor(private AgendasService: AgendasService) { }
  
    ngOnInit() {
    }
  
    salvar(){
      this.AgendasService.saveagenda(this.agendas).subscribe(res => {
        console.log("agenda Salvar");
      })
    }
  
  }


