/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface TeamInput {
  name: string;
  sprint?: string | null;
  goal?: string | null;
  companyid: string;
  projectid: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================



export interface User {
  id: string
  name: string
  email: string
  password: string
  image: string
  mobile: string
  role: string
  teamid: string
  projectid: string
  companyid: string
}