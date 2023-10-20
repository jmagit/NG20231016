import { Component, Injectable, inject } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';
import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AUTH_REQUIRED, AuthService } from '../security';
import { ErrorMessagePipe } from '../../lib/my-core/pipes/cadenas.pipe';
import { FormButtonsComponent } from '../common-component/form-buttons/form-buttons.component';
import { TypeValidator, UPPERCASEValidator, NIFValidator } from '../../lib/my-core/directives/mis-validadores.directive';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

export abstract class RESTDAOService<T, K> {
  protected baseUrl = environment.apiURL;
  protected http = inject(HttpClient)

  constructor(entidad: string, protected option = {}) {
    this.baseUrl += entidad;
  }
  query(extras = {}): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.baseUrl, Object.assign({}, this.option, extras));
  }
  get(id: K, extras = {}): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`, Object.assign({}, this.option, extras));
  }
  add(item: T, extras = {}): Observable<T> {
    return this.http.post<T>(this.baseUrl, item, Object.assign({}, this.option, extras));
  }
  change(id: K, item: T, extras = {}): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${id}`, item, Object.assign({}, this.option, extras));
  }
  remove(id: K, extras = {}): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${id}`, Object.assign({}, this.option, extras));
  }
}

@Injectable({providedIn: 'root'})
export class PersonasDaoService extends RESTDAOService<any, number> {
  constructor() {
    super('personas', { context: new HttpContext().set(AUTH_REQUIRED, true) })
  }
  load(pagina = 0, filas = 20): Observable<any> {
    return this.http.get(this.baseUrl, { params: new HttpParams().set('_page', pagina).set('_rows', filas)})
    // return this.http.get(`${this.baseUrl}?_page=${pagina}&_rows=${filas}`)
  }
}

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css'],
    standalone: true,
    imports: [NgIf, FormsModule, TypeValidator, UPPERCASEValidator, NIFValidator, FormButtonsComponent, NgFor, ErrorMessagePipe]
})
export class FormularioComponent {
  modo: 'add' | 'edit' = 'add'
  elemento: any = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', correo: 'pepito.grillo@example.com', nif: '12345678z', edad: 99 }

  constructor(private notify: NotificationService, public dao: PersonasDaoService, public auth: AuthService) {}

  add() {
    this.elemento = {}
    this.modo = 'add'
  }
  edit() {
    // this.elemento = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', correo: 'pepito.grillo@example.com', nif: '12345678z', edad: 99 }
    // this.modo = 'edit'
    this.dao.get(this.elemento.id).subscribe({
      next: data => {
        this.elemento = data
        this.modo = 'edit'
      },
      error: err => this.notify.add(JSON.stringify(err))
    })
  }
  cancel() {
    this.elemento = {}
  }
  send() {
    switch(this.modo) {
      case 'add':
        // this.notify.add(`POST: ${JSON.stringify(this.elemento)}`)
        this.dao.add(this.elemento).subscribe({
          next: () => this.notify.add("OK", NotificationType.info),
          error: err => this.notify.add(JSON.stringify(err))
        })
        break;
      case 'edit':
        // this.notify.add(`PUT: ${JSON.stringify(this.elemento)}`)
        this.dao.change(this.elemento.id, this.elemento).subscribe({
          next: () => this.notify.add("OK", NotificationType.info),
          error: err => this.notify.add(JSON.stringify(err))
        })
        break;
    }
  }

  listado: Array<any> = []
  list() {
    // this.dao.query().subscribe({
    //   next: data => {
    //     this.listado = data
    //   },
    //   error: err => this.notify.add(JSON.stringify(err))
    // })
    this.dao.load().subscribe({
      next: data => {
        this.listado = data['content']
      },
      error: err => this.notify.add(JSON.stringify(err))
    })
  }

}
