- [1. Virtual DOM](#1-virtual-dom)
- [2. React re-executes components with state for every change](#2-react-re-executes-components-with-state-for-every-change)
- [3.1. Example: parent component re-executes due to dynamic props `show={showParagraph}`](#31-example-parent-component-re-executes-due-to-dynamic-props-showshowparagraph)
- [3.2. Example: child components re-execute due static props `show={false}`](#32-example-child-components-re-execute-due-static-props-showfalse)

# 1. Virtual DOM

React uses a concept called virtual DOM

- to update the real DOM of a application
- in case of changes (e.g. state) in a more performant way
- which is done as follow:

1. The virtual DOM determines how the component tree
   1. currently looks like and
   2. what it should look like after an update
2. That info is then handed to ReactDOM
   1. which then manipulates the real DOM
   2. to match the virtual DOM
      1. ONLY the necessary changes are altert in the real DOM
      2. all of the other parts of the code stay the same

# 2. React re-executes components with state for every change

Although the real DOM is NOT updated

- whenever the state changes (e.g. via props, context, ...)
- React components are re-evaluated (component functions are re-executed)
- every time such a change happens

# 3.1. Example: parent component re-executes due to dynamic props `show={showParagraph}`

The function `console.log("app running");` of the parent gets triggered

- although only the state of the child component changed
- because the state (e.g. props) are handled in the parent
- (of course the child component gets also triggered for every change)

```javascript
function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  // For every state change, the entire component is re-executed
  // although just content in the child (DemoOutput) has changed
  console.log("app running");
  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph); // cleaner way to use prevState
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Show paragraph</Button>
    </div>
  );
}
```

```javascript
const DemoOutput: React.FC<DemoOutputProps> = ({ show }) => {
  return <p>{show ? "This is new!" : ""}</p>;
};
```

# 3.2. Example: child components re-execute due static props `show={false}`

Every time a parent component changes

- all its child components and their children
- are re-executed automatically
- thereby triggering `console.log("demo output running");`
- (does not matter if the props are static)
