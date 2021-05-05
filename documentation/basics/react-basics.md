- [1) Basics](#1-basics)
- [2) How React works](#2-how-react-works)
- [3) Dependencies](#3-dependencies)
- [4) Application Areas](#4-application-areas)

# 1) Basics

- React is a Client side JS library
- It combines HTML, CSS and JS to build the UI
- Goal is to build UIs for the web by creating re-usable and reactive components

# 2) How React works

[Link to How React Works file](../advanced/ts-with-react/how-react-works-jsx-and-tsx.md)
# 3) Dependencies
- From a dependency or library,
  - functions and variables can be accessed
  - e.g. `ReactDOM.render( <React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root')`
- Dependencies are injected using import statements
  - e.g. `import ReactDOM from 'react-dom';` imports a ReactDOM object from the 'react-dom' third party library
- such libraries need to be stated in the package.json before being able to use
- the case of react library can it be skipped in react projects (`import React from 'react';`)

# 4) Application Areas

- Widget: React can control parts of a normal HTML website
- SPA: React can enable to build Single-Page-Apps from the ground up
  - React helps to control the entire frontend
  - Also for switching pages
  - So only 1 HTML file is requested (therefore SPA)
  - React takes over the rest
