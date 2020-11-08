import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //require to use ngModel directive and to have form feature of angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
