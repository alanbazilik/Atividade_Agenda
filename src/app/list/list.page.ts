import { Component, OnInit } from '@angular/core';
import{ EventosService } from 'src/app/api/eventos.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private EventoService: EventosService) { }
  Eventos = {
    nome_eventos: '',
    Data: '',
    Hora: '',
    messagem: '',
  };
  eventos_crad:any = []
  ngOnInit() {
    this.list()
  }

  salvar(){
    this.EventoService.saveeventos(this.Eventos).subscribe(res => {
      console.log("Evento foi Salvo");
      
    })
  }
  list(){
    this.EventoService.geteventos().subscribe(res => {
      this.eventos_crad = res
      console.log(res)
    });
  
  }

}
