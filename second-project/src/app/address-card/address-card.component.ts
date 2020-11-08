import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;

  constructor() { 
    this.user = {
      name: "Foo Bar",
      title: "Software Developer",
      address: "Mumbai, India",
      phone: [
        "9998765432",
        "8978654753"
      ] 
    };
  }

  ngOnInit(): void {
  }

}
