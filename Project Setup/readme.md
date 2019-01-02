# Angular - Project Setup

![js-ecosystem](js-ecosystem.svg)

## Prerequisites

Node.js and npm are essential to modern web development with Angular and other platforms.

### Node.js

- JavaScript runtime environment
- Built on Chrome's V8 JavaScript engine
- Angular requires at least v6.9.x

### NPM

- Package manager for JavaScript
- Default for Node.js
- Command line client
- Registry (online database of public packages)
- Angular requires at least 3.x.x

## Project structure

- Should follow Angular's Style guide
- Common convention or best practise of JS applications
- Feature based

### The root folder

```
[app]
├─ dist/...
├─ e2e
│  ├─ app.e2e-spec.ts
│  ├─ app.po.ts
│  └─ tsconfig.e2e.json
├─ node_modules/...
├─ src/...
├─ .angular-cli.json
├─ .editorconfig
├─ .gitignore
├─ karma.conf.js
├─ package.json
├─ protractor.conf.js
├─ README.md
├─ tsconfig.json
└─ tslint.json
```

### The `src` folder

```
src
├─ app
│  ├─ app.component.css
│  ├─ app.component.html
│  ├─ app.component.spec.ts
│  ├─ app.component.ts
│  └─ app.module.ts
├─ assets
│  └─ .gitkeep
├─ environments
│  ├─ environment.prod.ts
│  └─ environment.ts
├─ favicon.ico
├─ index.html
├─ main.ts
├─ polyfills.ts
├─ styles.css
├─ test.ts
├─ tsconfig.app.json
└─ tsconfig.spec.json
```

### Example of the `app` folder

```
app
├─ hero-detail
│  ├─ hero-detail.component.css
│  ├─ hero-detail.component.html
│  └─ hero-detail.component.ts
├─ shared
│  ├─ hero.ts
│  ├─ hero.service.ts
│  └─ in-memory-data.service.ts
├─ app-routing.module.ts
├─ app.component.css
├─ app.component.ts
└─ app.module.ts
```

### Example of component nesting

```
app
└─ heroes
   ├─ hero-search
   │  ├─ hero-search.component.css
   │  ├─ hero-search.component.html
   │  ├─ hero-search.component.ts
   │  └─ hero-search.service.ts
   ├─ heroes.component.css
   ├─ heroes.component.html
   └─ heroes.component.ts
```

### The `dist` folder - development build

```
dist
├─ favicon.ico
├─ index.html
├─ inline.bundle.js
├─ main.bundle.js
├─ polyfills.bundle.js
├─ styles.bundle.js
└─ vendor.bundle.js
```

### The `dist` folder - production build

```
dist
├─ 3rdpartylicenses.txt
├─ favicon.ico
├─ index.html
├─ inline.8282eb7a62033b4bece0.bundle.js
├─ main.c3c3a5643c8398e4ac5c.bundle.js
├─ polyfills.b8858ddd6c4bd49f3fdf.bundle.js
├─ styles.d41d8cd98f00b204e980.bundle.css
└─ vendor.330bdb50b9e3457f8646.bundle.js
```

## Production build

- Ahead-of-Time (AOT) Compilation – pre-compiles templates
- Enables production mode – turns off assertions and other checks within the framework
- Bundling – concatenates all files into few bundles
- Minification – removes whitespaces, comments, ...
- Uglification – rewrites code to short and cryptic variable and function names
- Dead code elimination (tree shaking) – removes unreferenced code
- Feature modules and lazy loading

## Creating new project

- By hand
- Angular QuickStart
- Angular CLI

## Angular CLI

- Tool to initialize, develop, scaffold and maintain Angular applications
- Based on ember-cli project

### Available Commands

- ng help
- ng new
- ng serve
- ng generate
- ng lint
- ng test
- ng e2e
- ng build
- ng get/ng set
- ng doc
- ng eject
- ng xi18n

### ng generate

- class
- component
- directive
- enum
- guard
- interface
- module
- pipe
- service

### ng completion

- Adds autocomplete functionality to `ng` commands and subcommands
- Available for bash and zsh

## IDEs

- Amexio Canvas Web Based Drag and Drop IDE by MetaMagic
- Angular IDE by Webclipse
- IntelliJ IDEA
- Visual Studio Code
- WebStorm
