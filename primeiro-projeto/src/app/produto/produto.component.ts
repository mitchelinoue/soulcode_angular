import { Component } from "@angular/core";

//Todo componente do Angular é representado por uma classe


@Component({
    selector: 'card-produto', //serve para nomear a tag que vai ser utilizado para chamar o component
    templateUrl: './produto.component.html', //serve para referenciar o HTMl que vai ser usado no component
    styleUrls: ['./produto.component.css'], //serve para referenciar o css que vai ser utilizado no component 
})
export class ProdutoComponent{ //todo component precisa ser exportado para ser utilizado fora

}