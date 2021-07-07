- [1. Basics](#1-basics)
- [2. How it works](#2-how-it-works)
- [3. Example](#3-example)
- [3.1. Child: DemoList of app_simple-list](#31-child-demolist-of-app_simple-list)
- [3.2. Parent: App.tsx of app_simple-list](#32-parent-apptsx-of-app_simple-list)

# 1. Basics

The hook useMemo helps to

- memorize reference values
- apart from the normal component re-render cycle

Is used much less frequently

- then you will use the useCallback hook
- because memorizing functions is needed much more often
- then memorizing reference values (e.g. arrays)

Memorizing reference values

- is only needed if it is performance intensive
- to recalculated (e.g. with sort()) something based on that data
- because storing such values in the React memory
- also takes quite a lot of performance

# 2. How it works

The hook useMemo manages

- that the function is only executed
- when the reference value
- ,stated in the dependencies, changed

# 3. Example

# 3.1. Child: DemoList of app_simple-list

The hook useMemo enables here that

- the sort function is only called one
- HOWEVER: items changed in the parent
  - for every time the component re-renders
  - because all variables are recreated
  - therefore items needs to be managed
  - in the parent as mentioned in 3.2

```javascript
const DemoList: React.FC<DemoListProps> = ({ title, items }) => {
  const sortedList = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
```

# 3.2. Parent: App.tsx of app_simple-list

As stated before, the useMemo is needed

- to manage that items is not recreated unnecessarily here
- because the title was changed

```javascript
function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={useMemo(() => [5, 3, 1, 10, 9], [])} />
      <Button onClick={changeTitleHandler}>Change list title</Button>
    </div>
  );
}
```

Alternative

```javascript
function App() {
    ...
    const listItems = useMemo(() => [5, 3, 1, 10, 9], [])
    return <DemoList title={listTitle} items={listItems} />
}
```
