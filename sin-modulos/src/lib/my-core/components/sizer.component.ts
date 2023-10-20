/* eslint-disable @angular-eslint/template/label-has-associated-control */
/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-sizer',
  standalone: true,
  template: `
    <div>
      <button (click)="dec()">-</button>
      <button (click)="inc()">+</button>
      <output [style.font-size.px]="size">FontSize: {{size}}px</output>
    </div>
  `
})
export class SizerComponent {
  @Input()  size: number | string = 12;
  @Output() sizeChange = new EventEmitter<number>();

  dec() : void { this.resize(-1); }
  inc() : void { this.resize(+1); }

  resize(delta: number) : void {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
