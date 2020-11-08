//note : starting file in component(component.ts file)
import { Component, OnInit } from '@angular/core';

@Component({ // registering the component with annotation
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit { // component/class definitaion

  message: string = "Welcome!!"; // member variable
  date: string = new Date().toDateString();

  constructor() { }

  ngOnInit(): void {
  }

}
