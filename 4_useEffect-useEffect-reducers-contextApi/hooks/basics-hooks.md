# Rules of Hooks

- Only Call React hooks in React functions
  - which are only functions that contain JSX (a return function)
  - e.g. React Component functions, Custom Hooks
- Only call React hooks only at the TOP LEVEL of
  - React Component functions or Custom Hooks (TODO explain later)
  - Don't call in: nested functions (e.g. don't call useContext in useEffect, and if-statement, ...)
  - Don't call in: block statements (e.g. `{useState()}`)
- Special rule for useEffect hook
  - always add everything you refer to
  - inside of useEffect() as a dependency
  - as stated in the [explanation](./useEffect-hook.md)
  - SIDE-NOTE: React guarantees to expose state updating functions
    - such as useState or useReducer to never change
    - and therefore they are not needed to be added as dependencies
    - (don't need to be stated, but are allowed to omitted)
