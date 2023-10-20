import { Component } from '@angular/core';
import { NavigationService } from './common-services';
import { RouterOutlet } from '@angular/router';
import { AjaxWaitComponent } from './main/ajax-wait';
import { NotificationComponent } from './main/notification/notification.component';
import { HeaderComponent } from './main/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HeaderComponent, NotificationComponent, AjaxWaitComponent, RouterOutlet]
})
export class AppComponent {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  constructor(navigation: NavigationService) {}
}
