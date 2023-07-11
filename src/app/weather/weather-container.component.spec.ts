import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { WeatherContainer } from "./weather-container.component";
import { StateObservable, Store, ActionsSubject } from "@ngrx/store";
import { StoreModule } from "@ngrx/store";
import { weatherReducer } from "./store/reducers/weather.reducers";
import { searchWeather } from "./store/actions/weather.action"; // Add import statement for searchWeather action

describe("WeatherContainer", () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContainer],
      imports: [
        StoreModule.forRoot({ weather: weatherReducer }), // Update to use the reducer in the StoreModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [Store, StateObservable, ActionsSubject],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store); // Inject the Store for testing
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should dispatch searchWeather action on citySearch", () => {
    const city = { id: 123, name: "London" }; // Update to match the City interface
    spyOn(store, "dispatch");
    component.citySearch(city.name); // Pass the name property of the City object
    expect(store.dispatch).toHaveBeenCalledWith(
      searchWeather({ city: city.name })
    ); // Pass the city name as the argument
  });
});
