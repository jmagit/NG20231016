import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { LibrosComponent, LIBROS_COMPONENTES } from './componente.component';
import { PaginatorModule } from 'primeng/paginator';


const routes: Routes = [
  { path: '', component: LibrosComponent },
  { path: 'add', component: LibrosComponent },
  { path: ':id/edit', component: LibrosComponent },
  { path: ':id', component: LibrosComponent },
  { path: ':id/:kk', component: LibrosComponent },
]

@NgModule({
    exports: [
        LIBROS_COMPONENTES,
        // LibrosComponent,
        RouterModule,
    ],
    imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes),
    PaginatorModule,
    LIBROS_COMPONENTES,
]
})
export class LibrosModule { }
