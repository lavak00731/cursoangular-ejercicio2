import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  { 
    path: 'home', 
    component:  HomeComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'log-out',
    component: LogOutComponent
  },
  {
    path: '',   
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
