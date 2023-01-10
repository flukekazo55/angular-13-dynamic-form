import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './shared/components/dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './shared/components/dynamic-field/dynamic-field.component';
import { DynamicCheckboxComponent } from './shared/components/dynamic-field/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicRadioComponent } from './shared/components/dynamic-field/dynamic-radio/dynamic-radio.component';
import { DynamicSelectComponent } from './shared/components/dynamic-field/dynamic-select/dynamic-select.component';
import { DynamicInputComponent } from './shared/components/dynamic-field/dynamic-input/dynamic-input.component';
import { DynamicErrorComponent } from './shared/components/dynamic-error/dynamic-error.component';
import { DynamicTextareaComponent } from './shared/components/dynamic-field/dynamic-textarea/dynamic-textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFieldComponent,
    DynamicCheckboxComponent,
    DynamicRadioComponent,
    DynamicSelectComponent,
    DynamicInputComponent,
    DynamicErrorComponent,
    DynamicTextareaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
