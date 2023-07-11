import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  @Output() searchCity: EventEmitter<string> = new EventEmitter<string>();
  cityForm: FormGroup;

  constructor() {
    this.cityForm = new FormGroup({
      city: new FormControl()
    });
  }


  search() {
    const city = this.cityForm.get('city')?.value;
    if (city) {
      this.searchCity.emit(city);
      this.cityForm.reset();
    } else { 
      alert('Please enter a city name')
    }
  }
}
