import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppComponent } from './app/app.component';
import { ContactosModule } from './app/contactos';
import { MainModule } from './app/main';
import { AppRoutingModule } from './app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AjaxWaitInterceptor } from './app/main/ajax-wait';
import { AuthInterceptor, SecurityModule } from './app/security';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoggerService, ERROR_LEVEL } from '@my/core';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, AppRoutingModule, MainModule, SecurityModule, ContactosModule),
        LoggerService,
        { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
        { provide: LOCALE_ID, useValue: 'es-ES' },
        { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'dd/MMM/yy' } },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
        { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
