import { AbstractControl } from "@angular/forms";

export interface IDynamicAdapter {
    [key: string]: IDynamicFormModel;
}

export interface IDynamicFormModel {
    label: string;
    // text, number, etc. (input tag), checkbox, radio, textarea
    type: string;
    formControl: AbstractControl,
    // DROPDOWN, CHECKBOX
    options?: {
        label: string;
        value: string;
    }[];
}