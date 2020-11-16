import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private srv: TestService){ // Dependency injection using constructor arguments and get hold on it using member variable
    // let srv = new TestService(); // need to create instance of a require service here but other alternative is there i.e. Dependency injection(asking framework to provide instance) as above inside constructor
    srv.printToConsole("Welcome!!");
  }
}
