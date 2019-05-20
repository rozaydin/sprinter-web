import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async handleLogin($event: Event) {
    const result = await this.router.navigateByUrl("/main/dashboard");    
    console.log("navigated with success: " + result);
  }

}