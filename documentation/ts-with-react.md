# Basics

https://create-react-app.dev/docs/getting-started/

A new React project with TypeScript can be started

- by running the cmd:
  - `npx create-react-app name-of-the-app --template typescript`
  - which creates the project in the folder "name-of-the-app"
- or running the cmd:
  - `npx create-react-app . --template typescript`
  - which creates the project directly in the respective folder

# TypeScript with React

- in contrast to React with JS
- dev server does one more thing behind the scenes
- it compiles the TypeScript code into JavaScript code

# Dependencies in the package.json

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
