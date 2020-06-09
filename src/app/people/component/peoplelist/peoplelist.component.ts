import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from './../../people.service';
import { Peoplemodel, Peoplecontainer } from './../../peoplemodel';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.scss']
})
export class PeoplelistComponent implements OnInit {

  constructor(private _list: PeopleService, private orderPipe: OrderPipe) { }

  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this._list.getPeopleList().subscribe(x => { 
       
      this.dataSource = new MatTableDataSource(x.users);
     }, y => { console.log(y)});
  
     
  }
  displayedColumns: string[] = ['id', 'name', 'phone', 'email'];
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

}
