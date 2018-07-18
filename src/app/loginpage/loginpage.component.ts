import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor() { }
  w = screen.width;
  h = screen.height;
  ngOnInit() {
    console.log(this.w);
    console.log(this.h);
  }

}
