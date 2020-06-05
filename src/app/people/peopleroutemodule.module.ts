import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeoplelistComponent } from './component/peoplelist/peoplelist.component';
import { PeopledetailComponent } from './component/peopledetail/peopledetail.component';

const routes: Routes = [
  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  { 
    path: 'peoplelist', 
    component: PeoplelistComponent    
  },
  { 
    path: 'person/:id',
    component: PeopledetailComponent
    
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleroutemoduleModule { }
