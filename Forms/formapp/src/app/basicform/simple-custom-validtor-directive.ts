import { Component, OnInit, forwardRef, Directive, Attribute } from '@angular/core';
import { FormGroup, Validators, FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
  selector: '[equal]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => SimpleValidatorDirective), multi: true }
  ]
})
export class SimpleValidatorDirective implements Validator {
  equal: string;
  constructor( @Attribute('equal') public equalInput: string) {
    this.equal = equalInput;
  }

  validate(c: FormControl): { [key: string]: any } {
    let v = c.value;

    // control vlaue
    let e = c.root.get(this.equal);

    console.log(`Validating ${v} against ${e}`);


    // value not equal
    if (e && v !== e.value) {
      return {
        validateEqual: false
      }
    } else if (e && e.errors != null) {
      delete e.errors['validateEqual'];
      if (!Object.keys(e.errors).length) e.setErrors(null);
    }

    return null;
  }


}
