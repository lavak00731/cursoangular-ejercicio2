import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { AuthModule } from './modules/auth/auth.module';


const routes: Routes = [
  {
    path: '',   
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    component:  HomeComponent
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./modules/auth/auth.module').then( m => m.AuthModule)
    /*canActivate: [LoginGuardGuard]*/
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
