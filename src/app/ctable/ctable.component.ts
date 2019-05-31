import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-ctable',
  templateUrl: './ctable.component.html',
  styleUrls: ['./ctable.component.css']
})
export class CtableComponent implements OnInit {

  @Input("collection") collection: Array<any>
  @Input("fields") fields: Array<string>
  @Input("deleteHandler") deleteHandler: (id: string) => void;
  @Input("updateRoute") updateRoute: string;

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit() {
  }  

  update(id: string) {
    this.router.navigate([this.updateRoute, id]);
  }

}
