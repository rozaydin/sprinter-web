/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: newUser
// ====================================================

export interface newUser_newUser {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  password: string | null;
  image: string | null;
  mobile: string | null;
  role: string;
  teamid: string;
  projectid: string;
}

export interface newUser {
  newUser: newUser_newUser;
}

export interface newUserVariables {
  input: UserInput;
}
