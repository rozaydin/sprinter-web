import { Component, OnInit } from '@angular/core';
import { User, UserInput, Role } from '__generated__/globalTypes';
import { Validators, FormControl } from '@angular/forms';
import { FormControlConf, FormConf, InputType } from "../cnew/FormConf";
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

  // form data for new member
  readonly form: FormConf =
    {
      name: { inputtype: InputType.text, validators: [Validators.required] },
      email: { inputtype: InputType.email, validators: [Validators.required, Validators.email] },
      password: { inputtype: InputType.password, validators: [Validators.required] },
      image: { inputtype: InputType.text },
      mobile: { inputtype: InputType.tel },
      role: { inputtype: InputType.text, validators: [Validators.required] }
    }

  constructor(private router: Router, private apollo: Apollo) {
  }

  ngOnInit() {
  }

  // this function is executed in another context
  newMember(newMember: Member) {

    // get current user
    const currentUser: User = JSON.parse(sessionStorage.getItem('user'));

    // extends member with required properties to make it UserInput
    newMember["teamid"] = currentUser.teamid;
    newMember["companyid"] = currentUser.companyid;
    newMember["projectid"] = currentUser.projectid;

    this.apollo.mutate({
      mutation: newmember_mutation,
      variables: {
        input: newMember,        
      }
    }).subscribe(({ data }) => {
      console.log(data);
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
