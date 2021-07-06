- [1) Prevent unnecessary re-executions of components using React.memo()](#1-prevent-unnecessary-re-executions-of-components-using-reactmemo)
- [2) Implementation](#2-implementation)
- [3) Reason for not using it for all components](#3-reason-for-not-using-it-for-all-components)
- [4) Use Cases](#4-use-cases)
- [5) Problems with references values](#5-problems-with-references-values)
- [5) Example](#5-example)

# 1) Prevent unnecessary re-executions of components using React.memo()

React.memo enables to tell React

- to re-execute a certain component
- only under certain circumstances
- e.g. when a props of primitive types changed (e.g. boolean `show={false}`)

# 2) Implementation

React.memo needs to be wrapped

- around the respective component
- e.g. `React.memo(DemoOutput)`

React.memo tells React to

- check if the if the component's props differ
- from the the ones rendered before
- and skips the re-render if NO discrepancies exist

# 3) Reason for not using it for all components

React.memo is not used always because React needs to

- store the previous props
- and make a comparison
- which of course comes with a performance cost
- that can be higher in some cases then a re-render
- RESULT: it is use case dependent

# 4) Use Cases

- Huge component tree with lots of child components
  - React.memo enables to skipped unnecessary parent component re-renders
  - in case the many child of the parent change
  - large apps with many child components
- DOES NOT make sense
  - if you know that components and props change anyways als the time
  - for small apps and small component trees with few children

# 5) Problems with references values

React compares values before and after changes

- Changes of primitive values CAN be compared
  - e.g. booleans: `props.show === props.previous.show` // Output: true
  - e.g. booleans: `false === false` // Output: true
  - e.g. string: `'hi' === 'hi'` // Output: true
- Changes of references values (e.g. arrays, function, objects) CANNOT be compared
  - e.g. `[1,2,3] === [1,2,3]` // Output: false, because of different pointers
  - e.g. `{name: 'Peter'} === {name: 'Peter'}` // Output: false, because of different pointers
  - e.g. `props.onClick === props.previous.onClick` // Output: false, because of different pointers
  - Therefore, the comparison of functions as props (functions are objects in JS)
    - are evaluted by React.memo to have changed (although the function has not)
    - which so triggers the re-render of the respective component

# 5) Example

See App.tsx
