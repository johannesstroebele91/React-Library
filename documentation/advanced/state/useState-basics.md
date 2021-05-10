- [1) Basics](#1-basics)
- [2) Approach](#2-approach)
- [3) Use Cases](#3-use-cases)

# 1) Basics

**The React function `useState` allows to define values as a state**

It is one of the most important **React hooks**

- all name of hooks start with "use"
- all must be called inside of the React component function
- NOT outside these functions
- OR nested function (only 1 exception)

The value that should be monitored for change

- needs to be passed as a parameter for function
- e.g. amount

# 2) Approach


a) Multiple States
  * **Preferred approach by Maximilian Scharzmüller**
  * See [useState-multiple-states](useState-multiple-states)
  * See Github Commit: [0a5ca492214a059402f203506af7a759d30efa8d](https://github.com/johannesstroebele91/React-Library/commit/0a5ca492214a059402f203506af7a759d30efa8d)
b) One State
  * See [useState-one-state](useState-one-state.md)
  * See Github Commit: [0a5ca492214a059402f203506af7a759d30efa8d](https://github.com/johannesstroebele91/React-Library/commit/0a5ca492214a059402f203506af7a759d30efa8d)

# 3) Use Cases

The state might be updated for the following cases:

- user events (e.g. click)
- Http requests ( update the state based on the Http response we got back)
- setTimeout() (updating state because a timer expired)
- ...
