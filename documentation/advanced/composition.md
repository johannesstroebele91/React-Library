# Composition (children props)

= Building a UI from smaller building blocks

1. Components configured through props
2. Combination of components

# 1) Components configured through props

General case e.g. <ExpenseItem/>

# 2) Wrapper Components 

- For such components not everything is configured by props
- but content is passed
- via the opening and closing tags of the component
- enabling to combine components for more abstraction


Important:

- such components are not able to support
- all functionalities like normal HTML elements
- out of the box (e.g. classes)
- HOWEVER: such functionalities can be added
- by using functionalities such as props.children

Example: Card component