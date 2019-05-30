import { Component } from '@angular/core';
import { CountriesService } from './countries.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'country',
  templateUrl: './countries.component.html'
})
export class CountriesComponent{
  private result:any;
  private countriesSubscribe:any;
  constructor(private _service:CountriesService){}
  ngOnInit(){
    this.countriesSubscribe=this._service.getCountries().subscribe(this._successCallBack,this._errorCallBack);
  }
  public _successCallBack=(res)=>{
    this.result=res;
  }
  public _errorCallBack=(err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
      console.log("Server side error...!!!");
    }else{
      console.log("Client Side Error...!!!")
    }
  }
  ngOnDestroy(){
    this.countriesSubscribe.unsubscribe();
  }
}