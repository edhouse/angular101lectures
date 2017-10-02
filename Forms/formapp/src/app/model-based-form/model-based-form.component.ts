import { Component, OnInit } from '@angular/core';
import { SimpleFormGroup } from "./simple-form-group";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-model-based-form',
  templateUrl: './model-based-form.component.html',
  styleUrls: ['./model-based-form.component.css']
})
export class ModelBasedFormComponent implements OnInit {

  form = new SimpleFormGroup();
  nameValue: string = "";
  data: Map<String, any> = new Map<String, any>();

  constructor() { }

  submitForm(form: NgForm) {
    if (form.valid) {
      form.reset();
    }
  }

  ngOnInit() {
  }

}
