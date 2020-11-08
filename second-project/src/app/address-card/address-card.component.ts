import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  @Input('name') userName: string; // input member variable, will be getting from view
  @Input('user') userObj: User;
  isCollapsed: boolean = true;

  constructor() { 
  }

  ngOnInit(): void { // one of the lifecycle hook in angular
    this.user = {
      name: this.userObj.name,
      title: this.userObj.designation,
      address: this.userObj.address,
      phone: this.userObj.phone
    };
  }

  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }

}
