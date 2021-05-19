- [1) Create React App](#1-create-react-app)
- [2) Babel:](#2-babel)
- [2) Webpack](#2-webpack)
- [4)  Node.js](#4--nodejs)

# 1) Create React App

https://reactjs.org/docs/create-a-new-react-app.html
`npx create-react-app my-app`

**It sets up your development environment**

- so that you can use the latest JavaScript features,
- provides a nice developer experience,
- and optimizes your app for production

**It creates a frontend build pipeline,**

- so you can use it with any backend you want

**Instructions**

- `npm run` or `npm run build`
- Will start the development server
  - When you’re ready to deploy to production,
  - running this cmd will create an optimized build of your app
  - in the build folder
- `npm start`

**Under the hood, it uses:**

- Babel
- Webpack

# 2) [Babel](https://babeljs.io/docs/en/):

- Is a toolchain that is mainly used to convert
- ECMAScript 2015+ code
- into a backwards compatible version of JS
- in current and older browsers or environments

# 2) [Webpack](webpack.md)

- unify all these different sources and module types
- in a way that's possible to import everything in your JS code,
- and finally produce a shippable output

# 4)  Node.js

- Runtime environment for JS
- Run JS outside of the browser

**Why is this need although React Code solely runs in the browser?**

- Only the final production code will run in the browser
  - Node.js is used for two reasons
    - Creating the React App `create-react-app`
    - And for the development server (preview), which is responsible for the behind the scenes optimization steps
