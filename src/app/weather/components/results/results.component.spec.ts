import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultsComponent } from './results.component';
import { By } from '@angular/platform-browser';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize searchResult from localStorage', () => {
    const initialSearchResult = [{ name: 'City 1', forecast: { first: 1, second: 2, third: 3, fourth: 4 } }];
    localStorage.setItem('searchResult', JSON.stringify(initialSearchResult));

    fixture.detectChanges();

    expect(component.searchResult).toEqual(initialSearchResult);
  });

    it('should display searchResult', () => {
    const initialSearchResult = [{ name: 'City 1', forecast: { first: 1, second: 2, third: 3, fourth: 4 } }];
    localStorage.setItem('searchResult', JSON.stringify(initialSearchResult));

    fixture.detectChanges();

    const searchResultElement = fixture.debugElement.query(By.css('.search-result'));
    expect(searchResultElement.nativeElement.textContent).toContain('City 1');
    });
});
