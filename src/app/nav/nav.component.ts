import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  role: string;

  constructor() { }

  ngOnInit() {
    this.role = JSON.parse(sessionStorage.getItem("user")).role;
  }

}
