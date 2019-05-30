import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './countries.service';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountriesComponent } from './countries.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CountriesComponent ],
  providers: [ CountriesService ],
  bootstrap:    [ CountriesComponent ]
})
export class AppModule { }
