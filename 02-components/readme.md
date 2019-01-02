# Angular - Components
The basic block of the Angular application is the component. The component is reusable unit of UI which consists of template and logic behind the template.


- directives with own html content, optional css style
- helps to divide application into self-contained blocks


## Component definition
- @Component decorator defines the component class
- common annotation properties selector, template/templateUrl
- assign component to Module in declarations
```
    @Component({
        selector: "app-component",
        template: "<div>This is the table component</div>"
    })
    export class CustomComponent {
    }
```

## Templates for components
- replaces host element content
- inline within template tag
- external file with templateUrl


## Inline templates
- defined inline in template property
- no checks/not full support in editors (just string)
- not suitable for large templates

```
    @Component({
        selector: "app-component",
        template: `<div>
                       This is a multiline template
                  </div>`
    })
    export class ProductTableComponent {
    }
```

## External templates
- separates code and view/template
- defined in templateUrl
- easier to read and test

```
    @Component({
        selector: "app-component",
        templateUrl: 'mycomponent.component.html'
    })
    export class ProductTableComponent {
    }
```

## Binding in components
- all types of binding are supported in component templates
- by defualt binding is done within component context


## Coordination between components
- The @Input property could be used to set data from parent
- The @Output event provide
- The bind value evaluated in context of parent but set to child

```
    @Component({
        selector: "paProductTable",
        template: "<div>{{model.name}}</div>"
    })
    export class CustomComponent {
        @Input("model")
        dataModel: Model;
        
        @Output("onChange")
        dataEvent = new EventEmitter<Data>();
      }
```

## Host element content

- host content to component via ng-content element

```
    @Component({
        selector: "paProductTable",
        template: `<div>{{model.name}}</div>
                   <ng-content></ng-content>`
    })
    export class CustomComponent {
    }
```

## Component Styles
- each component own context for styles by default
- the styles defined in the head section of the html still apply
- can be defined inline or in external file
## Internal styles (in code)
- “styles” property is set to an array
- item contains a CSS selector and properties

```
    @Component({
        selector: "paProductTable",
        template: `<div>{{model.name}}</div>
                   <ng-content></ng-content>`,
        styles: ["div { background-color: lightgreen"]
    })
    export class CustomComponent {}
```

## External files styles
- “styleUrls” defines path to css files
- The styleUrls property is set to an array of strings
- each item defines style file

```
    @Component({
    selector: "paProductForm",
    templateUrl: "app/productForm.component.html", 
    styleUrls: ["app/productForm.component.css"]
    })
    export class ProductFormComponent {}
```

## View encapsulation
- by default the component scope is applied to css styles
- the styles are added to head element, but with unique names
- this way angular emulates the shadow DOM features
- ViewEncapsulation.Emulated/Native (using native shadow DOM)/None (angular puts the CSS to html as is)

```
    @Component({
    selector: "paProductForm",
    templateUrl: "app/productForm.component.html", 
    styleUrls: ["app/productForm.component.css"], 
    encapsulation: ViewEncapsulation.Emulated
    })
    export class ProductFormComponent {}
```

## Shadow DOM selectors

| :host                        | matches host element                                                          |
| ---------------------------- | ----------------------------------------------------------------------------- |
| :host-context(classSelector) | match the ancestors of the host element 
that are members of a specific class |
| /deep/ or >>>                | affect the elements in child component templates                              |

## Querying Template Content

- @ViewChild(className) - get first element of the class
- @ViewChildren(className) - all members of directive


