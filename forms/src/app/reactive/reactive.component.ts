import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  /**
   * Reactive Forms possui estruturas para representar o formulário dentro do TypeScript
   * 
   * formControl representa um elemento do seu formulário
   */

  /* dessa forma é mais trabalhosa */
  nome1: FormControl = new FormControl('')
  email1: FormControl = new FormControl('')
  senha1: FormControl = new FormControl('')


  /*
  FormGroup é uma estrutura do Reactive Forms que permite agruparmos forms controls dentro dela, para que o acesso aos valores seja mais fácil
   */
  dadosForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    /*
    A propriedade 'value' do formControl possui o valor que foi digitado dentro do campo do formulário
     */

    console.log(this.nome1.value)
    console.log(this.email1.value)
    console.log(this.senha1.value)

    console.log(this.dadosForm.value)
  }

}
