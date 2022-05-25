import { Component, OnInit } from '@angular/core';
import { AvaliarService } from 'src/app/api/avaliar.service';
@Component({
  selector: 'app-avaliar',
  templateUrl: './avaliar.page.html',
  styleUrls: ['./avaliar.page.scss'],
})

export class AvaliarPage implements OnInit {
  Avaliar = {
    nome: '',
    messagem: '',
    nota: ''
  };
  Avaliar_crad: any = []



  constructor(private AvaliarService: AvaliarService) { }

  ngOnInit() {
    this.list()
  }
  avaliar(numbers) {
this.Avaliar.nota = numbers

  }
  salvar() {
    this.AvaliarService.saveAvaliar(this.Avaliar).subscribe(res => {
      console.log("Avalição Salvar");
    })
  }
  list() {
    this.AvaliarService.getAvaliar().subscribe(res => {
      this.Avaliar_crad = res
      console.log(res)
    });

  }
}
