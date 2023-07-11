import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { WeatherEffects } from './weather.effects';
import * as WeatherActions from '../actions/weather.action';
import { WeatherService } from '../../../services/weather.service';

describe('WeatherEffects', () => {
  let effects: WeatherEffects;
  let actions$: Observable<any>;
  let weatherService: jasmine.SpyObj<WeatherService>;

  beforeEach(() => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', ['searchWeatherForCity']);

    TestBed.configureTestingModule({
      providers: [
        WeatherEffects,
        provideMockActions(() => actions$),
        { provide: WeatherService, useValue: weatherServiceSpy },
        { provide: Observable, useValue: of() } // Provide Observable
      ]
    });

    effects = TestBed.inject(WeatherEffects);
    actions$ = TestBed.inject(Observable);
    weatherService = TestBed.inject(WeatherService) as jasmine.SpyObj<WeatherService>;
  });

  it('should call searchWeatherForCity method of WeatherService and dispatch setWeather action', () => {
    const city = 'London';
    const weather = { /* mock weather object */ };
    const action = WeatherActions.searchWeather({ city });
    const completion = WeatherActions.setWeather({ weather });

    weatherService.searchWeatherForCity.and.returnValue(of(weather));
    actions$ = hot('-a', { a: action });
    const expected$ = cold('-b', { b: completion });

    expect(effects.searchWeather$).toBeObservable(expected$);
    expect(weatherService.searchWeatherForCity).toHaveBeenCalledWith(city);
  });
});
