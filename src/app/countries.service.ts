import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CountriesService{
  constructor(private _http:HttpClient){};
  public getCountries():any{
    this._http.get("https://restcountries.eu/rest/v2/all");
  }
}