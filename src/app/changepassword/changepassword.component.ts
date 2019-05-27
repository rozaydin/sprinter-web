import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

const change_password_mutation = gql`
  mutation changePassword($id: ID!, $currPass: String!, $newPass: String!) {
    changePassword(id: $id, currPassword: $currPass, newPassword: $newPass)
  }
`;

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit() {
  }

  updatePassword(currPass: string, newPass: string) {

    const user = JSON.parse(sessionStorage.getItem("user"));

    this.apollo.mutate({
      mutation: change_password_mutation,
      variables: {
        id: user.id,
        currPass: currPass,
        newPass: newPass
      }
    }).subscribe(({data}) => {

      if (data.changePassword) {
        alert('Password updated successfully!');
      }
      else {
        alert('Password updated failed!');
      }       
    });
    
  }

}
