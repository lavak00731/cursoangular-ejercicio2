import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleroutemoduleModule } from './peopleroutemodule.module';
import { PeoplelistComponent } from './component/peoplelist/peoplelist.component';
import { PeopledetailComponent } from './component/peopledetail/peopledetail.component';
import { PeopleService } from './people.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    PeopledetailComponent,
    PeoplelistComponent    
  ],
  imports: [
    CommonModule,
    PeopleroutemoduleModule,
    HttpClientModule,  
    MatTableModule,
    MatInputModule,
    OrderModule
  ],
  providers: [
    PeopleService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class PeopleModule { }
