import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { ListButtonsComponent } from './list-buttons.component';



@NgModule({
  declarations: [
    CardComponent, FormButtonsComponent, ListButtonsComponent,
  ],
  exports: [
    CardComponent, FormButtonsComponent, ListButtonsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CommonComponentModule { }
