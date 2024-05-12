import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListComponent } from './usuarios-list.component';

const usuariosRoutes: Routes = [
  { path: 'usuarios', component: UsuariosListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule],
  declarations: [UsuariosListComponent],
})
export class UsuariosModule {}
