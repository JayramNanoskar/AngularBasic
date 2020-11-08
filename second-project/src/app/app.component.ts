import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User; // member variable

  constructor(){
    this.user = new User(); //creating new instance and populating data
    this.user.name = "Foo Bar",
    this.user.designation = "Software Developer",
    this.user.address = "Mumbai, India",
    this.user.phone = [
      "9876465783",
      "7897654536"
    ]
  }
}
