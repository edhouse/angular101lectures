import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { SimpleFormControl } from "./simple-form-control";

export class SimpleValidator {

  equal(testVal: string) {
    return (control: FormControl): { [key: string]: any } => {
      let val = String(control.value);
      if (val != null && val != testVal) {
        return { "equal": { "equal": testVal, "actualValue": val } };
      } else {
        return null;
      }
    }
  }

}
