import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../interfaces/produto';

@Component({
  selector: 'produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent implements OnInit {

<<<<<<< HEAD
  @Output()
  deletar: EventEmitter<any> = new EventEmitter<any>()
  

  excluirElemento(){
    this.deletar.emit()
=======

  @Output()
  meuEvento: EventEmitter<any> = new EventEmitter<any>()
  

  excluirElemento(){
    this.meuEvento.emit()
>>>>>>> dd0960815f52487d06b15ca49388e497d272a308
  }

  @Input()
  prod: Produto = {
    descricao:'',
    estoque:0,
    imagem: '',
    nome: '',
    preco:0
  }

<<<<<<< HEAD
  constructor() { }

  mostrarProduto: boolean = true;

  escondeMostraProduto():void{
    this.mostrarProduto = !this.mostrarProduto
  }

=======
  mostrarProduto: boolean = true;

  escondeProduto(){
    if(this.mostrarProduto == false){
      this.mostrarProduto = true;
    } else {
      this.mostrarProduto = false;
    }
  }

  constructor() { }

>>>>>>> dd0960815f52487d06b15ca49388e497d272a308
  ngOnInit(): void {
  }

}
