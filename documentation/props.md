# Props

## 1. Basics

* Are input / parameters that the component can accept
* Make a component reusable
    * e.g. "Hello" Button
    * e.g. "Goodbye" Button
* Should be treated as an immutable object
    * NEVER overwrite the props value!
    * because it should come from the caller

## Props in TypeScript via Interface

* Interface is needed for using props in TypeScript
* An interface defines a schema of what properties an object can have
* Optional properties can be declared by adding the suffix "?" to the property

```typescript jsx
export interface HomePageProps {
    name: string; // required
    age?: number; // optional
}

class HomePage extends React.Component<HomePageProps> {
    render() {
        return (
            <div className="home-page-container">
                Hompage
            </div>
        )
    }
}
```
