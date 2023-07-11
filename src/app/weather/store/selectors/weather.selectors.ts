import { createSelector } from '@ngrx/store';
import { AppState } from '../state/weather.state';

export const selectWeatherState = (state: AppState) => state.weather;

export const selectWeather = createSelector(
  selectWeatherState,
  (weatherState) => weatherState.weather
);

