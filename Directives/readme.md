# Angular Directives
* Directives are instructions for DOM manipulation
* There are three kinds of directives in Angular:
    * **Components** - directive with template
    * **Attribute** - change the appearance or behavior of an element, component, or another directive.
    * **Structural** (marked with *) - change the DOM layout by adding and removing DOM elements
    
## Attribute directives
### NgClass directive
* Adds and removes CSS classes on an HTML element
* Example:

```html
<div [ngClass]="currentClasses">red bold class</div>
```

### NgStyle
* Adds and removes CSS styles on an HTML element
* Example:

```html
<div [ngStyle]="currentStyle">styled</div>
```
## Structural directives

### NgIf
* Dynamically evaluates provided condition
* Usage syntax:
```html
<div *ngIf="condition">...</div>
<div template="ngIf condition">...</div>
<ng-template [ngIf]="condition"><div>...</div></ng-template>
```
* Example:

```html
<div *ngIf="show">displayed content</div>
```
### NgFor
* Can be used also with selector `NgForOf`
* Provides iteration over provided data
* Usage syntax:
```html
<li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>
<li template="ngFor let item of items; index as i; trackBy: trackByFn">...</li>
<ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
  <li>...</li>
</ng-template>
```
* Example:

```html
<div *ngFor="let item of items">{{item.name}}</div>
```
### NgSwitch
* Provides more readable template syntax when there should more than two states 
* Example:
```html
<div [ngSwitch]="status">
    <div *ngSwitchCase="'OK'">Running</div>
    <div *ngSwitchCase="'Fail'">Not Running</div>
    <div *ngSwitchDefault>Unknown</div>
</div>
```
## Custom attribute directive



## References
* [Attribute directives](https://angular.io/guide/attribute-directives)
* [Structural directives](https://angular.io/guide/structural-directives)
