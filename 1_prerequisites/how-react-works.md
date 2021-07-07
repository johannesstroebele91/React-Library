- [1. Basics](#1-basics)
- [2. Application Areas](#2-application-areas)
- [3. React vs React DOM](#3-react-vs-react-dom)
  - [3.1. React without React DOM](#31-react-without-react-dom)
  - [3.2. React DOM library](#32-react-dom-library)
  - [3.3. ReactDOM renderer](#33-reactdom-renderer)
- [4. Virtual DOM](#4-virtual-dom)
- [5. React re-executes components with state for every change](#5-react-re-executes-components-with-state-for-every-change)
- [5.1. Example: parent component re-executes due to dynamic props `show={showParagraph}`](#51-example-parent-component-re-executes-due-to-dynamic-props-showshowparagraph)
- [5.2. Example: child components re-execute due static props `show={false}`](#52-example-child-components-re-execute-due-static-props-showfalse)

# 1. Basics

React is a JS library

- written in declarative JS code
- that combines HTML, CSS and JS
- for building user interfaces
- that are re-usable and reactive

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
