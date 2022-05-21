import { Component, OnInit } from '@angular/core';
import { AgendasService } from 'src/app/api/agendas.service';
@Component({
  selector: 'app-lista-agenda',
  templateUrl: './lista-agenda.page.html',
  styleUrls: ['./lista-agenda.page.scss'],
})
export class ListaAgendaPage implements OnInit {
  agendas = {
    nome: '',
    email: '',
    telefone: '',
    messagem: '',
  };
  Agendas_crad:any = []
  constructor(private AgendasService: AgendasService) { }


  ngOnInit() {
    this.list()
  }

  salvar(){
    this.AgendasService.saveagenda(this.agendas).subscribe(res => {
      console.log("agenda Salvar");
    })
  }
  list(){
    this.AgendasService.getAgendas().subscribe(res => {
      this.Agendas_crad = res
      console.log(res)
    });
  
  }

}