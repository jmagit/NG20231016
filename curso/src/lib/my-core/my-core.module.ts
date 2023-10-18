import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './components/sizer.component';



@NgModule({
  declarations: [],
  exports: [ SizerComponent ],
  imports: [
    CommonModule, SizerComponent
  ]
})
export class MyCoreModule { }
