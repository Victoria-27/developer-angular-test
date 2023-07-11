import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/state/weather.state';
import { selectWeather } from './store/selectors/weather.selectors';
import { searchWeather } from './store/actions/weather.action';

@Component({
  selector: 'app-weather',
  templateUrl: './weather-container.component.html'
})
export class WeatherContainer {
clearError() {
throw new Error('Method not implemented.');
}
  weather$ = this.store.pipe(select(selectWeather))

  constructor(private store: Store<AppState>) { }

  citySearch(city: string) {
    this.store.dispatch(searchWeather({ city }));
  }
}
