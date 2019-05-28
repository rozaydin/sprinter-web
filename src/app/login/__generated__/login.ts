/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  image: string | null;
  role: string;
  mobile: string | null;
  teamid: string;
  projectid: string;
  companyid: string;
}

export interface login_login {
  __typename: "LoginResponse";
  result: boolean;
  token: string | null;
  user: login_login_user | null;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  email: string;
  password: string;
}
