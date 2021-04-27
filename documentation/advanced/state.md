# State

## 1. Basics

- is similar to props
  - props (data comes from the caller of the component)
  - state (data comes from inside the component)
- is fully controlled by the component
- should be treated as immutable!
  - if state is updated directly, it will not do a rerender
  - only changed via update state `this.setState()` which triggers a rerender
  - e.g. if the click a button should update UI
  - can only be set directly in the constructor

## 2. Function "setState"

- asynchronous
- multiple calls are batched (merged) for performance improvements (IMPORTANT!!!)
- the setState() function has 2 parameters
- Only add the state you want to update!!!

1. the first parameter can be a function, or an object
1. for objects: only need to add the state that should be updated (e.g. this.setState(peter.phone='01722831')
1. for functions: use if you want to update based on the previous state (e.g. multiple calls for this.setState()


    * you should use a function, because for objects all setState functions are merged -> makes no sense

2. the second parameter is a callback function

- enables to change something after the state was altered
- this is because setState() is an async function
