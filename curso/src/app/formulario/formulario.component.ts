import { Component } from '@angular/core';
import { NotificationService } from '../common-services';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  modo: 'add' | 'edit' = 'add'
  elemento: any = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', correo: 'pepito.grillo@example.com', nif: '12345678z', edad: 99 }

  constructor(private notify: NotificationService) {}

  add() {
    this.elemento = {}
    this.modo = 'add'
  }
  edit() {
    this.elemento = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', correo: 'pepito.grillo@example.com', nif: '12345678z', edad: 99 }
    this.modo = 'edit'
  }
  cancel() {
    this.elemento = {}
  }
  send() {
    switch(this.modo) {
      case 'add':
        this.notify.add(`POST: ${JSON.stringify(this.elemento)}`)
        break;
      case 'edit':
        this.notify.add(`PUT: ${JSON.stringify(this.elemento)}`)
        break;
    }
  }
}
