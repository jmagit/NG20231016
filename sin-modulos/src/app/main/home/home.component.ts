import { Component, Optional } from '@angular/core';
import { LoggerService } from '@my/core';
import { NotificationService, NotificationType } from '../../common-services';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase]
})
export class HomeComponent {
  title = 'hola mundo';

  // constructor(@Optional() out?: LoggerService) {
  //   if (out) {
  //     out.error(`Esto es un error`)
  //     out.warn(`Esto es un warn`)
  //     out.info(`Esto es un info`)
  //     out.log(`Esto es un log`)
  //   }
  // }

  // constructor(private notify: NotificationService) {}

  // ngOnInit(): void {
  //   this.notify.add('Inicio la aplicación', NotificationType.info)
  // }


}
