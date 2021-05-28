# 1) Defining what effects ARE NOT there for

Effects (aka side-effects) are everything

- that React is not mainly there for
- such as the things written down below:

The main job of React is to:

- render the UI
- react to user input
- re-render the UI based on the input

In more detail:

- evaluate & Render JSX
- manage State & Props
- React to User Events & Input
- re-evaluate Component upon State & Prop Chances

# 2) Defining what effects ARE there for

Effects solve the following tasks

- happen outside of the normal component evaluation and render cycle
- especially since they might block/delay rendering (e.g http requests)
- So they are not there to bringing something onto the screen
- but help to make that happen indirectly

**Examples**

- sending HTTP requests to backend servers
- storing something in the browser storage (e.g. local storage)
- set & manage timers or intervals
- handling potential errors

# 3) Relevance

Often side-effects or tasks (e.g. HTTP requests)

- should be called only once
- AND NOT each time the app re-renders!
- which is the STANARD React behavior

Therefore, such side-effects or tasks (e.g. HTTP requests)

- need to be handeling separately
- because it would create e.g. bugs, loops, too many http requests, or re-execute unfinished http requests

# 4) Solution via `useEffect()` hook

1.  `useEffect(() => {...}, [dependencies]);`
    1.  `() => {...}` declares a function (side-effect code)
        - that should be executed after every component evaluation
        - if the specified dependencies changed
    2.  `[dependencies]` is an array of dependencies
2.  TODO finish later
