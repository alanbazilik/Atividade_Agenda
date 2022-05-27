import { Component, OnInit } from '@angular/core';
import { AgendasService } from 'src/app/api/agendas.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-editar-agenda',
  templateUrl: './editar-agenda.page.html',
  styleUrls: ['./editar-agenda.page.scss'],
})
export class EditarAgendaPage implements OnInit {

  agendas = {
    id:'',
    nome: '',
    email: '',
    telefone: '',
    messagem: '',
  };
  Agendas_crad:any = []
  
    constructor(private AgendasService: AgendasService,public alertController: AlertController) { }
  
    ngOnInit() {
      this.list()
    }
    async presentAlertMultipleButtons() {
      const alert = await this.alertController.create({
        message: "Agenda salva",
      });
  
      await alert.present();
    }
  
    salvar(){
      this.AgendasService.saveagenda(this.agendas).subscribe(res => {
        this.presentAlertMultipleButtons() 
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




