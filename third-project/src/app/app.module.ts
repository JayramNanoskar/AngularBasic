import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViewModule // need to import module prior using it
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
