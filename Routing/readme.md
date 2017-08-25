# Angular - Routing
* Angular Router provides navigation functionality between views.
* Angular Router is optional service so it is not part of the Angular core and can be found in package `@angular/router`.
* Router service expects that index.html has set base path ```<base href="/">```
* Routes are configured inside of app.module.ts like this
```
    ...
    const applicationRoutes: Routes = [
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
          applicationRoutes
        )
      ],
      ...
    })
    export class AppModule { }
    
    ...
   
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
```
...
 <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/transactions" routerLinkActive="active">Transactions</a>
  </nav>
  <router-outlet></router-outlet>
  ..
```
* Attribute directive `routerLinkActive` adds active CSS class to activated view in navigation


##Router Events
Router Event |	Description |
-------------| -------------
NavigationStart	| An event triggered when navigation starts.
RoutesRecognized| An event triggered when the Router parses the URL and the routes are recognized.
RouteConfigLoadStart| An event triggered before the Router lazy loads a route configuration.
RouteConfigLoadEnd | An event triggered after a route has been lazy loaded.
NavigationEnd | An event triggered when navigation ends successfully.
NavigationCancel | An event triggered when navigation is canceled. This is due to a Route Guard returning false during navigation.
NavigationError	|An event triggered when navigation fails due to an unexpected error.

##Routing Module
* For more advanced use cases and bigger apps its better to create own routing module. 
* Separation make it cleaner for advanced configuration and it does not pollute app module. 
```
...

const appRoutes: Routes = [
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
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class RoutingModule {
}

```
