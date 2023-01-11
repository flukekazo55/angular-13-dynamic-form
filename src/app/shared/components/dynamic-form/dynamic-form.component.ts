import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { getFormControlsFields } from 'src/app/utils/form-generate';

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
    const formGroupFields = getFormControlsFields(this.model);
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  submitForm() {
    if (this.dynamicFormGroup.valid) {
      this.formValue.emit(this.dynamicFormGroup.getRawValue());
    } else {
      this.dynamicFormGroup.markAllAsTouched();
    }
  }
}
