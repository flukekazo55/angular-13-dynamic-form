import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss']
})
export class DynamicSelectComponent {
  @Input() field: any;
  @Input() formGroup: FormGroup;

  checkFormValid(){
    return this.formGroup.controls[this.field.fieldName].valid && 
      (this.formGroup.controls[this.field.fieldName].dirty || this.formGroup.controls[this.field.fieldName].touched);
  }

  checkFormInValid(){
    return this.formGroup.controls[this.field.fieldName].invalid && 
      (this.formGroup.controls[this.field.fieldName].dirty || this.formGroup.controls[this.field.fieldName].touched);
  }
}
