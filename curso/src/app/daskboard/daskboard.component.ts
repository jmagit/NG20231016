import { Component } from '@angular/core';
import { HomeComponent } from '../main/home/home.component';
import { DemosComponent } from '../demos/demos.component';
import GraficoSvgComponent from 'src/lib/independientes/grafico-svg/grafico-svg.component';

@Component({
  selector: 'app-daskboard',
  templateUrl: './daskboard.component.html',
  styleUrls: ['./daskboard.component.css']
})
export class DaskboardComponent {
  menu = [
    { texto: 'Inicio', icono: '', componente: HomeComponent},
    { texto: 'Demo', icono: '', componente: DemosComponent},
    { texto: 'Gráfico', icono: '', componente: GraficoSvgComponent},
  ]
  actual: any = this.menu[0].componente

  selecciona(index: number) {
    this.actual = this.menu[index].componente
  }
}
