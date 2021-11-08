- [1. Basics](#1-basics)
  - [1.1. General](#11-general)
  - [1.2. Component tree](#12-component-tree)
- [2. Advantages](#2-advantages)
- [3. Limited to "1" root Element](#3-limited-to-1-root-element)
- [4. Best Practices](#4-best-practices)

# 1. Basics

## 1.1. General

- In React components are custom HTML elements,
- which make up the user interfaces of the application

- The components based approach enable to split the app
- into independent reusable pieces (isolated from each other)
- that work together to make the whole application work

## 1.2. Component tree

- This is done by building a component tree, e.g.:
  - <App/>
    - <Header/>
    - <Tasks/>
      - <Task/>
      - <Task/>
      - <Task/>

# 2. Advantages

- Reusability:
  - enables to reuse components just with "different data"
  - don't have to write the same components practically twice
- Separate Concerns
  - Keeping code base organized
  - Creating focused components for each concern
  - Split big junks into smaller functions
    - combining functions to create something larger

# 3. Limited to "1" root Element

Return func can only have 1 root element

- Generally, an empty parent element is used: `javascript<React.Fragment></React.Fragment>` or `<></>`)
- However, if a a class or the parent element itself is necessary, it can be use like this: `<div className=""parent""></div>`

# 4. Best Practices

- put new components into new files
- so having one component per file
- and have a parent component that controles
- these collection of component
