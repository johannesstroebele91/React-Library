- [1) Explanation of useEffect](#1-explanation-of-useeffect)
- [2) useEffect hook and Effects](#2-useeffect-hook-and-effects)
- [3) Use Cases for useEffect](#3-use-cases-for-useeffect)
- [4) How to see local storage items in the developer tools](#4-how-to-see-local-storage-items-in-the-developer-tools)
- [5) See approaches and practical examples in the useEffect-approaches file](#5-see-approaches-and-practical-examples-in-the-useeffect-approaches-file)

Code of project changed, therefore refer to git commit: [27ef5348f073c6a4d80138814c5a591eab3afee1](https://github.com/johannesstroebele91/React-Library/commit/27ef5348f073c6a4d80138814c5a591eab3afee1)

# 1) Explanation of useEffect

The useEffect hook enables to

- store a state where it persists the reload
- and every time the app start
- the app checks if a state was persited

The state can be stored in the browser storage via

- local storage: easy to use
- cookies: a little more difficult

# 2) useEffect hook and Effects

Side-effects (short effects) are for managing

- things that happen outside of the normal component evaluation and render cycle
- especially things that might block/delay rendering (e.g http requests)\*\*\*\*
- So they are NOT there to bringing something onto the screen
- but help to make that happen indirectly

Often these side-effects (e.g. HTTP requests)

- should be called only once or if an event occurs
- AND NOT each time the app re-renders
- which is the STANARD React behavior

So, they need to be handeling separately from React

- because it would create bad behaviors such as
- bugs, loops, too many http requests, or re-execute unfinished http requests

# 3) Use Cases for useEffect

- sending HTTP requests to backend servers
- storing something in the browser storage (e.g. local storage)
- set & manage timers or intervals
- handling potential errors
- as a response of an event to trigger a React state update (which is an side-effect)
  - e.g. after first rendering of the app: [App.tsx](./app_login-page/src/App.tsx)
  - e.g. after user input: [Login.tsx](./app_login-page/src/components/Login/Login.tsx) in the

They are NOT concerned with the main jobs of React which are:

- render the UI
- react to user input
- re-render the UI based on the input

To be more precise they are NOT for React jobs such as:

- evaluate & Render JSX
- manage State & Props
- React to User Events & Input
- re-evaluate Component upon State & Prop Chances

# 4) How to see local storage items in the developer tools

1. Go to Developer Tools
2. Application
3. Local Storage

# 5) See approaches and practical examples in the useEffect-approaches file
