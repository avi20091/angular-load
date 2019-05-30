import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CustomerSrvice{
  constructor(private _http:HttpClient){};
  public getCustomer():any{
    this._http.get("https://restcountries.eu/rest/v2/all");
  }
}