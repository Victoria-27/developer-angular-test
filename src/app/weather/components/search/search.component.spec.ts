import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ ReactiveFormsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit searchCity event with the entered city when search button is clicked', () => {
    const city = 'London';
    spyOn(component.searchCity, 'emit');
    const inputElement = fixture.nativeElement.querySelector('input');
    const buttonElement = fixture.nativeElement.querySelector('button');

    inputElement.value = city;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    buttonElement.click();

    expect(component.searchCity.emit).toHaveBeenCalledWith(city);
  });
});
