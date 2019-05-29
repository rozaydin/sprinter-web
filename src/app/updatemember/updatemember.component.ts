import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { User, UserInput } from '__generated__/globalTypes';

const member_query = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id,
      name,
      email,
      password,
      image,
      mobile,
      role,      
      companyid,
      projectid,
      teamid
    }
  }
`;

const update_user_mutation = gql`
mutation updateUser($id: ID!, $input: UserInput!) {
  updateUser(id: $id, input: $input)
}
`;

@Component({
  selector: 'app-updatemember',
  templateUrl: './updatemember.component.html',
  styleUrls: ['./updatemember.component.css']
})
export class UpdatememberComponent implements OnInit {

  userId: string;
  user: User;

  constructor(private router: ActivatedRoute, private apollo: Apollo) { }

  ngOnInit() {
    this.userId = this.router.snapshot.paramMap.get("id");
    // retrieve user 
    this.apollo.query({
      query: member_query,
      variables: {
        id: this.userId
      }
    }).subscribe(({ data }) => {
      this.user = (data as any).getUser;
    });
  }

  update(name: string, email: string, password: string, mobile: string) {

    const userInput: UserInput = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      companyid: this.user.companyid,
      projectid: this.user.projectid,
      teamid: this.user.teamid
    }

    this.apollo.mutate({
      mutation: update_user_mutation,
      variables: {
        id: this.userId,
        input: userInput
      }

    }).subscribe(({ data }) => {
      const response = data.updateUser;
      alert("user update operation result: " + response);
    });

  }

}
