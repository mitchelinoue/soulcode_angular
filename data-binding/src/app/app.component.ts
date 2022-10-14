import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //string Interpolation: utilizar valores que propriedades possuem para mostrá-los para o usuário

  //property biding: utilizar valores de propriedades para atribuí-los a atributos HTML

  //event biding: utilizado para ouvir eventos da DOM

  title = 'data-binding';
  n1: number = 0;
  n2: number = 0;

  tipoInput: string = 'password';
  tipoOlho: string = 'https://cdn-icons-png.flaticon.com/512/4818/4818558.png';


  somar(x: number, y: number){
    return x + y
  }

  mudarTipoDoInput(): void{
    if(this.tipoInput == 'password'){
      this.tipoInput = 'text';
      this.tipoOlho = 'https://cdn-icons-png.flaticon.com/512/4818/4818558.png';
    } else {
      this.tipoInput = 'password';
      this.tipoOlho = 'https://cdn-icons-png.flaticon.com/512/3178/3178377.png';
    }
  }
}
