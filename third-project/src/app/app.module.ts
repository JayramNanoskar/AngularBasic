import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViewModule // need to import module prior using it
  ],
  providers: [TestService], // service need to be add here so that it becomes part of app module and can be used by components resides in app module
  bootstrap: [AppComponent]
})
export class AppModule { }
