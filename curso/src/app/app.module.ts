import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main';
import { SecurityModule } from './security';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from '@my/core';
import { environment } from 'src/environments/environment';
import { CommonServicesModule } from './common-services';
import { DemosComponent } from './demos/demos.component';
import GraficoSvgComponent from 'src/lib/independientes/grafico-svg/grafico-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MainModule, SecurityModule, MyCoreModule, CommonServicesModule,
    GraficoSvgComponent,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
