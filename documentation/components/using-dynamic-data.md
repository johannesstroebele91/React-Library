# Basics
* variables can be dynamically inserted into the HTML
* by using `{}` and the `varName`

```javascript
function HabitItem() {
  // Dummy Data
  const habitDeadline = new Date(2021, 2, 28);
  const habitTitle = "Walk 3x a day";
  const habitStreak = 5;
  return (
    <div className={"expense-item"}>
      <h2>{habitDeadline.toISOString()}</h2>
      <div className={"expense-item-description"}>
        <h2>{habitTitle}</h2>
        <h2 className={"expense-item-price"}>{74+habitStreak}</h2>
      </div>
    </div>
  );
}
```