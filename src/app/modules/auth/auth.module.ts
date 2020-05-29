import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './../../components/login/login.component';
import { LogOutComponent } from './../../components/log-out/log-out.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    LogOutComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
