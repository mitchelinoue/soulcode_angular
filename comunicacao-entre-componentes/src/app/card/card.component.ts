import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  banner:String = 'https://images.unsplash.com/photo-1665194425357-9f06f47d7c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80';

  @Input()
  titulo: String = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

  @Input()
  username = 'Larissa Ribeiro';

  @Input()
  userFoto = 'https://images.unsplash.com/photo-1664793348200-641d676b2544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';

  @Input()
  corBtn = 'Blue';


  constructor() { }

  ngOnInit(): void {
  }

}
