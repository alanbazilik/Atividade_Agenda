import { Component, OnInit } from '@angular/core';
import{ EventosService } from 'src/app/api/eventos.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(private EventoService: EventosService,public alertController: AlertController) { }
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

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      message: "Eventos salvo",
    });

    await alert.present();
  }
  salvar(){
    this.EventoService.saveeventos(this.Eventos).subscribe(res => {
      this.presentAlertMultipleButtons()
      
    })
  }
  list(){
    this.EventoService.geteventos().subscribe(res => {
      this.eventos_crad = res
      console.log(res)
    });
  
  }

}
