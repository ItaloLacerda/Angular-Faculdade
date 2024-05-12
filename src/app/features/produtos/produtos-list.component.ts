import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
})
export class ProdutosListComponent implements OnInit {

  produtos = [
    { id: 1, nome: 'Camisa', preco: 59.90 },
    { id: 2, nome: 'Calça', preco: 89.90 },
    { id: 3, nome: 'Tênis', preco: 129.90 },
  ];

  constructor() { }

  ngOnInit(): void { }
}
