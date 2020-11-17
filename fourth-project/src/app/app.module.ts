import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // component entry
    SettingsComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // module for routing 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
