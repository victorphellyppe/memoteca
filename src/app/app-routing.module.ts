import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentosComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
