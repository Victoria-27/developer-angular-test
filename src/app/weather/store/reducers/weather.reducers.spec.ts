import { weatherReducer, initialState, WeatherState } from './weather.reducers';
import * as WeatherActions from '../actions/weather.action';
import { Weather } from 'src/app/model/weather';

describe('weatherReducer', () => {
  it('should set the weather in the state', () => {
    const weather: Weather = { /* mock weather object */ };
    const action = WeatherActions.setWeather({ weather });

    const state: WeatherState = {
      weather: null,
    };

    const expectedState: WeatherState = {
      weather,
    };

    const result = weatherReducer(state, action);

    expect(result).toEqual(expectedState);
  });

  it('should return the current state for unknown action', () => {
    const action = {} as any;

    const state: WeatherState = {
      weather: null,
    };

    const result = weatherReducer(state, action);

    expect(result).toBe(state);
  });
});
