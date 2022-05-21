import { Component, OnInit } from '@angular/core';
import{ EventosService } from 'src/app/api/eventos.service';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

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
