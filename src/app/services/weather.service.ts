import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class WeatherService {
  private apiUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient, private toastr: ToastrService,
    ) { }

  searchWeatherForCity(city: string): Observable<any> {
    // implement the service
    const params = new HttpParams()
      .set('q', city)
      .set('cnt', '8')
      .set('units', 'metric')
      .set('appid', this.apiKey);
    return this.http.get(this.apiUrl, { params }).pipe(
      catchError((error: any) => 
      {
        this.toastr.error(error.error.message);
        return throwError(error);
      })
    );
  }

}
