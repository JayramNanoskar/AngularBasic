//note : starting file in component(component.ts file)
import { Component, OnInit } from '@angular/core';

@Component({ // registering the component with annotation
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit { // component/class definitaion

  message: string; // member variable
  dateMessage: string;

  constructor() {
    this.message = "Welcome!!";
    setInterval(() => { // setInterval api
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }, 1000);
   }

  ngOnInit(): void {
  }

  addTwoNumbers(a: number, b: number){ // member function
    return a + b;
  }
}
