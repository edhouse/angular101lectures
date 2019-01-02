import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

export class SimpleFormControl extends FormControl {

  // Label for the element
  _label:string = '';

  // model property name
  _modelProperty:string = '';

  constructor(label: string, property: string, value: any, validator: any) {
    super(value, validator);
    this._label = label;
    this._modelProperty = property;
  }

  get modelProperty(): string{
    return this._modelProperty;
  }

  get label(): string{
    return this._label;
  }

}
