- [1) Manual retracing and fixing runtime errors](#1-manual-retracing-and-fixing-runtime-errors)
- [2) React Developer Tools](#2-react-developer-tools)
  - [2.1) Components Tab](#21-components-tab)
  - [2.2) Profiler Tab](#22-profiler-tab)
- [3) Browser Developer Tools (breakpoints) for fixing runetime errors](#3-browser-developer-tools-breakpoints-for-fixing-runetime-errors)
  - [3.1) How to locate files in console](#31-how-to-locate-files-in-console)
  - [3.2) Solution approach](#32-solution-approach)
  - [3.3) Useful debugging actions](#33-useful-debugging-actions)
  - [3.4) Example](#34-example)

# 1) Manual retracing and fixing runtime errors

Most often you can

- start from the **HTML element** where the error occurs
- and look where the issue might have happened (e.g. wrong call of an function in the HTML element, ...)
- and fix the error accordingly (e.g. go to another item where the error actually happens)

# 2) React Developer Tools

Are a browser extention (chrome)

- which needs to be installed

It adds two new tabs to the developer tools

- components
- profiler

## 2.1) Components Tab

Displays the actual React components

- which is in contrast to the elements tab of the developer tools
- that show the HTML DOM as rendered by the browser

It enables to
- search for a component
- see the components as a **structured tree**
- see all **props** for the respective component
- see all **hooks** that were used (e.g. useState)
  - can be edited (e.g. changing the value)
  - WARNING only updates the value in the e.g. input if 2-way-binding is enabled (via `value={}`)
- see which components where responsible for rendering this component
  - these rendering components are sorted
  - in the order which they are responsible for rendering
  - e.g. CourseGoalItem was rendered by CourseGoalList
    - CourseGoalList was rendered by the App
    - the App was rendered by the createLegacyRoot()
    - createLegacyRoot() was rendered by the react-dom@17.0.2

## 2.2) Profiler Tab

TODO explanation will be added later

# 3) Browser Developer Tools (breakpoints) for fixing runetime errors

If you cannot find the error manually or prefer this approach

- the react development process enables
- to debug the code you wrote IN THE RAW FORM
- by user breakpoints in the browser developer tools
- (NOT THE COMPILED code that is executed by the browser)

## 3.1) How to locate files in console

All of your React files

- can be accessed in the SOURCES tab via
- "top > localhost:3001 > static/js > C:/Users/... > src"
- WARNING: sometimes the files are located in another folder

## 3.2) Solution approach

Go to the respective file that

- might have the issue (JS)
- or often the HTML element which triggers the issue (HTML)
- and proceed as shown below

## 3.3) Useful debugging actions

a. Important actions

- Step into next function call
  - - skips function calls,
  - which great for steping over functions
  - that are called behind the scenes
- **Hover** over values to see their stored values

b. Other actions

- Resume script execution (aborts debugging)
- Step over to next function call (goes to next function call)

## 3.4) Example

If there is a problem with the [deletion of todos](../app_tasks-manager/src/components/CourseGoals/CourseGoalItem/CourseGoalItem.ts)

- the the break points need to be set in the JS part (e.g. deleteHandler function)
- which is triggered when clicking on a list item
- (NOT IN THE HTML)

1. Identify which HTML or JS part triggers the issue
2. If the delete button malfunctions, go to the file which is concerned with deleting a todo
3. `CourseGoalItem.js`:
   1. Set a breakpoint for the deleteHandler function (breakpoints cannot be set on HTML elements)
   2. Step into next function call

```javascript
const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
```

4. `App.js`: hover over the variables and look into scope to identify the issue (here id as a string )

```javascript
const deleteItemHandler = (goalId) => {
  setCourseGoals((prevGoals) => {
    const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
    return updatedGoals;
  });
};
```
