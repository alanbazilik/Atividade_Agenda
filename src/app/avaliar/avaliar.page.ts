import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliar',
  templateUrl: './avaliar.page.html',
  styleUrls: ['./avaliar.page.scss'],
})

export class AvaliarPage implements OnInit {
  n1 = 1
  r
  constructor() {}

  ngOnInit() {
  }
avalir(){
  this.r=+this.n1
  console.log(this.r)
}
}
