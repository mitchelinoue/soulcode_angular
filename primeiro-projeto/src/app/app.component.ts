import { Component } from '@angular/core';

/*
templateUrl serve para informar ao componente
qual arquivo HTML ele deve mostrar quando o mesmo ser 
utilizado

styleUrl serve para informar os caminhos dos arquivos
CSS qie o componente utilizará
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-projeto';
}
