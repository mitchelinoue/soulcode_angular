import { Injectable } from '@angular/core';

/**
 A ideia de um serviço é encapsular alguma lógica que pode ser utilizada em vários locais da sua aplicação 
 */

 interface Cliente{
  nome: string,
  sobrenome: string,
  telefone: string,
  id: number,
  email:string,
  cpf: string
 }

 /*
  C -> create
  R -> read
  U -> update
  D -> delete
*/

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Cliente[] = [
    {
      nome:'Frederico',
      sobrenome:'Alves',
      cpf:'123456789-10',
      email: 'f.alves@email.com',
      telefone: '123456789',
      id: 1
    },
    {
      nome:'Fred',
      sobrenome:'Malves',
      cpf:'456456789-11',
      email: 'f.malves@email.com',
      telefone: '678456456',
      id: 2
    },
    {
      nome:'Rico',
      sobrenome:'Galves',
      cpf:'789456789-12',
      email: 'R.galves@email.com',
      telefone: '783456123',
      id: 3
    }
  ]

  constructor() { }

  listarClientes(): Cliente[] {
    //toda lógica para acessar a API e pegar os dados
    return this.clientes
  }

  listarClientePeloId(id: number): Cliente | undefined {
    //o método find dos arrays serve para procurar algum valor dentro do array
    //é necessário que se passe como parâmetro do método find() uma função, que será utilizada dentro do método para procurar um valor. A função que será passada DEVE retornar sempre um valor booleano
    
    const clienteEncontrado = this.clientes.find((c) => {
      return c.id == id
    })

    return clienteEncontrado
  }


}
