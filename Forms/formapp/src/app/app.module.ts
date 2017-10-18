import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { BasicformComponent } from './basicform/basicform.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { ModelBasedFormComponent } from './model-based-form/model-based-form.component';
import { SimpleValidatorDirective } from "./basicform/simple-custom-validtor-directive";

@NgModule({
  declarations: [
    AppComponent,
    BasicformComponent,
    SimpleformComponent,
    ModelBasedFormComponent,
    SimpleValidatorDirective
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
