- [1) Basics](#1-basics)
  - [1.1) General](#11-general)
  - [1.2) Component tree](#12-component-tree)
- [2) Advantages](#2-advantages)
- [3) Types of Components](#3-types-of-components)
- [4) Return func](#4-return-func)

# 1) Basics

## 1.1) General

- In React components are custom HTML elements,
- which make up the user interfaces of the application

- The components based approach enable to split the app
- into independent reusable pieces (isolated from each other)
- that work together to make the whole application work

## 1.2) Component tree

- This is done by building a component tree, e.g.:
  - <App/>
    - <Header/>
    - <Tasks/>
      - <Task/>
      - <Task/>
      - <Task/>

# 2) Advantages

- Reusability:
  - enables to reuse components just with "different data"
  - don't have to write the same components practically twice
- Separate Concerns
  - Keeping code base organized
  - Creating focused components for each concern
  - Split big junks into smaller functions
    - combining functions to create something larger

# 3) Types of Components

1. Class Components:

- requires you to extend from React.Component and
- create a render function which returns a React element
  - more functionality out of the box
  - do not need hooks

2. Functional Components:

- is just a plain JS function which accepts props as an argument and
- returns a React element
  - less functionality out of the box in comparison to class components
  - but is expendable using Hooks

# 4) Return func

Only accepts one parent element!!!

- Generally, an empty parent element is used: `javascript<React.Fragment></React.Fragment>` or `<></>`)
- However, if a a class or the parent element itself is necessary, it can be use like this: `<div className=""parent""></div>`
