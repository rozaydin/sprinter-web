/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTeam
// ====================================================

export interface getTeam_getTeam {
  __typename: "Team";
  id: string;
  name: string;
  sprint: string | null;
  goal: string | null;
  companyid: string;
  projectid: string;
}

export interface getTeam {
  getTeam: getTeam_getTeam;
}

export interface getTeamVariables {
  id: string;
}
