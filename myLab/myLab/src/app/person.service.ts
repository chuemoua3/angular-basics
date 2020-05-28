import { Injectable } from '@angular/core';
import { Person } from './person';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PersonService{
    private person: Person[] = [
        new Person("Chue Moua", "NSX", "Pizza")
    ];

    constructor(){}

    getPerson(): Person[]{
        return this.person;
    }

    getPeople(): Observable<any>{
        return of(this.person);
    }
}