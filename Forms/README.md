# Angular - Forms

- angular supports form handling in core
- adding a form module

${PROJECT_FOLDER}/package.json
```
    "dependencies": {
      ...,
      "@angular/forms": "2.2.0",
      ...
      }
```
${PROJECT_FOLDER}/src/app/app.module.ts
```
    import { FormsModule} from "@angular/forms";
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,FormModule
      ],})
```

## Simple form processing
- form is mapped to model object
- inputs use two-way binding to model attributes (all inputs need name - used by validation system to identify element)
- novalidate attribute blocks native browser validation ( could be inconsistent across implementations)
- ngSubmit is convention to handle form submit
```
    <form novalidate (ngSubmit)="submit(model)">
        <input type="text" name="name" [(ngModel)]="model.name">
        <input type="text" name="surname" [(ngModel)]="model.surname">
        <button type="submit">Submit</button>
    </form>
```

## Form Data Validation
- angular form validation stands on HTML 5 basics
- 4 built-in validation attributes
- form validation features works only inside form element

| validator attribute  |  |
| --------- | ----------------------- |
| required  | value must be provided  |
| minlength | minimum number of chars |
| maxlength | maximum number of chars |
| pattern   | regex to validate input |

## Validation classes
- angular assign validation class membership according the validation features
- 3 pairs of validation classes

| class |                       |
| ----------------------- | ---------------------------------------------------------------------------------- |
| ng-touched ng-untouched | ng-touched is assigned after the element was visited by user                       |
| ng-pristine ng-dirty    | ng-pristine is assigned if user does not edit the element                          |
| ng-valid ng-invalid     | ng-valid is assigned if the element meets the criteria defined by validation rules |

## Display validation messages
- create template reference variable - #variableName (means exportAs - this way you can export)
- assign ngModel to this variable = validation object
    <input type="Text" [(ngModel)]="product.color" #color="ngModel" required pattern="[a-Z]{1,}"/> 
- for the message render use ngIf directive
    <ul *ngIf="color.dirty && color.invalid">
      <li *ngIf="color.errors.required">
         The field is required.
      </li>
        <li *ngIf="color.errors.pattern">
         Only letters are allowed.
      </li>
    </ul>
- errors property created only if there is validation rules violation
    <span *ngIf="color.errors?.required" >This field is required.</span>
- validation messages/object could be processed in template function
## Validation object properties

| path      | name of the element                                                          |
| --------- | ---------------------------------------------------------------------------- |
| valid     | true if element value meets validation criteria                              |
| invalid   | true if element value does not meet the validation criteria                  |
| pristine  | true if element contents have not been changed                               |
| dirty     | true if element contents have been changed                                   |
| touched   | true if element has been visited by user                                     |
| untouched | true if element has not been visited by user                                 |
| errors    | returns object whose properties correspond to attribute for which is invalid |
| value     | returns value of element (used when defining custom validation rules)        |



## Validating entire form
- export the directive into a local template variable using `ngForm` as the key (ex: `#myForm="ngForm"`)
- the object contains methods to check the validation status and reset form to be used again
```
    <form novalidate #form="ngForm" (ngSubmit)="submitForm(form)">...</form>
```
- to access the form inputs “controls” property is used
```
    getFormValidationMessages(form:NgForm){
      Object.keys(form.controls).forEach(k=> {
          /// k is the name of input
          /// get validation errors by accessing controls[k]
      });
    }
```
- disabling the submit button
```
    <button type="submit" [disabled]="form.invalid" >OK</button>
```




# Model Based Forms
- details and validation are all defined in code
- requires ReactiveFormsModule

```
    import { NgModule } from "@angular/core";
    import { BrowserModule } from "@angular/platform-browser";
    import { ProductComponent } from "./component";
    import { FormsModule, ReactiveFormsModule } from "@angular/forms";
    @NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [],
    bootstrap: []
    })
    export class AppModule {}
```
    


## Form model classes
- classes to describe form - FormControl, FormGroup
- handle as much as possible in code
```
    import { FormControl, FormGroup, Validators } from "@angular/forms";
      export class MyFormControl extends FormControl {
      label: string;
      modelProperty: string;
      
      constructor(label:string, property:string, value: any, validator: any) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
      }
    }
    
    export class MyFormGroup extends FormGroup {
      constructor() {
        super({
          name: new MyFormControl("Name", "name", "", Validators.required)
        });
      }
    }
```

## Include in template
- by mapping the form group [formGroup]
```
    <form novalidate [formGroup]="form" (ngSubmit)="submitForm(form)">
        <input name="name" [(ngModel)]="nameValue" formControlName="first" />
    </form>
```
    
## Generate from model
- generate from collection of FormControls objects
- example → custom label and modelProperty name

```
    <div class="form-group" *ngFor="let control of form.generatedControls">
            <label>{{control.label}}</label> 
            <input [(ngModel)]="data[control.modelProperty]" name="{{control.modelProperty}}" formControlName="{{control.modelProperty}}" />
    </div>
```

## Model Based Forms - Validators
- same as the ones in templates
- the class Validators from @angular/forms contains the built-in validators (required,minLength,maxLength,pattern)
- Validators.compose method allows to compose multiple validators to one 

## Obtain validation messages
- the errors could also be checked and obtained in code
- this.errors is the collection of form errors

```
    export class ProductFormControl extends FormControl {
      getValidationMessages() {
        let messages: string[] = [];
        if (this.errors) {
          for (let errorName in this.errors) {
            switch (errorName) {
              case "required":
                messages.push(`You must enter a ${this.label}`);
              break;
              }
            }
          }
        return messages;
      }
    }
```

## Custom validator
- factories that create functions used to perform validation
- return null for valid values
- return an object that contains details of the error for invalid values

```
    import { FormControl } from "@angular/forms";
    export class LimitValidator {
        static Limit(limit:number) {
            return (control:FormControl) : {[key: string]: any} => {
                let val = Number(control.value);
                if (val != NaN && val > limit) {
                    return {"limit": {"limit": limit, "actualValue": val}};
                } else {
                    return null;
                }
    } }
    }
```


## Apply the custom validator
- multiple validators via Validators.compose
- single as builtin
    Validators.compose([Validators.required,LimitValidator.Limit(100)]);


## Custom validator directive
- validation via directive

```
    @Directive({
      selector: '[custom]',
      providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
    })
    class CustomValidatorDirective implements Validator {
      validate(c: Control): {[key: string]: any} {
        return {"custom": true};
      }
    }
```