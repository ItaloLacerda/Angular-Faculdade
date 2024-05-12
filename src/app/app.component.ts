import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Meu Aplicativo Angular</h1>
    <nav>
      <a routerLink="/produtos">Produtos</a>
      <a routerLink="/usuarios">Usuários</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
