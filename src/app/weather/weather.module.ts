import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { WeatherEffects } from "./store/effects/weather.effects";

import { WeatherContainer } from "./weather-container.component";
import { WeatherService } from "../services/weather.service";
import { SearchComponent } from "./components/search/search.component";
import { ResultsComponent } from "./components/results/results.component";
import { weatherReducer } from "./store/reducers/weather.reducers";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("weather", weatherReducer),
    EffectsModule.forFeature([WeatherEffects]),
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  declarations: [SearchComponent, ResultsComponent, WeatherContainer],
  providers: [WeatherService],
})
export class WeatherModule {}
