import { Component, OnInit } from '@angular/core';
import { FormModel } from "../model/form-model";
import { NgForm } from "@angular/forms/forms";

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent {

  model: FormModel = new FormModel();
  passwordTest:string;


  constructor() {
  }


  getFormValidationMessages(form: NgForm) : String[]{
    let formErrors : String[]= [];
    Object.keys(form.controls).forEach(k => {
      if(form.controls[k].errors != null){
        formErrors.push(`${k} is invalid`);
      }
    });
    return formErrors;
  }

  submit(model: NgForm) {
  }

}
