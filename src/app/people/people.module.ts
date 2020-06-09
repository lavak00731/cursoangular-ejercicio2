import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleroutemoduleModule } from './peopleroutemodule.module';
import { PeoplelistComponent } from './component/peoplelist/peoplelist.component';
import { PeopledetailComponent } from './component/peopledetail/peopledetail.component';
import { PeopleService } from './people.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    PeopledetailComponent,
    PeoplelistComponent    
  ],
  imports: [
    CommonModule,
    PeopleroutemoduleModule,
    HttpClientModule,  
    MatTableModule
  ],
  providers: [
    PeopleService
  ]
})
export class PeopleModule { }
