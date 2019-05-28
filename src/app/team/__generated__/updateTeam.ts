/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TeamInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateTeam
// ====================================================

export interface updateTeam_updateTeam {
  __typename: "Team";
  id: string;
  name: string;
  sprint: string | null;
  goal: string | null;
  companyid: string;
  projectid: string;
}

export interface updateTeam {
  updateTeam: updateTeam_updateTeam;
}

export interface updateTeamVariables {
  id: string;
  input: TeamInput;
}
