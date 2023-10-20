import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class RESTDAOService<T, K> {
  protected baseUrl = environment.apiURL;
  protected http = inject(HttpClient)
  constructor(entidad: string, protected option = {}) {
    this.baseUrl += entidad;
  }
  query(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.baseUrl, this.option);
  }
  get(id: K): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`, this.option);
  }
  add(item: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, item, this.option);
  }
  change(id: K, item: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${id}`, item, this.option);
  }
  remove(id: K): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${id}`, this.option);
  }
}
export class DAOServiceMock<T, K> extends RESTDAOService<T, number> {
  constructor(public listado: Array<T>) {
    super('')
  }
  override query(): Observable<Array<T>> {
    return of(this.listado);
  }
  override get(id: number): Observable<T> {
    if (id > this.listado.length) return throwError(() => "404 not found")
    return of(this.listado[id - 1]);
  }
  override add(item: T): Observable<T> {
    const tipo = item as { [i: string]: any }
    if (tipo[Object.keys(tipo)[0]] < 0) return throwError(() => "404 not found")
    this.listado.push(item)
    return of(item);
  }
  override change(id: number, item: T): Observable<T> {
    if (id <= 0 || id > this.listado.length) return throwError(() => "404 not found")
    this.listado[id - 1] = item;
    return of(item);
  }
  override remove(id: number): Observable<T> {
    if (id <= 0 || id > this.listado.length) return throwError(() => "404 not found")
    const item = this.listado[id - 1];
    this.listado.splice(id - 1, 1)
    return of(item);
  }
  page(page: number, rows: number = 20): Observable<{ page: number, pages: number, rows: number, list: Array<any> }> {
    return of({ page, pages: 1, rows: this.listado.length, list: this.listado });
  }
}

