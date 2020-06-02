import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleroutemoduleModule } from './../peopleroutemodule/peopleroutemodule.module';
import { PeoplelistComponent } from './../peoplelist/peoplelist.component';
import { PeopledetailComponent } from './../peopledetail/peopledetail.component';



@NgModule({
  declarations: [
    PeopledetailComponent,
    PeoplelistComponent
  ],
  imports: [
    CommonModule,
    PeopleroutemoduleModule
  ]
})
export class PeopleModule { }
