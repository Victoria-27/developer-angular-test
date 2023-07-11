import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import * as WeatherActions from "../actions/weather.action";
import { WeatherService } from "../../../services/weather.service";

@Injectable()
export class WeatherEffects {
  searchWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.searchWeather),
      switchMap(({ city }) =>
        this.weatherService
          .searchWeatherForCity(city)
          .pipe(map((weather) => WeatherActions.setWeather({ weather })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}
