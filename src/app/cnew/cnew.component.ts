import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpperCasePipe } from "@angular/common";
import { FormConf, FormControlConf } from './FormConf';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-cnew',
  templateUrl: './cnew.component.html',
  styleUrls: ['./cnew.component.css']
})
export class CnewComponent implements OnInit {

  @Input("form") form: FormConf;// pass prototype or not initialized object here
  @Input("handler") handler: (object: object) => boolean;

  formFields: Array<string>;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private apollo: Apollo) {
  }

  ngOnInit() {
    const groupConfig = {};
    this.formFields = Object.keys(this.form);
    this.formFields.forEach((prop => {
      const _: FormControlConf = this.form[prop];
      groupConfig[prop] = [_.value, _.validators]; // value, syncValidators, asyncValidators
    }));

    this.formGroup = this.fb.group(groupConfig);
  }

  formHandler(event: Event) {
    const response = this.handler(this.formGroup.value);
    alert('Operation result is: ' + response);
  }

}
