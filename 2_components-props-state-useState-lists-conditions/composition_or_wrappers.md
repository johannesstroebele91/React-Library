# 1. Basics

Composition (children props)

= Building a UI from smaller building blocks

- Components configured through props
- Combination of components
- e.g. <ExpenseItem/>

# 2. Wrapper Components

- For such components not everything is configured by props
- but content is passed
- via the opening and closing tags of the component using `{props.children}`
- enabling to combine components for more abstraction

# 3. Important

- such components are not able to support
- all functionalities like normal HTML elements
- out of the box (e.g. classes)
- HOWEVER: such functionalities can be added
- by using functionalities such as props.children
- e.g. Card component

# 4. Example

Card.tsx from food order system

```javascript
import classes from "./Card.module.css";

const Card: React.FC = (props: any) => {
  return <div className={classes.card}>{props.children}</div>;
};
export default Card;
```
