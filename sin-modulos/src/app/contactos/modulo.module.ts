import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { ContactosComponent, CONTACTOS_COMPONENTES } from './componente.component';
import {PaginatorModule} from 'primeng/paginator';


@NgModule({
    exports: [
        CONTACTOS_COMPONENTES,
        // ContactosComponent,
    ],
    imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    PaginatorModule,
    CONTACTOS_COMPONENTES,
]
})
export class ContactosModule { }
