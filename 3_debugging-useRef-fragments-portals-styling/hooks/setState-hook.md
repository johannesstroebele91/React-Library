# Basics

- `this.setState()` enables to update the state asynchronously
  - which also triggers a re-render
  - e.g. if the click a button should update UI
- can only be set directly in the constructor
- multiple calls are batched (merged) for performance improvements (IMPORTANT!!!)
- the setState() function has 2 parameters
- Only add the state you want to update!!!

# Parameters

**The following parameters can be passed to setState()**

## 2.1. parameter can be a function, or an object

a) functions:

- use if you want to update based on the previous state
- e.g. multiple calls for this.setState()
- should be mostly used,
- because for objects all setState functions are merged
- which would make no sense

b) object:

- only need to add the state that should be updated
- e.g. this.setState(peter.phone='01722831'

## 2.2. parameter is a callback function

- enables to change something after the state was altered
- this is because setState() is an async function
