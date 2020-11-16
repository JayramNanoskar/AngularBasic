import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-comp',
  templateUrl: './view-comp.component.html',
  styleUrls: ['./view-comp.component.css']
})
export class ViewCompComponent implements OnInit {
  userName: string = "";
  resp: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.userName);
    this.http.get("https://api.github.com/users/"+ this.userName)
    .subscribe((response) => {
      this.resp = response;
      console.log(this.resp)
    });
  }

}
