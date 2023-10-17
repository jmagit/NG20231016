import { Component } from '@angular/core';
import { LoggerService } from '@my/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hola mundo';

  constructor(out: LoggerService) {
    out.error(`Esto es un error`)
    out.warn(`Esto es un warn`)
    out.info(`Esto es un info`)
    out.log(`Esto es un log`)
  }
}
