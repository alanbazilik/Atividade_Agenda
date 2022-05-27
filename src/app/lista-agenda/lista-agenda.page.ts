import { Component, OnInit } from '@angular/core';
import { AgendasService } from 'src/app/api/agendas.service';
@Component({
  selector: 'app-lista-agenda',
  templateUrl: './lista-agenda.page.html',
  styleUrls: ['./lista-agenda.page.scss'],
})
export class ListaAgendaPage implements OnInit {
  agendas = {
    id:'',
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

  edit(){
    this.AgendasService.update(this.agendas.id,this.agendas).subscribe(res => {
      this.Agendas_crad = res
      console.log(res)
    });
  
  }

}
