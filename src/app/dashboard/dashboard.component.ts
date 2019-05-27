import { Component, OnInit } from '@angular/core';
import { Person } from "../model/Person";
import gql from 'graphql-tag';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

const team_query = gql`
  query getTeam($id: ID!) {
    getTeam(id: $id) {
      id,
      name,
      sprint,
      goal,
      companyid,
      projectid      
    }
  }
`;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentSprint: string;
  sprintGoal: string;
  onduty: Array<Person>;

  constructor(private router: Router, private apollo: Apollo) {
  }

  ngOnInit() {
    //
    const user = JSON.parse(sessionStorage.getItem("user"));

    this.apollo.query({
      query: team_query,
      variables: {
        id: user.teamid
      }
    }).subscribe(({data}) => {
      const teamResponse = (data as any).getTeam;      
      this.currentSprint = teamResponse.sprint;
      this.sprintGoal = teamResponse.goal;
    });
    
    this.onduty = [new Person("Ridvan Ozaydin"), new Person("Batuhan Eke")];
  }

}
