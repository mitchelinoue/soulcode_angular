import { Component } from '@angular/core';
import { Produto } from './interfaces/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  nome: string = '';
  imagem: string = '';
  preco: number = 0;
  estoque: number = 0;
  descricao: string = '';

  produtos: Produto[] = [];

  

<<<<<<< HEAD
  excluirProdutoArray(index: number):void{
=======
  excluirProdutoArray(index: number){
>>>>>>> dd0960815f52487d06b15ca49388e497d272a308

      this.produtos.splice(index, 1);
    
  }

  adicionarProduto(evento:any): void{
    console.log(evento)
    evento.preventDefault() //faz com que o comportamento padrão de um elemento HTML seja anulado
    evento.stopPropagation() //evita com que a emissão do evento afete outros elementos HTML

    this.produtos.push({
      descricao: this.descricao,
      estoque: this.estoque,
      imagem: this.imagem,
      nome: this.nome,
      preco: this.preco,
    })

    this.nome = '';
    this.imagem = '';
    this.estoque = 0;
    this.descricao = '';
    this.preco = 0;
  }
}
