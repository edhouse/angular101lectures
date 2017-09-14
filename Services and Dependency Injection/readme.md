# Angular - Services and Dependency Injection

- Service is a broad category - any value, function, feature, etc.
- Almost anything can be a service
- Dependency Injection provides services, components, etc.
- Angular ships with its own DI framework as standalone module

---

## Services

- Typically a class with a narrow, well-defined purpose
- There is nothing specifically Angular about services
- Components should delegate tasks to services
- Example is HttpClient from HttpClientModule

Another example is `logger.service.ts`:

```typescript
export class Logger {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
}
```

---

## Dependency Injection

- Wired into Angular framework and used everywhere
- *Injector* is main mechanism for resolving dependencies
  - Injector maintains a *container* of services
  - Injector can create service from *provider*
- *Provider* is a recipe for creating service

![js-ecosystem](angular-di.svg)

---

### Using DI

```typescript
@Injectable()
class UserMessagingLogger extends Logger {
  constructor(private userService: UserService) { super(); }

  log(message: string) {
    let name = this.userService.getUser.name;
    super.log(`Message to ${name}: ${message}`);
  }
}
```

---

#### @Injectable()

- Marks a class available to an *injector*
- Required only when component/service specifies dependency
- Recommended to always add @Injectable() to services
- Supertype of @Component(), @Directive() and @Pipe()

---

### Testing with DI

```typescript
let expectedLogs = ['Message to Joe: Hello!'];
let mockService = <UserService> {getUser: () => {
    return { name: 'Joe' }
}};

it('should log message with user name', () => {
  let logger = new UserMessagingLogger(mockService);
  logger.log('Hello!');
  expect(logger.logs).toEqual(expectedLogs);
});
```

---

## Injector

- Maintains *container* of services
- It is itself an injectable service
- Requires registered providers

Automatically configured during bootstrap process in `main.ts`:

```typescript
platformBrowserDynamic().bootstrapModule(AppModule);
```

#### Singletons

- Dependencies are singleton within the scope of injector
- Single service instance is shared among Component and its children

---

### Using injector explicitly

Creation of injector:

```typescript
const injector = ReflectiveInjector.resolveAndCreate(
    [Car, Engine, Tires]);

let car = injector.get(Car);
```

Working with injector directly:

```typescript
@Component({/* Omitted properties */})
export class InjectorComponent implements OnInit {
  car: Car;
 
  constructor(private injector: Injector) { }
 
  ngOnInit() {
    this.car = this.injector.get(Car);
  }
}
```

---

## Providers

desc
registration in modules, components
alternatives
aliases
value
factory

---

## Tokens

---

## Optional dependencies

---

### Hierarchical Injectors

tree
bubbling
re-providing

isolation
multiple
specialized

---

## @Host

---

## DOM

---

## Class-interface

---

## Derived classes injection

---

## Injection parent component

by class
by base class cannot
by class-interface

@SkipSelf

---

## Provider helpers

---

## Circular dependencies

forwardRef
