import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosListComponent } from './produtos-list.component';

const produtosRoutes: Routes = [
  { path: 'produtos', component: ProdutosListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(produtosRoutes)],
  exports: [RouterModule],
  declarations: [ProdutosListComponent],
})
export class ProdutosModule {}
