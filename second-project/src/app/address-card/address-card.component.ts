import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  @Input('name') userName: string; // input member variable, will be getting from view
  
  constructor() { 
  }

  ngOnInit(): void { // one of the lifecycle hook in angular
    this.user = {
      name: this.userName,
      title: "Software Developer",
      address: "Mumbai, India",
      phone: [
        "9998765432",
        "8978654753"
      ] 
    };
  }

}
