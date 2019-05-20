import { Component, OnInit } from '@angular/core';
import { Person } from "../model/Person";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentSprint: string;
  sprintGoal: string;
  onduty: Array<Person>;

  constructor() {
  }

  ngOnInit() {
    this.currentSprint = "48";
    this.sprintGoal = "Implement he bricks";
    this.onduty = [new Person("Ridvan Ozaydin"), new Person("Batuhan Eke")];
  }

}
