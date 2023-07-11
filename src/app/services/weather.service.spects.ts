import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;
  let toastrService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService, ToastrService]
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
    toastrService = TestBed.inject(ToastrService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request to the API', () => {
    const city = 'London';
    const dummyResponse = { /* mock response object */ };

    service.searchWeatherForCity(city).subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });

    const request = httpMock.expectOne(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${service.apiKey}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyResponse);
  });

  it('should handle error and display toast message', () => {
    const city = 'London';
    const errorMessage = 'An error occurred';
    spyOn(toastrService, 'error');

    service.searchWeatherForCity(city).subscribe(() => {
      // Test should not reach here
      fail('Expected error to be thrown');
    }, (error) => {
      expect(error).toBeTruthy();
      expect(toastrService.error).toHaveBeenCalledWith(errorMessage);
    });

    const request = httpMock.expectOne(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${service.apiKey}`);
    expect(request.request.method).toBe('GET');
    request.error(new ErrorEvent('API error', { error: errorMessage }));
  });
});
