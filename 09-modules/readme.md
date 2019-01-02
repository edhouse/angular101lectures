# Angular modules

- Angular apps are modular and Angular has NgModules system
- Help organize apps into blocks of functionality
- Module identifies components, directives, pipes and services
- Every Angular app has *root* module
- Angular app can have more *feature* modules

## @NgModule decorator

- Module is a class with @NgModule decorator
- It takes single metadata object
- Not a JavaScript module

Example of `app.module.ts` file:

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Logger }  from './logger.service';

@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Libraries

- Way how to extend app with other capabilities
- Angular ships with collection of JavaScript modules
- Many of them are also NgModules
  - E.g. `FormsModule`, `HttpModule`, and `RouterModule`
- Includes third-party libraries (e.g. Material Design)

## The root AppModule

- Every Angular app has it
- By convention it is called `AppModule` but can be anything
- Identifies bootstrap component
- Places rendered `AppComponent` in te DOM

Example of `app.module.ts` file:

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Logger }  from './logger.service';

@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Bootstrapping

- Main application view, called *root component*
- Only root module should set bootstrap property
- Mostly a single root component but can put more independent component trees
- Application is launched from `main.ts` file
- Bootstrapping process renders *AppComponent* inside it's selector in *index.html* file

Snippet of *index.html* with example of root selector:

```typescript
<my-app><!-- content managed by Angular --></my-app>
```

### Compile just-in-tim (JIT)

- *Dynamic* option, compiles application in browser

```typescript
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app/app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
```

### Compile ahead-of-time(AOT)

- *Static* alternative, compilation is done in build process
- Produced application is normally smaller and launches faster

```typescript
// The browser platform without a compiler
import { platformBrowser } from '@angular/platform-browser';

// The app module factory produced by the static offline compiler
import { AppModuleNgFactory } from './app/app.module.ngfactory';

// Launch with the app module factory.
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
```

## Declarations

- *View classes* of the module
  - *Declarables*: Component, directives and pipes
  - Anything else => application won't compile
- Without declaring class, it cannot be used in application

### Declarables conflicts

- Two different component classes with the same selector
results in error => application won't compile
- Declare more directives is possible
  - All directives are applied
  - Later specified directive can override behavior of earlier
- Declare more pipes is possible
  - Only the latest specified pipe is applied
- Conflicts can be avoided with *feature* modules

## Service providers

- Creators of services that this module contributes to the global collection of services
- Registered services become accessible in all parts of the app
- Application root dependency injector - only last provided service is registered
- Service provided in AppModule always "wins" - imported modules are resolved earlier

## Importing modules

- Classes from other modules which are needed by this module
- Everything what other module export is imported
- Application needs to import `BrowserModule` when executes in browser

### BrowserModule vs. CommonModule

- `CommonModule` contributes many of the common directives that applications need
  - Including e.g. `ngIf` and `ngFor`
  - It is platform independent so it don't have to run in browser
- `BrowserModule` imports `CommonModule` and re-exports it
  - Importer of `BrowserModule` gets `CommonModule` directives automatically
  - Can run only in browser
  - `BrowserModule` must be imported only once in `AppModule`, otherwise throws an error

### Resolving imports

- Every module first resolve its imports
- Resolved module is evaluated once and cached
- Example module 'A' imports 'B' and 'C' and 'B' imports 'C'
  - From 'A' is encountered 'B' and from 'B' is encountered 'C'
  - 'C' is created first
  - 'B' has all dependencies resolved so it is evaluated second
  - 'A' has all dependencies resolved ('C' is loaded fom cache)
- Angular can't resolve circular dependencies
  - 'A' imports 'B' and 'B' imports 'A' => won't compile

## Exporting

- Subset of declarations that should be visible and usable in other modules
- Only declarables or modules can be exported
- Not exported declarables are private for module
- Imported modules can be re-exported => reduces code repetition in imports
  - E.g. `BrowserModule` re-exports `CommonModule`

## Feature modules

- Same as root module, share the same dependency injector
- Root module is bootstrapped to launch app
- Feature module is imported to extend app
- Helps organize app into smaller sets of functionality (e.g. by business domain)
- Helps resolve declarables conflicts (e.g. two directives with the same name)

## Lazy-loading modules with router

- Root module can import only feature modules which directly needs
- Other feature modules will be fetched and mounted asynchronously
- Lazy-loaded module location is a string, not a type
  - String identifies both the module file and the module class separated by `#`

```typescript
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

### RouterModule forRoot and forChild

- conventional names for methods that deliver different import values to root and feature modules
  - Angular doesn't recognize them but Angular developers do
- The `forRoot` provides routing concerns for root module
  - Never call it in feature modules!
- The `forChild` provides additional routes
  - Always call it in feature-routing modules

```typescript
@NgModule({
  imports: [RouterModule.forChild([
    { path: 'clients', component: ClientsComponent }
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
```

### Lazy-loaded module scoped providers

- Lazy-loaded modules follow the same principles as any feature modules
- Only difference is that they have its own child injector
- Once a dependency injector container is resolved it cannot add new services
- Child injector is always created for lazy-loaded module to configure new services
- It is bad practise to re-provide app wide services in lazy-loaded modules

### Feature modules groups

- Domain: deliver domain user experience (e.g. `FormsModule`), mostly consist of *declarations*
- Routed: domain feature modules which are targets of navigation routes
- Routing: provide only routing configuration to another module
- Service: provide utility services (e.g. `HttpModule`), mostly consist of *providers* 
- Widget: makes *components*, *directives* and *pipes* to external modules (e.g. `CommonModule`)

## Shared Modules

- Holds common components, directives and pipes and share them to other modules
- Re-exports commonly used modules
- Reduces repetition in imports and declarations
- Should not provide services
  - Risk of re-providing service in lazy-loaded module

## The Core module

- Can be used to keep root module clean
- Can provide app wide services without risk of re-providing them
- Consider making it pure service module
- Should be imported only in root module 

How to prevent re-importing:

```typescript
constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
  if (parentModule) {
    throw new Error(
      'CoreModule is already loaded. Import it in the AppModule only');
  }
}
```

## Entry components

- `entryComponents` is Another @NgModule property
- List of components that are:
  - Not referenced in bootstrap property
  - Not reachable from other components
- Angular automatically adds bootstrap and reachable components into it
- Most developers never set it
- If you are using some dynamical loading into DOM then `entryComponents` must be used
