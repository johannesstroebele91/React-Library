# 1) Setting styles dynamically

Setup styles in a conditional & dynamic way
e.g. change style if user enterer invalid input

Examples see CourseInput in [Git Commit](https://github.com/johannesstroebele91/React-Library/commit/27f57c0da9b6948a1949a9f7374e51fe10bb3383)

## 1.1) Using useState and static inline-styling

```javascript
const [isValid, setIsValid] = useState(true);

return (
  <>
    <div style={{ color: !isValid ? "red" : "black" }}>Hello</div>
    <button onClick={() => setIsValid(!isValid)} />
  </>
);
```

## 1.2) Using useState and dynamic classes

Writing class or id selectors together

- means that both need to be on the same element

```css
.form-control.invalid button {
  color: red;
}
```

Therefore, the classes need to be addressed as follows

```javascript
const [isValid, setIsValid] = useState(true);

return (
  <>
    <div className={`form-control ${!isValid ? "invalid" : ""}`}>
      <button onClick={() => setIsValid(!isValid)} />
    </div>
  </>
);
```

Excursion:

- multiple conditions can be added with `{}, {}`
- e.g. className={`form-control ${!isValid ? "invalid" : ""}, { ... }`}
