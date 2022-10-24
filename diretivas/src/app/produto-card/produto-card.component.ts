import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../interfaces/produto';

@Component({
  selector: 'produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent implements OnInit {

  @Output()
  deletar: EventEmitter<any> = new EventEmitter<any>()
  

  excluirElemento(){
    this.deletar.emit()
  }

  @Input()
  prod: Produto = {
    descricao:'',
    estoque:0,
    imagem: '',
    nome: '',
    preco:0
  }

  constructor() { }

  mostrarProduto: boolean = true;

  escondeMostraProduto():void{
    this.mostrarProduto = !this.mostrarProduto
  }

  ngOnInit(): void {
  }

}
