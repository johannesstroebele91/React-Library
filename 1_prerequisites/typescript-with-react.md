# 1. Basics

- in contrast to React with JS
- dev server does one more thing behind the scenes
- it compiles the TypeScript code into JavaScript code

# 2. Compiling TS to JS

- A compiler transforms React components written in TS into JS
  - this adds multiple improvements
  - e.g. CSS-support for most browsers, import statement support, React elements (eg. `<App/>`)...

# 3. Commands

https://create-react-app.dev/docs/getting-started/

A new React project with TypeScript can be started

- by running the cmd:
  - `npx create-react-app name-of-the-app --template typescript`
  - which creates the project in the folder "name-of-the-app"
- or running the cmd:
  - `npx create-react-app . --template typescript`
  - which creates the project directly in the respective folder

# 4. Dependencies in the package.json

- Same dependencies as in React with JS but:
- Type packages: are translation bridges between VanillaJS and a TypeScript project

  - "@types/jest": "^26.0.22", // translation bridge for the jest library
  - "@types/node": "^12.20.7", // translation bridge for the node library
  - "@types/react": "^17.0.3", // translation bridge for the react library
  - "@types/react-dom": "^17.0.3", // translation bridge for the react library
  - "react": "^17.0.2", // is just written for VanillaJS
  - "react-dom": "^17.0.2", // is just written for VanillaJS

- Compiler for TypeScript
  - "typescript": "^4.2.3"

# 5. tsconfig

- Necessary to compile TS code to JS code
- Compiler is invoked automatically if
  - the dev server is started
  - OR the project is built for production

**compilerOptions**

- target: JS version
  - es5 (which is quite old, but broad browser support)
  - influences how TS is compiled into JS
  - also the bundler babel influences the outcome (optimizes code)
- lib: TS libraries which are included
  - influences which types are known out of the box
  - e.g. dom states that default dom types are understood (e.g. HTMLInputElement type)
- allowJS: for mixing TS with JS files
- strict: true means the strictest possible setting (e.g. no implicit any type!)
- jsx: controlls that jsx code is supported
- include: states where the compiler searches ts files to compile
