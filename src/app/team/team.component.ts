import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const team_query = gql`
  query getTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      sprint
      goal
      companyid
      projectid
    }
  }
`;

// const team_update_mutation = gql`
//   mutation updateTeam($id: ID!, $input: String!) {    
//   }
// `;


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input()  name: string;  
  @Input()  sprint: string;  
  @Input()  goal: string;  

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit() {

    const teamid = JSON.parse(sessionStorage.getItem("user")).teamid;

    // login mutation
    this.apollo.query({
      query: team_query,
      variables: {
        id: teamid,
      }
    }).subscribe(({ data }) => {
      const teamData = (data as any).getTeam;
      this.name = teamData.name;
      this.sprint = teamData.sprint;
      this.goal = teamData.goal;
    });
  }

  updateTeam(name: string, sprint: string, goal: string) {
    console.log(name);
    console.log(sprint);
    console.log(goal);
  }
}
