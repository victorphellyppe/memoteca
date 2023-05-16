import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../../../servicos/pensamentoServices';
import { Pensamento } from 'src/app/modelos/pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
      conteudo: '',
      autoria: '',
      modelo: 'modelo1'
    };

  constructor(private pensamentoSvc: PensamentoService, private router: Router) {}

  ngOnInit() {}

  criarPensamento() {
    this.pensamentoSvc.criar(this.pensamento).subscribe(() => {
      this.router.navigate['/listarPensamento'];
    });
  }

  cancelarPensamento() {
    this.router.navigate['/listarPensamento'];
  }




}
