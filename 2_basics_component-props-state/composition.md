# 1) Basics

Composition (children props)

= Building a UI from smaller building blocks

- Components configured through props
- Combination of components
- e.g. <ExpenseItem/>

# 2) Wrapper Components

- For such components not everything is configured by props
- but content is passed
- via the opening and closing tags of the component
- enabling to combine components for more abstraction

# 3) Important

- such components are not able to support
- all functionalities like normal HTML elements
- out of the box (e.g. classes)
- HOWEVER: such functionalities can be added
- by using functionalities such as props.children
- e.g. Card component
