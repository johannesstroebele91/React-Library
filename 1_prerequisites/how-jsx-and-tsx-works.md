# What is JSX/TSX

- Stands for JS/TS XML
  - cause HTML is XML in the end
- JSX/TSX wants users to be able to
  - write code that can be read by most browsers
  - and is user-friendly to write
- JSX/TSX files enable you to use HTML in JS files
  - which is normally not possible
- React goes through each file (starting from the App.tsx/js/jsx)
  - when the application is initialized
  - DOES NOT automatically update, when sth changes
  - e.g. button is clicked
  - but you need to tell React to CHANGE THE STATE

# How JSX/TSX works

In the end, the React code (JSX/TSX files)

- gets transformed behind the scenes into JS
- which can be seen in the `developer tools -> sources -> main.chunk.js`
- (JSX/TSX is just syntactic sugar)

```javascript
function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
```
