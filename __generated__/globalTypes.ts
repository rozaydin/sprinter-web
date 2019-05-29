/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Role {
  ADMIN = "ADMIN",
  DEV = "DEV",
  PO = "PO",
}

export interface TeamInput {
  name: string;
  sprint?: string | null;
  goal?: string | null;
  companyid: string;
  projectid: string;
}

export interface UserInput {
  name: string;
  email: string;
  password?: string | null;
  image?: string | null;
  mobile?: string | null;
  role?: Role | null;
  teamid: string;
  projectid: string;
  companyid: string;
}

export interface User {  
  id: string;
  name: string;
  email: string;
  password: string | null;
  image: string | null;
  mobile: string | null;
  role: string;
  companyid: string;
  teamid: string;
  projectid: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
