import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public user: any;

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
  }

}
