import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName:"Lucas",
        lastName:"Silva",
        age:18
      },
      {
        firstName:"Julia",
        lastName:"Fioravante",
        age:18
      },
      {
        firstName:"Maria",
        lastName:"Silva",
        age:46
      },
      {
        firstName:"Ivonaldo",
        lastName:"Soares",
        age:26
      },
    ]

    return of(peopleArray)
  }
}
