import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from '../modelos/pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = "http://localhost:3000/pensamentos";
  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }
  criar(pensamento: Pensamento) {
    return this.http.post<Pensamento>(this.API, pensamento);
  }
  excluir(id: number): Observable<Pensamento> {
    const url = `${ this.API }/${id}`;
    return this.http.delete<Pensamento>(url);
  }
  editar(id: number) {
    const url = `${ this.API }/${id}`;
  }
  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${ this.API }/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
