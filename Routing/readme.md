# Angular Routing & Navigation
* Angular Router provides navigation functionality between views.
* Angular Router is optional service so it is not part of the Angular core and can be found in package `@angular/router`.
* Router service expects that index.html has set base path ```<base href="/">```
* Routes are configured inside of app.module.ts like this
```typescript
   //imports omitted
    const ROUTES: Routes = [
        {path: 'dashboard', component: 'DashboardComponent', data: {title: 'Dashboard'}},
        {path: 'transactions', component: 'TransactionsComponent', data : {title: 'Transactions'}},
        {path: 'transactions/:id', component: 'TransactionDetailComponent', data : {title: 'Transaction Detail'}},
        { path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
          },
        { path: '**', component: PageNotFoundComponent }
    ]
    @NgModule({
      imports: [
        RouterModule.forRoot(
          ROUTES
        )
      ],
      ...
    })
    export class AppModule { }
```

* Each route in configuration is separate object
* Routes configuration is registered via `RouterModule.forRoot` method
* Paths are provided without leading slash
* Router selects the route with a first match wins strategy, so order is important
* `:id` placeholder means that when there is provided id number of transaction it would navigate to detail of this 
transaction
* Each route object can have declared also static read-only data such as title of page
* Target page is injected (rendered) to page via `<router-outlet></router-outlet>` which should be placed inside `app.html`
* Angular Router provides attribute directive `routerLink` to dynamically create urls for navigation (`app.html`)
```html
<header>
    <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/transactions" routerLinkActive="active">Transactions</a>
    </nav>
</header>
<router-outlet></router-outlet>
<footer>
    Made by Edhouse s.r.o
</footer>
  ...
```
* Attribute directive `routerLinkActive` adds active CSS class to activated view in navigation


## Router Events
Router Event |	Description |
-------------| -------------
NavigationStart	| An event triggered when navigation starts.
RoutesRecognized| An event triggered when the Router parses the URL and the routes are recognized.
RouteConfigLoadStart| An event triggered before the Router lazy loads a route configuration.
RouteConfigLoadEnd | An event triggered after a route has been lazy loaded.
NavigationEnd | An event triggered when navigation ends successfully.
NavigationCancel | An event triggered when navigation is canceled. This is due to a Route Guard returning false during navigation.
NavigationError	|An event triggered when navigation fails due to an unexpected error.

## Routing Module
* For more advanced use cases and bigger apps its better to create own routing module. 
* Separation make it cleaner for advanced configuration and it does not pollute app module. 

```typescript
//imports omitted

const ROUTES: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, data: {
    title: 'Dashboard'
  }
  },
  {
    path: 'transactions', component: TransactionsComponent, data: {
    title: 'Transactions'
  }
  },
  {
    path: 'transaction/:id', component: TransactionDetailComponent, data: {
    title: 'Transactions Detail'
  }
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: []
})
export class RoutingModule {
}

```

## Route Guards
* Provides mechanism to restrict access to routes
* There are four kind of guards
    * CanActive - determines if route should be activated
    * CanActivateChild - determines if child route should be activated
    * CanLoad - determines if whole feature bundle should be load
    * CanDeactivate - determines if it should be allowed to change current route

Simple Logged in guard, which allow access only to logged users
````typescript
//imports ommitted

@Injectable()
export class AuthService {

  constructor() {
  }

  isLoggedIn(): boolean {
    return false;
  }
}

//imports ommitted

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const loggedIn = this.authService.isLoggedIn();
    if (!loggedIn) {
      this.router.navigate(['/dashboard']);
    }
    return loggedIn;
  }
}

````