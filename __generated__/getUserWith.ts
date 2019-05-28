/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserWith
// ====================================================

export interface getUserWith_getUserWith {
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

export interface getUserWith {
  getUserWith: (getUserWith_getUserWith | null)[];
}

export interface getUserWithVariables {
  field: string;
  value: string;
}
