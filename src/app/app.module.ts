import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app.routing.module';
import { WeatherModule } from './weather/weather.module';
import { AppComponent } from './app.component';
import { weatherReducer } from './weather/store/reducers/weather.reducers';
import { WeatherEffects } from './weather/store/effects/weather.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WeatherModule,
    StoreModule.forRoot({ weather: weatherReducer }),
    EffectsModule.forRoot([WeatherEffects]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
