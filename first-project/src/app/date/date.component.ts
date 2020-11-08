//note : starting file in component(component.ts file)
import { Component, OnInit } from '@angular/core';

@Component({ // registering the component with annotation
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit { // component/class definitaion

  constructor() { }

  ngOnInit(): void {
  }

}
