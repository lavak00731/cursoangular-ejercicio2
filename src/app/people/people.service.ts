import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Peoplecontainer } from './peoplemodel';

@Injectable()
export class PeopleService {

  url = 'https://www.learningcontainer.com/wp-content/uploads/2019/10/Sample-JSON-file-with-multiple-records-download.json';
  constructor(private _http: HttpClient) { }
  
  getPeopleList (): Observable<Peoplecontainer>  {
    return this._http.get<Peoplecontainer>(this.url);
  }

}
