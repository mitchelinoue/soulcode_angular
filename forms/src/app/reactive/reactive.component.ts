import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  /* dadosForm: FormGroup = new FormGroup({
    nome: new FormControl('', [ Validators.required, Validators.minLength(4) ]),
    email: new FormControl('',[ Validators.required, Validators.email] ),
    senha: new FormControl(''),
    endereco: new FormGroup({
      cep: new FormControl(''),
      rua: new FormControl(''),
      complemento: new FormControl(''),
      numero: new FormControl('')
    })
  }) */

  /*O método group é responsável por criar um novo Objeto do tipo FormGroup */

  /*
  FormArray é utilizado para armazenar form controls, form groups pu outros form arrays dentro de um array 
  o FormArray precisa estar dentro de um FormGroup
  */
  dadosForm: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    senha: [''],
    endereco: this.fb.group({
      cep:[''],
      rua:[''],
      complemento:[''],
      numero:['']
    }),
    telefones: this.fb.array([
      [''] // pode utilizar 
    ])
  })

  tels = this.dadosForm.get('telefones') as FormArray//precisa transformar o abstract control (resultado do 'get()')para form Array

  /*
  Form Builder -> Objeto que permite criar FormControls, FormGroups ou FormArrays com uma sintaxe menor
   */

  constructor(
    private fb: FormBuilder
  ) { }

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

  adicionarCampoDeTelefone(){
    this.tels.push(new FormControl(''))
  }

}
