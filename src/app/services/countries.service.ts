
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countries: string[] = ['USA', 'Canada', 'Australia', 'India', 'Germany', 'France'];

  constructor() { }

  searchCountries(term: string): Observable<string[]> {
    term = term.toLowerCase();
    return of(this.countries.filter(country => country.toLowerCase().includes(term)));
  }
}
