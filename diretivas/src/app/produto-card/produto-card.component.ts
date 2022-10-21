import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../interfaces/produto';

@Component({
  selector: 'produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent implements OnInit {


  @Output()
  meuEvento: EventEmitter<any> = new EventEmitter<any>()
  

  excluirElemento(){
    this.meuEvento.emit()
  }

  @Input()
  prod: Produto = {
    descricao:'',
    estoque:0,
    imagem: '',
    nome: '',
    preco:0
  }

  mostrarProduto: boolean = true;

  escondeProduto(){
    if(this.mostrarProduto == false){
      this.mostrarProduto = true;
    } else {
      this.mostrarProduto = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
