import { FormControl } from "@angular/forms";

export function getFormControlsFields(formModels: any) {
    let fields = [];
    const formGroupFields: any = {};
    for (const field of Object.keys(formModels)) {
        const fieldProps = formModels[field];
        formGroupFields[field] = new FormControl(fieldProps.value);
        fields.push({ ...fieldProps, fieldName: field });
    }
    return formGroupFields;
}