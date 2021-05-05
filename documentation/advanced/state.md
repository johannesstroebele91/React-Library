# 1) Relevance

- With out changes to the state
  - an app is in the end just static
- State enable apps to be
  1. interactive: can react to clicks and date entered by users
  2. reactive: app changes when certain things happen

# 2) Handling Events

Handling events like clicks

- and add needed event handlers

# 3) State
* how to manipulate the state
- is similar to props
  - props (data comes from the caller of the component)
  - state (data comes from inside the component)
- is fully controlled by the component
- should be treated as immutable!
  - if state is updated directly, it will not do a rerender
  - only changed via update state `this.setState()` which triggers a rerender
  - e.g. if the click a button should update UI
  - can only be set directly in the constructor

# 4) Functions
## 4.1) setState

- asynchronous
- multiple calls are batched (merged) for performance improvements (IMPORTANT!!!)
- the setState() function has 2 parameters
- Only add the state you want to update!!!

The first parameter can be a function, or an object

1. for objects: only need to add the state that should be updated (e.g. this.setState(peter.phone='01722831')
2. or functions: use if you want to update based on the previous state (e.g. multiple calls for this.setState()

   - you should use a function,
   - because for objects all setState functions are merged
   - which would make no sense

3. the second parameter is a callback function

- enables to change something after the state was altered
- this is because setState() is an async function
