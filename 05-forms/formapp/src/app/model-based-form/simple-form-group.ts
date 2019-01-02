import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from "@angular/forms";
import { SimpleFormControl } from "./simple-form-control";

export class SimpleFormGroup extends FormGroup {

  constructor() {
    super({
      first: new SimpleFormControl("Name", "name", "", Validators.required),
      age: new SimpleFormControl("Age", "age", "", Validators.required),
      education: new SimpleFormControl("Education", "education", "", Validators.maxLength(20)),
    })
  }

  // Generated collection of form controls
  get generatedControls(): SimpleFormControl[] {
    let output = Object.keys(this.controls).filter(k => k != "first").map(k => this.controls[k] as SimpleFormControl)
    console.log(output);
    return output;
  }


}
