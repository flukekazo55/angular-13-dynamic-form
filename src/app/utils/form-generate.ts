import { FormControl } from "@angular/forms";

export function getFormControlsFields(formModels: any) {
    let fields = [];
    // ADAPT VERSION
    const formGroupFields = {};
    for (const field of Object.keys(formModels)) {
      const fieldProps = formModels[field];
      formGroupFields[field] = formModels[field].formControl;
      this.fields.push({ ...fieldProps, fieldName: field });
    }
    return formGroupFields;
}