# Angular - Pipes

- Data Transformer usable in templates, interpolation expression and also in code
- Character of “I” is used in template to involve data transformation
- Multiple “pipes” can by used at once in similar fashion as concatenation of commands in Unix like systems
## Showcase of basic usage with JSON pipe

Usage in view template:

    <span>{{data | json}}</span>

Usage in interpolation expression:

    <span [textContent] = "data | json"></span>

Usage in code (used pipe must be added to providers in module or component):

    ...
      const data: Array<any> = [{id:1,name:"google"}, {id:2,name:"bing"}];
      dataAsJson: string;
        
        //Pipe injection
        constructor(jsonPipe: JsonPipe) {
          //transform data
          this.dataAsJson = jsonPipe.transform(data); 
    }
## Other built in pipes
- slice - `{from}:{to}`
    <span>{{'Edhouse' | slice:3:5}}</span>
    <!-- ou -->
- uppercase
    <span>{{'Edhouse' | uppercase}}</span>
    <!-- EDHOUSE -->
- lowercase
    <span>{{'Edhouse' | lowercase}}</span>
    <!-- edhouse -->
- titlecase
    <span>{{'edhouse' | titlecase}}</span>
    <!-- Edhouse -->
- number -  `{integerDigits}.{minFractionDigits}-{maxFractionDigits}`
  - output depends on browser locale
    <span>{{'1250' | number: '.2'}}</span>
    <!-- 1,250.00 -->
- percent
    <span>{{'12.5' | percent: '.2'}}</span>
    <!-- 12.50% -->
- currency - `{ISO code}:{enable symbol}:{number format}`
    <span>{{12.5 | currency:'EUR':true:'.3'}}<span>
    <!-- €12.500 -->
- date
    <span>{{someDate | date:'dd-MM-yyyy'}}<span>
    <!-- 15-08-2017 -->
- async
  - allow to display asynchronously fetch data
## Custom Pipes
- Custom pipe can be created as implementation of PipeTransform interface
- Must be declared in Module
    import { Pipe, PipeTransform } from '@angular/core';
    @Pipe({
      name: 'yesno'
    })
    export class YesNoPipe implements PipeTransform {
      transform(value: any, args?: any): any {
        return value ? 'Yes' : 'No';
      }
    }

Usage:
    <span>{{true | yesno }}</span>
    <!-- Yes -->

