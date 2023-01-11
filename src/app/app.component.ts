import { Component } from '@angular/core';
import { DynamicFormBuilder, DynamicFormGroup } from 'ngx-dynamic-form-builder';
import { IDynamicAdapter } from './models/form-dtos/dynamic-adapter.interface';
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
  modelAdapt: IDynamicAdapter;
  // form
  form: DynamicFormGroup<AddDynamicFormExample>;

  constructor() {
    // CREATE FORM
    this.form = this.fb.rootFormGroup(AddDynamicFormExample, {
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
        formControl: this.form.controls['firstname']
      },
      lastname: {
        type: "text",
        label: "LastName",
        formControl: this.form.controls['lastname']
      },
      address: {
        type: "textarea",
        label: "Address",
        formControl: this.form.controls['address']
      },
      age: {
        type: "text",
        label: "Age",
        formControl: this.form.controls['age']
      },
      birthDay: {
        type: "date",
        label: "Birthday",
        formControl: this.form.controls['birthDay']
      },
      typeBussiness: {
        label: "Bussines Type",
        type: "radio",
        formControl: this.form.controls['typeBussiness'],
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
        formControl: this.form.controls['newsletterIn'],
      },
      suscriptionType: {
        label: "Suscription Type",
        type: "select",
        formControl: this.form.controls['suscriptionType'],
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
    console.log(this.form);
  }
}
