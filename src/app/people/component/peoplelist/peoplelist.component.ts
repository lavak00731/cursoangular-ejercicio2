import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../../people.service';
import { Peoplemodel } from './../../peoplemodel';
@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.scss']
})
export class PeoplelistComponent implements OnInit {

  constructor(private _list: PeopleService) { }
  people: Peoplemodel[];
  ngOnInit(): void {
    this._list.getPeopleList().subscribe(x => { 
      this.people = x.users;  
     }, y => { console.log(y)});
     
  }
  displayedColumns: string[] = ['id', 'name', 'phone', 'email'];

}
