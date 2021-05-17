- [1) Basics](#1-basics)
- [2) WARNING!!!](#2-warning)
- [2) Approach](#2-approach)
- [3) Use Cases](#3-use-cases)

# 1) Basics

The function useState is needed because React

- does not re-render the page by itself
- if the value of a variable changes

So useState monitors a variable for change

- by creating a new state (NOT UPDATE A STATE)


The function useState returns an array with exactly two elements
1) element: name of the variable which state should be change
2) element: is always a function
  - which you can call to set a new value for your state.
  - Calling that function will then also trigger React to re-evaluate the component

# 2) WARNING!!!

Because a new state is created

- old values are not automatically passed,
- but like in this explanation [4) Usage of a previous state](./../useState/useState-multiple-states.md)

It is one of the most important **React hooks**

- all name of hooks start with "uf"
- all must be called inside of the React component function
- NOT outside these functions
- OR nested function (only 1 exception)

# 2) Approach

a) Multiple States

- **Preferred approach by Maximilian Scharzmüller**
- See [useState-multiple-states](useState-multiple-states)
- See Github Commit: [0a5ca492214a059402f203506af7a759d30efa8d](https://github.com/johannesstroebele91/React-Library/commit/0a5ca492214a059402f203506af7a759d30efa8d)
  b) One State
- See [useState-one-state](useState-one-state.md)
- See Github Commit: [0a5ca492214a059402f203506af7a759d30efa8d](https://github.com/johannesstroebele91/React-Library/commit/0a5ca492214a059402f203506af7a759d30efa8d)

# 3) Use Cases

A new state might be needed for the following reasons:

- user events (e.g. click)
- Http requests ( create a new state based on the Http response we got back)
- setTimeout() (updating state because a timer expired)
- ...
