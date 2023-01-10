import { Component } from '@angular/core';
import { DynamicFormBuilder } from 'ngx-dynamic-form-builder';
import { AddDynamicFormExample } from './models/form-dtos/dynamic-form-example/add-dynamic-form-example.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // DECLARE FORM BUILDER
  fb = new DynamicFormBuilder();

  // dynamic model adapt
  modelAdapt: any;

  constructor() {
    // CREATE FORM
    let formExample = this.fb.rootFormGroup(AddDynamicFormExample, {
      firstname: "",
      lastname: "",
      address: "",
      age: "",
      birthDay: "",
      typeBussiness: "",
      newsletterIn: "",
      suscriptionType: ""
    });
    // SET FORM MODEL
    this.modelAdapt = {
      firstname: {
        type: "text",
        label: "FirstName",
        formControl: formExample.controls['firstname']
      },
      lastname: {
        type: "text",
        label: "LastName",
        formControl: formExample.controls['lastname']
      },
      address: {
        type: "textarea",
        label: "Address",
        formControl: formExample.controls['address']
      },
      age: {
        type: "text",
        label: "Age",
        formControl: formExample.controls['age']
      },
      birthDay: {
        type: "date",
        label: "Birthday",
        formControl: formExample.controls['birthDay']
      },
      typeBussiness: {
        label: "Bussines Type",
        type: "radio",
        formControl: formExample.controls['typeBussiness'],
        options: [
          {
            label: "Enterprise",
            value: "1500",
          },
          {
            label: "Home",
            value: "6",
          },
          {
            label: "Personal",
            value: "1",
          },
        ],
      },
      newsletterIn: {
        label: "Suscribe to newsletter",
        type: "checkbox",
        formControl: formExample.controls['newsletterIn'],
      },
      suscriptionType: {
        label: "Suscription Type",
        type: "select",
        formControl: formExample.controls['suscriptionType'],
        options: [
          {
            label: "Select select",
            value: "",
          },
          {
            label: "Premium",
            value: "premium",
          },
          {
            label: "Basic",
            value: "basic",
          },
        ],
      },
    };
  }

  setFormValue(formValue: any) {
    console.log("setFormValue: " + formValue);
  }
}
