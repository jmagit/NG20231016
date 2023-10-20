import { Component } from '@angular/core';
import { NotificationService } from 'src/app/common-services';
import { NgIf, NgFor, I18nSelectPipe } from '@angular/common';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css'],
    standalone: true,
    imports: [NgIf, NgFor, I18nSelectPipe]
})
export class NotificationComponent {

  constructor(private vm: NotificationService) { }

  public get VM() { return this.vm; }

}
