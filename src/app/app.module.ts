import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProdutosModule } from './features/produtos/produtos.module';
import { UsuariosModule } from './features/usuarios/usuarios.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProdutosModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
