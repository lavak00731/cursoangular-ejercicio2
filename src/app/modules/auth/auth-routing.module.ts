import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogOutComponent } from './../../components/log-out/log-out.component';
import { LoginComponent } from './../../components/login/login.component';

const routes: Routes = [
 
  { 
    path: 'login', 
    component: LoginComponent    
    /*canActivate: [LoginGuardGuard]*/
  },
  { 
    path: 'log-out',
    component: LogOutComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
