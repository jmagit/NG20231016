import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, LoginFormComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'registro', component: RegisterUserComponent },
];

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes),
  ],
  declarations: [ LoginComponent, RegisterUserComponent, LoginFormComponent ],
  exports: [ LoginComponent, RegisterUserComponent, RouterModule, ],
})
export class SecurityModule { }
