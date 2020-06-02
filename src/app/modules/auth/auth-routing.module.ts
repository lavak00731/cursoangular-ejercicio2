import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogOutComponent } from './../../components/log-out/log-out.component';
import { LoginComponent } from './../../components/login/login.component';
import { LoginGuardGuard } from './../../guards/login-guard.guard';
const routes: Routes = [
  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  { 
    path: 'login', 
    component: LoginComponent    
  },
  { 
    path: 'log-out',
    component: LogOutComponent,
    canActivate: [LoginGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
