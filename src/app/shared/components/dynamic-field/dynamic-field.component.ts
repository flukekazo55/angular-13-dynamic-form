import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent implements OnInit {
  formGroup: FormGroup;
  @Input() field: any;

  constructor(private formgroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.formGroup = this.formgroupDirective.control;
  }
}
