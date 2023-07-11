import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WeatherContainer } from "./weather/weather-container.component";

const appRoutes: Routes = [
  {
    path: "",
    component: WeatherContainer,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
