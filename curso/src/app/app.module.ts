import { LOCALE_ID, NgModule } from '@angular/core';
import { DATE_PIPE_DEFAULT_OPTIONS, NgOptimizedImage, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main';
import { AuthInterceptor, SecurityModule } from './security';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from '@my/core';
import { environment } from 'src/environments/environment';
import { CommonServicesModule } from './common-services';
import { DemosComponent } from './demos/demos.component';
// import GraficoSvgComponent from 'src/lib/independientes/grafico-svg/grafico-svg.component';
import { DaskboardComponent } from './daskboard/daskboard.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CommonComponentModule } from './common-component';
import { FormularioComponent } from './formulario/formulario.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AjaxWaitInterceptor } from './main/ajax-wait';
import { ContactosModule } from './contactos';
// import { LibrosModule } from './libros';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DaskboardComponent,
    CalculadoraComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, MainModule, SecurityModule, MyCoreModule, CommonServicesModule,
    // GraficoSvgComponent,
    CommonComponentModule, ContactosModule,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'dd/MMM/yy' } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
