import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao-credito',
  templateUrl: './cartao-credito.component.html',
  styleUrls: ['./cartao-credito.component.css'],
})
export class CartaoCreditoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  nomeCartao: string = ''

  @Input()
  numeroCartao: string = ""
  
  @Input()
  mes: number = 0

  @Input()
  ano: number = 0

  @Input()
  cvc: number = 0
}
