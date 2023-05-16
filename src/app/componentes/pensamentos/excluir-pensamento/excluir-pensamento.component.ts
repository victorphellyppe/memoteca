import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from './../../../modelos/pensamento';
import { PensamentoService } from '../../../servicos/pensamentoServices';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css'],
})
export class ExcluirPensamentoComponent implements OnInit{
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };
  constructor(
    private pensamentoSvc: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoSvc.buscarPorId(parseInt(id)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    this.pensamentoSvc.excluir(this.pensamento.id).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
