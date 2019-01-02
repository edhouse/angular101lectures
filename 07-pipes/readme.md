# Angular - Pipes
- Feature which provides various transformers for output, it does not modify binded values
- Data Transformer usable in templates, interpolation expression and also in code
- Character of `|` is used in template to involve data transformation
- Multiple “pipes” can by used at once in similar fashion as concatenation of commands in Unix like systems
## Showcase of basic usage with JSON pipe

Usage in view template:
```html
    <span>{{data | json}}</span>
```

Usage in interpolation expression:
```html
    <span [textContent] = "data | json"></span>
```
Usage in code (used pipe must be added to providers in module or component):
```typescript
     //...
      const data: Array<any> = [{id:1,name:"google"}, {id:2,name:"bing"}];
      dataAsJson: string;
        
        //Pipe injection
        constructor(jsonPipe: JsonPipe) {
          //transform data
          this.dataAsJson = jsonPipe.transform(data); 
    }
```
Concatenation of multiple pipes (depends on order):

```html
    <span>{{'Edhouse' | slice:3:5 | uppercase}}</span>
```  
 
## Other useful built-in Pipes
| Pipe | Description |Sample Usage | Sample Output |
|------|-----------|---------------|----------------|
|slice|substring from value|{{'Edhouse' &#124; slice:3:5}}|  ou |
|uppercase|upper case from value|{{'Edhouse' &#124; uppercase}}|EDHOUSE |
|lowercase|lower case from value|{{'Edhouse' &#124; lowercase}}|edhouse|
|titlecase|title case from value|{{'edhouse' &#124; titlecase}}|Edhouse|
|number|formats number, depends on browser locale|{{'1250' &#124; number: '.2'}}|1,250.00|
|percent|formats number as percentage|{{'12.5' &#124; percent: '.2'}}|12.50%|
|currency|formats currency|{{12.5 &#124; currency:'EUR':true:'.3'}}| €12.500|
|date|formats date|{{someDate &#124; date:'dd-MM-yyyy'}}|15-08-2017|
|async| waits until promise is completed and than shows data |      |                |

## Custom Pipes
- Custom pipe can be created as class marked by *@Pipe* decorator which implements PipeTransform interface
- Must be declared in Module in declarations array

```typescript
    import { Pipe, PipeTransform } from '@angular/core';
    @Pipe({
      name: 'yesno'
    })
    export class YesNoPipe implements PipeTransform {
      transform(value: any, args?: any): any {
        return value ? 'Yes' : 'No';
      }
    }
```

Usage:
```html
    <span>{{true | yesno }}</span>
    <!-- Yes -->
```
## Pure pipes
* By default pipes do not watch for changes in underlying data (async is exception)
* This behavior can be overridden in via `@Pipe` decorator argument `pure`, however could lead to performance issues

## References:
* [Pipes API documentation](https://angular.io/api?query=pipe)
