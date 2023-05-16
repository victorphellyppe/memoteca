import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/modelos/pensamento';
import { PensamentoService } from '../../../servicos/pensamentoServices';


@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[]= [];
    // {
    //   conteudo: 'Passo informações para o componente filho',
    //   autoria: 'Componente Pai',
    //   modelo: 'modelo3',
    // },
    // {
    //   conteudo: 'Minha propiedade é decorada com @Input()',
    //   autoria: 'Componente filho',
    //   modelo: 'modelo3',
    // },
    // {
    //   conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Suco de cevadiss deixa as pessoas mais interessantis.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!',
    //   autoria: 'Mussum',
    //   modelo: 'modelo2'
    // },
    // {
    //   conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //   autoria: 'Lorem Ipsum',
    //   modelo: 'modelo1'
    // }
  // ];

  constructor(private pensamentoSvc: PensamentoService) {}


  ngOnInit(): void {
    this.pensamentoSvc.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }


}
