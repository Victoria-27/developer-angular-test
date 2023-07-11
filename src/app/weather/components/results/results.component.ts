import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { ForecastObj } from "src/app/model/weather";


@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
})
export class ResultsComponent implements OnChanges, OnInit {
  @Input() cities: any | undefined;
  @Input() weatherError: any | undefined;
 searchResult: string | any;


  constructor() {}
  ngOnInit(): void {
    let initialSearchResult = localStorage.getItem('searchResult')
    this.searchResult = initialSearchResult ? JSON.parse(initialSearchResult) : []
  }

  ngOnChanges() {
    if (this.cities) {
      let forecastObj: ForecastObj = {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
      };
      this.cities.list.forEach((element: any) => {
        let time = element.dt_txt.split(" ")[1].split(":")[0];
        switch (time) {
          case "06":
            forecastObj.first = element.main.temp;
            break;
          case "12":
            forecastObj.second = element.main.temp;
            break;
          case "18":
            forecastObj.third = element.main.temp;
            break;
          case "00":
            forecastObj.fourth = element.main.temp;
            break;
          default:
            break;
        }
      });
      let currentSearchResult = [...this.searchResult]
      let itemIndex = currentSearchResult.findIndex((item: any) => item.name === this.cities.city.name)
      if(itemIndex === -1) {
        currentSearchResult.unshift({ name: this.cities.city.name, forecast: forecastObj })
      } else {
        currentSearchResult.splice(itemIndex, 1);
        currentSearchResult.unshift({ name: this.cities.city.name, forecast: forecastObj })
      }
      localStorage.setItem('searchResult', JSON.stringify(currentSearchResult))
      this.searchResult = currentSearchResult
    }
  }

  delete (name: string) {
    const confirmDelete = confirm('Are you sure you want to delete this item?')
    if(confirmDelete) {

    let currentSearchResult = [...this.searchResult]
    let itemIndex = currentSearchResult.findIndex((item: any) => item.name === name)
    currentSearchResult.splice(itemIndex, 1);
    localStorage.setItem('searchResult', JSON.stringify(currentSearchResult))
    this.searchResult = currentSearchResult
  }
}

clearTable() {
  const confirmClear = confirm('Are you sure you want to clear the table?')
  if(confirmClear) {
  localStorage.removeItem('searchResult')
  this.searchResult = []
}
}
}
