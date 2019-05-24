import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


//login(email: String!, password: String!): LoginResponse!

const login_mutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      result,
      token
    }
  }
`;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit() {

  }

  async handleLogin($event: Event) {

    // login mutation
    this.apollo.mutate({
      mutation: login_mutation,
      variables: {
        email: "admin@admin.com",
        password: "pass"
      }
    }).subscribe((data) => {
      //
      console.log(data);
      this.router.navigateByUrl("/main/dashboard");
    });
  }

}
