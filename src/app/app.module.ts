import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from './countries.service';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountriesComponent } from './countries.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ AppComponent, HelloComponent, CountriesComponent ],
  imports:      [ BrowserModule, FormsModule,HttpClientModule, CommonModule ],
  providers: [ CountriesService ],
  bootstrap:    [ CountriesComponent ]
})
export class AppModule { }
