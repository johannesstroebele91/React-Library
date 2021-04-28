# 1) Basics

- **Goal** is to make components reusable
- **Props** are input / parameters that the component can accept
  - e.g. "Hello" Button
  - e.g. "Goodbye" Button
- Should be treated as an immutable object
  - NEVER overwrite the props value!
  - because it should come from the caller
- Enables to pass data to a custom data
  - by adding a props (properties or attributes)
- Inside of the component
  - you can get access these props
  - and use them  

# 2) Necessity of Interface for TypeScript

- interface is needed for using props in TypeScript
- an interface defines a schema of what properties an object can have
- optional properties can be declared by adding the suffix "?" to the property

```typescript jsx
export interface HomePageProps {
  name: string; // required
  age?: number; // optional
}

class HomePage extends React.Component<HomePageProps> {
  render() {
    return <div className="home-page-container">Hompage</div>;
  }
}
```
