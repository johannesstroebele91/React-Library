- [1) Basics](#1-basics)
- [2) Application Areas](#2-application-areas)
- [3) Declarative approach](#3-declarative-approach)
- [4) Dependencies](#4-dependencies)

# 1) Basics

- React is a Client side JS library
- It combines HTML, CSS and JS to build the UI
- Goal is to build UIs for the web
- by creating re-usable and reactive components
- A compiler transforms React components written in TS into JS
  - this adds multiple improvements
  - e.g. CSS-support for most browsers, import statement support, React elements (eg. `<App/>`)...

# 2) Application Areas

- Widget: React can control parts of a normal HTML website
- SPA: React can enable to build Single-Page-Apps from the ground up
  - React helps to control the entire frontend
  - Also for switching pages
  - So only 1 HTML file is requested (therefore SPA)
  - React takes over the rest

# 3) Declarative approach

- Is used for building component
- by defining the desired target state(s) and
- letting React figure out the actual JS DOM instructions
- so, it splits the app into components, each with a specific task
- This is in contrast to the imperative approach of Vanilla JS
  - where lot of code needed to be written multiple times and
  - updated if changes occur

# 4) Dependencies

- Are injected using import statements
  - e.g. `import ReactDOM from 'react-dom';`
  - imports a ReactDOM object from the 'react-dom' third party library
  - such libraries need to be stated in the package.json before being able to use
- From this library, functions and variables can be accessed
  - e.g. `ReactDOM.render( <React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root')`
  - the method ReactDOM.render() is called from the react-dom' third party library
  - which takes two arguments
    1) `<App />` component which references the App.js/ts file using the syntax JSX/TSX
    2) `document.getElementById('root')`
       * is called via the default JS DOM API to get the element 'root'
       * in the `public/index.html` folder
       * It includes the 'root' element,
       * which ReactDOM uses to render the element `<App />` in this place 

