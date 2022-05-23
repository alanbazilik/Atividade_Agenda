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
    messagem: ''
  };
 Avaliar_crad:any = []

  n1 = 1
  n2 = 2
  n3 = 3
  n4 = 4
  n5 = 5

  constructor(private AvaliarService: AvaliarService) {}

  ngOnInit() {
    this.list()
  }
avalir1(){
this.n1
console.log(this.n1)
}
avalir2(){
  this.n2
  console.log(this.n2)
  }
  avalir3(){
    this.n3
    console.log(this.n3)
    }
    avalir4(){
      this.n4
      console.log(this.n4)
      }
      avalir5(){
        this.n5
        console.log(this.n5)
        }
        salvar(){
          this.AvaliarService.saveAvaliar(this.Avaliar).subscribe(res => {
            console.log("agenda Salvar");
          })
        }
        list(){
          this.AvaliarService.getAvaliar().subscribe(res => {
            this.Avaliar_crad = res
            console.log(res)
          });
        
        }
}
