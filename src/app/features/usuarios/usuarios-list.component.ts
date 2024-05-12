import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
})
export class UsuariosListComponent implements OnInit {

  usuarios = [
    { id: 1, nome: 'João Silva', email: 'joaosilva@email.com' },
    { id: 2, nome: 'Maria Oliveira', email: 'mariaoliveira@email.com' },
    { id: 3, nome: 'Pedro Souza', email: 'pedrosouza@email.com' },
  ];

  constructor() { }

  ngOnInit(): void { }
}
