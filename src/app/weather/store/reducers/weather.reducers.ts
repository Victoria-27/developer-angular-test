import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from '../actions/weather.action';
import { Weather } from 'src/app/model/weather';

export interface WeatherState {
  weather: Weather | null;
}

export const initialState: WeatherState = {
  weather: null,
};

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.setWeather, (state, { weather }) => ({ ...state, weather })),
);
