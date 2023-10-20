import { Component } from '@angular/core';
import { NotificationService } from 'src/app/common-services';
import { NgIf, NgClass, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
    selector: 'app-notification-modal',
    templateUrl: './notification-modal.component.html',
    styleUrls: ['./notification-modal.component.css'],
    standalone: true,
    imports: [NgIf, NgClass, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault]
})
export class NotificationModalComponent {

  constructor(private vm: NotificationService) { }

  public get VM() { return this.vm; }

}
