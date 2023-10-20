import { Component } from '@angular/core';
import { HomeComponent } from '../main';
import { DemosComponent } from '../demos/demos.component';
// import GraficoSvgComponent from 'src/lib/independientes/grafico-svg/grafico-svg.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { ContactosComponent } from '../contactos';
import { AjaxWaitComponent } from '../main/ajax-wait';
import { NotificationComponent } from '../main/notification/notification.component';
import { LoginComponent } from '../security/login/login.component';
import { NgFor, NgComponentOutlet } from '@angular/common';
// import { LibrosComponent } from '../libros';

@Component({
    selector: 'app-daskboard',
    templateUrl: './daskboard.component.html',
    styleUrls: ['./daskboard.component.css'],
    standalone: true,
    imports: [NgFor, LoginComponent, NotificationComponent, AjaxWaitComponent, NgComponentOutlet]
})
export class DaskboardComponent {
  menu = [
    // { texto: 'libros', icono: 'fa-solid fa-book', componente: LibrosComponent},
    { texto: 'inicio', icono: 'fa-solid fa-house', componente: HomeComponent},
    { texto: 'contactos', icono: 'fa-solid fa-address-book', componente: ContactosComponent},
    { texto: 'demos', icono: 'fa-solid fa-chalkboard-user', componente: DemosComponent},
    { texto: 'calculadora', icono: 'fa-solid fa-calculator', componente: CalculadoraComponent},
    { texto: 'formulario', icono: 'fa-solid fa-rectangle-list', componente: FormularioComponent},
    // { texto: 'gráfico', icono: 'fa-solid fa-image', componente: GraficoSvgComponent},
  ]
  actual: any = this.menu[0].componente

  selecciona(index: number) {
    this.actual = this.menu[index].componente
  }
}
