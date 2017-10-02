import { Component, OnInit } from '@angular/core';
import { FormModel } from "../model/form-model";

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {

  model: FormModel = new FormModel();  

  constructor() { }

  ngOnInit() {
  }

}
