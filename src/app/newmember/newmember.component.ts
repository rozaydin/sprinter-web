import { Component, OnInit } from '@angular/core';
import { User, UserInput, Role } from '__generated__/globalTypes';
import gql from 'graphql-tag';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

const newmember_mutation = gql`
  mutation newUser($input: UserInput!) {
    newUser(input: $input) {
      id,
      name,
      email,
      password,
      image,
      mobile,
      role,
      teamid,
      projectid
    }
  }
`;

@Component({
  selector: 'app-newmember',
  templateUrl: './newmember.component.html',
  styleUrls: ['./newmember.component.css']
})
export class NewmemberComponent implements OnInit {

  user: User;

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
  }

  create(name: string, email: string, pass: string, mobile: string, role: string) {

    const newuser: UserInput = {      
      name: name,
      email: email,
      image: null,
      mobile: mobile,
      password: pass,
      role: Role.DEV,
      companyid: this.user.companyid,
      projectid: this.user.projectid,
      teamid: this.user.teamid
    };
    //   

    this.apollo.mutate({
      mutation: newmember_mutation,
      variables: {
        input: newuser,        
      }
    }).subscribe(({ data }) => {
      console.log(data);
    });   
    
    
    
  }

}
