# Goals

- HTML can be used in JS files using JSX/TSX
- Stands for JS/TS XML cause HTML is XML in the end

# Goals

- JSX/TSX wants users to be able to
- write code that can be read by most browsers
- and is user-friendly to write

# Relevance
- Generally, HTML cannot be using in JS files
- which is why such code is node valid JS code
- HOWEVER, the feature JSX/TSX makes this possible
- by introducing dedicated JSX/TSX files
- which transform the code behind the scenes
- which can be seen in the `developer tools -> sources`

```javascript
function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
```
