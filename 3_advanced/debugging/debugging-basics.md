- [1) Basics](#1-basics)
- [2) Types of Errors](#2-types-of-errors)
  - [2.1) Compilation errors](#21-compilation-errors)
  - [2.2) Runtime errors](#22-runtime-errors)

# 1) Basics

Errors are shown

- SOMETIMES directly in the IDE
- in the terminal
- in the browser window
- and the developer tools (console)

React (React development process)

- catches error
- and throws the errors at the user

# 2) Types of Errors

https://macwright.com/2015/02/28/errors.html

## 2.1) Compilation errors

Errors that happen during compile time

- so they occur before any part of your code runs
- therefore an app with such errors will not even start

Such errors are shown

- in the terminal
- in the browser window
- the developer tools (console)
- and SOMETIMES directly in the IDE

These errors can be solved by reading the text

## 2.2) Runtime errors

Errors that happen while your code is running

- which could happen immediately after the start (e.g. ReferenceError)
- or later (e.g. data fetching issues, ...)

Such errors have often more cryptic error messages

- (which can be found in the developer console)
- where you need to look thorugh the complete chain of events
- that lead to the error
- to find out how to solve it

These errors can solved as shown in the separate file: [fixing-runtime-errors.md](./fixing-runtime-errors.md)
