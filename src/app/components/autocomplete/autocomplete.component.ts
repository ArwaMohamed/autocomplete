import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  searchTerm = new FormControl();
  countries$: Observable<string[]>;
  noDataFound: boolean = false;
  constructor(private countryService: CountriesService) {
    this.countries$ = this.searchTerm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.countryService.searchCountries(term)),
      map(country => {
        this.noDataFound = country.length === 0;
        return country;
      })
    );
  }
}
