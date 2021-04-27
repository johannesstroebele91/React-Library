# 1) Basics

= all UIs are made up of components

- enable to split the app into
- independent reusable pieces
- which are isolated from each other

## 1.1) Advantage

- Reusability:
  - enables to reuse components just with "different data"
  - don't have to write the same components practically twice
- Separate Concerns
  - Keeping code base organized
  - Creating focused components for each concern
  - Split big junks into smaller functions
    - combining functions to create something larger

## 1.2) Naming

- the name may be capitalized (e.g. NewsFeed)
- can only have 1 parent element
  - e.g. `<div className=""parent""></div>`
  - an empty parent element can be created using `javascript<React.Fragment></React.Fragment>` or `<></>`)

## 2. Types of Components

1. Class Components:

- requires you to extend from React.Component and
- create a render function which returns a React element
  - more functionality out of the box
  - do not need hooks

2. Functional Components:

- is just a plain JS function which accepts props as an argument and
- returns a React element
  - less functionality out of the box
  - but is expendable using Hooks
