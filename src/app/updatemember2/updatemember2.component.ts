import { Component, OnInit } from '@angular/core';
import { FormConf, InputType } from '../cnew/FormConf';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { User, Role, UserInput } from '__generated__/globalTypes';
import gql from 'graphql-tag';

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
  selector: 'app-updatemember2',
  templateUrl: './updatemember2.component.html',
  styleUrls: ['./updatemember2.component.css']
})
export class Updatemember2Component implements OnInit {

  userId: string;
  user: User;
  loaded: boolean;

  readonly form: FormConf =
    {
      name: { inputtype: InputType.text, validators: [Validators.required] },
      email: { inputtype: InputType.email, validators: [Validators.required, Validators.email] },
      password: { inputtype: InputType.password, validators: [Validators.required] },
      image: { inputtype: InputType.text },
      mobile: { inputtype: InputType.tel },
      role: { inputtype: InputType.text, validators: [Validators.required] }
    }

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
      // populate form values
      this.form["name"].value = this.user.name;
      this.form["email"].value = this.user.email;
      this.form["password"].value = this.user.password;
      this.form["image"].value = this.user.image;
      this.form["mobile"].value = this.user.mobile;
      this.form["role"].value = this.user.role;
      this.loaded = true;
    });
  }

  updateMember(member: Member): boolean {

    // get current user
    const currentUser: User = JSON.parse(sessionStorage.getItem('user'));
    this.userId = this.router.snapshot.paramMap.get("id");

    // extends member with required properties to make it UserInput
    member["teamid"] = currentUser.teamid;
    member["companyid"] = currentUser.companyid;
    member["projectid"] = currentUser.projectid;

    const userInput: UserInput = {
      name: member.name,
      email: member.email,
      password: member.password,
      mobile: member.mobile,
      companyid: currentUser.companyid,
      projectid: currentUser.projectid,
      teamid: currentUser.teamid
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
    
    return true;
  }

}

interface Member {
  name: string,
  email: string,
  password: string,
  image: string,
  mobile: string,
  role: Role
}
