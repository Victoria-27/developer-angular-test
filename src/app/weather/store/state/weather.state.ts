import { WeatherState } from "../reducers/weather.reducers";

export interface AppState {
  weather: WeatherState;
}

export const initialAppState: AppState = {
  weather: {
    weather: null
   }
};
