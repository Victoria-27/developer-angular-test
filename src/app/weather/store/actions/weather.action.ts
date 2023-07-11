import { createAction, props } from '@ngrx/store';
import { Weather } from 'src/app/model/weather';

export const searchWeather = createAction('[Weather] Search Weather', props<{ city: string }>());
export const setWeather = createAction('[Weather] Set Weather', props<{ weather: Weather }>());
