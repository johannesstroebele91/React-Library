- [1. Basics](#1-basics)
- [2. Application Areas](#2-application-areas)
- [3. React vs React DOM](#3-react-vs-react-dom)
  - [3.1. React without React DOM](#31-react-without-react-dom)
  - [3.2. React DOM library](#32-react-dom-library)
  - [3.3. ReactDOM renderer](#33-reactdom-renderer)
- [4. What happens behind the scenes](#4-what-happens-behind-the-scenes)

# 1. Basics

React is a JS library

- written in declarative JS code
- that combines HTML, CSS and JS
- for building user interfaces
- that are re-usable and reactive

If a application is writtin

- only with HTML, CSS, and JS
- the code needs to be written in a imperative way
- which leads to duplications and more code
- in comparison to React

React mainly manages

- components (e.g. functional component)
- and the state attached to components (e.g. props, context, ...)

# 2. Application Areas

- Widget: React can control parts of a normal HTML website
- SPA: React can enable to build Single-Page-Apps from the ground up
  - React helps to control the entire frontend
  - Also for switching pages
  - So only 1 HTML file is requested (therefore SPA)
  - React takes over the rest

# 3. React vs React DOM

## 3.1. React without React DOM

It enables to build a component tree

- from nesting components into each other
- just as with the standard HTML tree
- whereby, there is always only one root node

```javascript
  <App/>
    <Header/>
    <Tasks/>
      <Task/>
      <Task/>
      <Task/>
```

## 3.2. React DOM library

- is a library that enables to
- connect React to the web
- by outputing new data provided by React
- to the browser of the user
  - therefore it knows the web
  - in contrast to the React library

## 3.3. ReactDOM renderer

- the method ReactDOM.render() is called from the react-dom' third party library
- which takes two arguments
  1. `<App />` component which references the App.js/ts file using the syntax JSX/TSX
  2. `document.getElementById('root')`
     - is called via the default JS DOM API to get the element 'root'
     - in the `public/index.html` folder
     - It includes the 'root' element,
     - which ReactDOM uses to render the element `<App />` in this place

# 4. What happens behind the scenes

The browser would not understand

- the syntax of the react components
- out of the box

In order to achieve this

- the react files are transformed (build) in a certain way
- so the browser can understand
- by tools such as create-react-app (https://create-react-app.dev/)

A development server is also used

- which hosts the running React app locally
- and updates the page whenever changes are made to the code
