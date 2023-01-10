import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() model: {};
  @Output() formValue = new EventEmitter();

  // FORM DATA
  fields = [];
  dynamicFormGroup: FormGroup;

  ngOnInit() {
    this.buildForm();

    this.dynamicFormGroup.valueChanges.subscribe((res) => {
      // DO SOME THING WHEN FORM CHANGE
    })
  }

  buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  getFormControlsFields() {
    // ADAPT VERSION
    const formGroupFields = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      formGroupFields[field] = this.model[field].formControl;
      this.fields.push({ ...fieldProps, fieldName: field });
    }
    return formGroupFields;
  }

  addValidator(rules: any) {
    if (!rules) {
      return [];
    }
    const validators = Object.keys(rules).map((rule) => {
      switch (rule) {
        case "required": return Validators.required;
      }
      return null
    });
    return validators;
  }

  submitForm() {
    if (this.dynamicFormGroup.valid) {
      this.formValue.emit(this.dynamicFormGroup.getRawValue());
    } else {
      this.dynamicFormGroup.markAllAsTouched();
    }
  }
}
