
# 1) Class vs Functional Components

## 1.1) Class Components:

- requires you to extend from React.Component and
- create a render function which returns a React element
  - more functionality out of the box
  - do not need hooks

## 1.2) Functional Components:

- is just a plain JS function which accepts props as an argument and
- returns a React element
  - less functionality out of the box in comparison to class components
  - but is expendable using Hooks

# 2) Stateful vs Stateless Components

Both class and functional components can have a state
* modern React uses functional components
* but class component are also great (just have a more overhead)

**!!!Both stateful and stateless components are great!!!**

- most of the times
- only a couple of stateful component manage the state
- and this state is then only distributed
- to other stateless componets via props

## 2.1) Stateful (smart) components

Components that manage some state

- e.g. Expenses Component manages the filter state
- which can be seen in the `useState()` statement of the respective component

## 2.1) Stateless (presentational, dumb) components

Components that don't manage a state

- e.g. ExpenseItem component only represents
- are the majority of component
