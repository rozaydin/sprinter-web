import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { User } from "../../../__generated__/globalTypes";

const member_query = gql`
  query getUserWith($field: String!, $value: String!) {
    getUserWith(field: $field, value: $value) {
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

const delete_user_mutation = gql`
mutation deleteUser($id: ID!) {
  deleteUser(id: $id)
}
`;

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members: Array<User>;

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit() {

    const user = JSON.parse(sessionStorage.getItem("user"));

    this.apollo.query({
      query: member_query,
      variables: {
        field: "teamid",
        value: user.teamid
      }
    }).subscribe(({ data }) => {
      this.members = (data as any).getUserWith;
    });
  }

  deleteUser(userId: string) {

    this.apollo.mutate({
      mutation: delete_user_mutation,
      variables: {
        id: userId
      }
    }).subscribe(({ data }) => {
      const result = data.deleteUser;
      alert("User Delete operation result: " + result);
    });
  }

  updateUser(userId: string) {

  }

}
