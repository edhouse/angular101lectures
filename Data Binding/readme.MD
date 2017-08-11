# Angular - Data Binding

- essential part of Angular framework
- expressions used to create dynamic content in HTML
- links HTML template, data and code
- as attribute of HTML elements or special sequence of characters “{{}}”
- should not contain too much logic → hard to test
## Data Binding
- one-way → data flows in one direction
- two-way → data flows in both directions
- usually from MODEL to VIEW
![anatomy of data binding](https://d2mxuefqeaa7sj.cloudfront.net/s_02DD16E0D25A987BE39D21A370407807CA989675FA82A129E4ECC9EEAD5D2DFC_1501996624722_image.png)

  - host element → HTML element to be affected by data binding
  - square brackets → one-way data binding
  - target →what the binding do (2 types - directives/property)
  - expression → js code evaluated (the context of the component is available here)
## Property binding
- angular first seek for directive target, if such not found than property binding is applied

| **[property]**   | property of Javascript object of DOM |
| ---------------- | ------------------------------------ |
| **[attr.name]**  | attribute of HTML element            |
| **[class.name]** | modifies elements class membership   |
| **[style.name]** | element style property               |



## Expression in binding 
- expression is a fragment of javascript, that is evaluated to provide data value to property
- enclosed to double quotes → string literals in single quotes (not always obvious 😃 )
- be careful, the expression is not checked by TS compiler and not easy to test
    <button [ngClass]="btn + getClasses()">OK</button>


## Brackets in binding
- if brackets omitted, the binding is processed but the expression is passed to directive as literal

| [target]=”expression”   | one-way data biding from expression to target                          |
| ----------------------- | ---------------------------------------------------------------------- |
| {{expression}}          | string interpolation                                                   |
| (target)=”expression”   | one-way binding from target to destination of expression (e.g. events) |
| [(target)]=”expression” | two-way binding (banana in the box)                                    |

## Host element in data binding
- HTML element could have multiple bindings
- each binding could affect other attribute/aspect of element
    <div [attr.id]="getElemId()" [ngClass]="main"></div>


## Property binding in detail
- HTML elements represented as DOM JavaScript objects
- the JS objects has properties representing state of HTML
- property binding jandles these properties
    <input [value]="getOrder()?.orderNumber || 'None'" />
    // "?" guards against null "||" is a coalesce operator


## String interpolation
- special version of property binding
- used to include expression to HTML content
- Angular combines the text with content of HTML element

```

    // Regular property binding
    <div [textContent]="getOrder()">
    </div>
    
    // Equals string interpolation
    <div>
      {{getOrder()}}
    </div>

```

Attribute binding

- not all attributes of HTML element have equivalent of DOM API (colspan)
- this cover the attribute binding
```
    <td [attr.colspan]="model.getCategories().length">
```


## Classes and Styles


