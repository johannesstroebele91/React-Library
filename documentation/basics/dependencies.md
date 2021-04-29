# Import

- Are injected using import statements
  - e.g. `import ReactDOM from 'react-dom';`
  - imports a ReactDOM object from the 'react-dom' third party library
  - such libraries need to be stated in the package.json before being able to use
  - the react library can be skipped in react project: `import React from 'react';`

# Access imported packages

- From this library, functions and variables can be accessed
  - e.g. `ReactDOM.render( <React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root')`
  - the method ReactDOM.render() is called from the react-dom' third party library
  - which takes two arguments
    1. `<App />` component which references the App.js/ts file using the syntax JSX/TSX
    2. `document.getElementById('root')`
       - is called via the default JS DOM API to get the element 'root'
       - in the `public/index.html` folder
       - It includes the 'root' element,
       - which ReactDOM uses to render the element `<App />` in this place
