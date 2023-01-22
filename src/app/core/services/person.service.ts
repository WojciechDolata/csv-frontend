import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { personsData } from '../constants/persons-static-data';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons$: BehaviorSubject<Person[]>;
  persons: Array<Person> = [];
  constructor(private httpClient: HttpClient) {
    this.persons$ = new BehaviorSubject([]);
    this.persons = personsData;
  }

  private url = 'http://localhost:8080/data';

  getAll(): Observable<Person[]> {
    const headers = {}; //tu mozesz dac autoryzacje, ale pewnie lepiej miec jakiegos interceptora ktory automatycznie dodaje te headery np.
    return this.httpClient.get<Person[]>(this.url, {headers});
  }
  
  /*
  nie wiem jak tego uzywasz, ale potem w komponencie mozesz dac
  let data;
  
  load() {
    personsService.getAll()
      .subscribe(d -> this.data = d);
  }
  */

  add(person: Person) {
    this.persons.push(person);
  }

  edit(person: Person) {
    let findElem = this.persons.find(p => p.id == person.id);

    findElem.id = person.id;
    findElem.sygnaturaCzasowa = person.sygnaturaCzasowa;
    findElem.ankieteWypelniaCzasowa = person.ankieteWypelniaCzasowa;

    this.persons$.next(this.persons);
  }

  remove(id: number) {

    this.persons = this.persons.filter(p => {
      return p.id != id
    });

    this.persons$.next(this.persons);
  }

}
