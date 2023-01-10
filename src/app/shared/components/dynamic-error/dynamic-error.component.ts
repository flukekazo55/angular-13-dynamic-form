import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { DynamicFormControl } from 'ngx-dynamic-form-builder';

@Component({
  selector: 'app-dynamic-error',
  templateUrl: './dynamic-error.component.html',
  styleUrls: ['./dynamic-error.component.scss']
})
export class DynamicErrorComponent implements OnInit {
  formGroup: FormGroup;
  @Input() fieldName: string;

  constructor(private formgroupDirective: FormGroupDirective) { }

  ngOnInit() {
    this.formGroup = this.formgroupDirective.control;
  }

  checkFormInValid(){
    return this.formGroup.controls[this.fieldName].invalid && 
      (this.formGroup.controls[this.fieldName].dirty || this.formGroup.controls[this.fieldName].touched);
  }

  getErrorText() {
    const formError = this.formGroup.controls[this.fieldName] as DynamicFormControl;
    const errorText = formError.customValidateErrors.value[this.fieldName];
    return errorText ? errorText[0] : "";
  }
}
