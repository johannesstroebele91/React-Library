- [1) Basics](#1-basics)
- [2) Application Areas](#2-application-areas)
- [3) React vs React DOM](#3-react-vs-react-dom)
  - [3.1) React without React DOM](#31-react-without-react-dom)
  - [3.2) React DOM library](#32-react-dom-library)
  - [3.3) ReactDOM renderer](#33-reactdom-renderer)
- [4) Virtual DOM](#4-virtual-dom)

# 1) Basics

React is a JS library

- written in declarative JS code
- that mainly manages components (props, context, state changes)
- by combining HTML, CSS and JS
- for building user interfaces
- that are re-usable and reactive

# 2) Application Areas

- Widget: React can control parts of a normal HTML website
- SPA: React can enable to build Single-Page-Apps from the ground up
  - React helps to control the entire frontend
  - Also for switching pages
  - So only 1 HTML file is requested (therefore SPA)
  - React takes over the rest

# 3) React vs React DOM

## 3.1) React without React DOM

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

## 3.2) React DOM library

- is a library that enables to
- connect React to the web
- by outputing new data provided by React
- to the browser of the user
  - therefore it knows the web
  - in contrast to the React library

## 3.3) ReactDOM renderer

- the method ReactDOM.render() is called from the react-dom' third party library
- which takes two arguments
  1. `<App />` component which references the App.js/ts file using the syntax JSX/TSX
  2. `document.getElementById('root')`
     - is called via the default JS DOM API to get the element 'root'
     - in the `public/index.html` folder
     - It includes the 'root' element,
     - which ReactDOM uses to render the element `<App />` in this place

# 4) Virtual DOM

React uses a concept called virtual DOM

- to update the real DOM of a application
- in case of changes (e.g. state) in a more performant way
- which is done as follow:

1. The virtual DOM determines how the component tree
   1. currently looks like and
   2. what it should look like after an update
2. That info is then handed to ReactDOM
   1. which then manipulates the real DOM
   2. to match the virtual DOM
      1. ONLY the necessary changes are altert in the real DOM
      2. all of the other parts of the code stay the same

Of course, React re-evaluates, or re-exectues component functions again,

- whenever components, props, state, or context changes
- which is necessary to identify these differences for the virtual DOM
- BUT these re-evaluation are separate from the real DOM!
