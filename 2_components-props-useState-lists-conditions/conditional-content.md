# 1) Basics

Conditional content can be implemented

- by using the ternary operator
- e.g. {condition ? true : false}

# 2) Short condition length example

Better for small statements

1. Declaring the condition
2. Declaring the statement for a true condition
3. Declaring the statement for a false condition

Example: Expenses Component

```javascript
return (
  <>
    {filteredExpenses.length === 0 ? (
      <p style={{ color: "#white", paddingLeft: 18 }}>No expenses found</p>
    ) : (
      filteredExpenses.map((filteredExpenses) => (
        <ExpenseItem key={filteredExpenses.id} expense={filteredExpenses} />
      ))
    )}
  </>
);
```

# 3) Medium condition length example

Better for longer statements

1. Declaring the condition
2. Write the AND operator `&&`
3. Declaring the statement for the true condition

Example: Expenses Component

```javascript
return (
  <>
    {filteredExpenses.length === 0 && (
      <p style={{ color: "white", paddingLeft: 18 }}>No expenses found</p>
    )}
    {filteredExpenses.length > 0 &&
      filteredExpenses.map((filteredExpenses) => (
        <ExpenseItem key={filteredExpenses.id} expense={filteredExpenses} />
      ))}
  </>
);
```

# 4) Long condition length example

The condition can also be declared in advance and used later

Example: Expenses Component

```javascript
let expensesContent: any = (
  <p style={{ color: "white", paddingLeft: 18 }}>No expenses found</p>
);
if (filteredExpenses.length > 0) {
  expensesContent = filteredExpenses.map((filteredExpenses) => (
    <ExpenseItem key={filteredExpenses.id} expense={filteredExpenses} />
  ));
}

return <>{expensesContent}</>;
```

# 5) Long condition length example

The condition can also be declared in advance and used later

Example: ExpensesList Component

```javascript
//Conditional content
if (filteredExpenses.length === 0) {
  return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
}

return (
  <ul className="expenses-list">
    {filteredExpenses.map((filteredExpenses) => (
      <ExpenseItem key={filteredExpenses.id} expense={filteredExpenses} />
    ))}
  </ul>
);
```

# 6)

Parent component:

```javascript
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      // Pass boolean to the child component
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Show paragraph</Button>
    </div>
  );
}
```

Child component:

```javascript
const DemoOutput: React.FC<DemoOutputProps> = ({ show }) => {
  // render paragraph conditionally
  return <p>{show ? "This is new!" : ""}</p>;
};
```
