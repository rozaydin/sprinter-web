import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const login_mutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      result,
      token,
      user {
        id,
        name,
        email,
        image,
        role,
        mobile,
        teamId,
        projectId,
        companyId
      }
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
        email: "ridvan.ozaydin@siemens.com",
        password: "password"
      }
    }).subscribe(({ data }) => {
      const loginResponse = data.login;
      // store in session storage
      if (loginResponse.result == true) {
        sessionStorage.setItem("token", loginResponse.token);
        sessionStorage.setItem("user", JSON.stringify(loginResponse.user));
        this.router.navigateByUrl("/main/dashboard");
      }
    });
  }

}
