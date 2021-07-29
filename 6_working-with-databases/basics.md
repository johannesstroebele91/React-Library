# Basics

Database runs on a database server

- a database can be accessed via
- SQL, NoSQL, ...

Cannot directly connect to a database

- using a browser-side app (React)
- due to security issues
  - because it would need to
  - expose the database credentials in the browser
  - AND furthermore leads to performance issues
  - for larger projects

Therefore, a backend app

- needs to handle the connection to the database
- with runs on a separate server
- because it cannot be viewed by the user

So the frontend

- needs to talk to the backend app
- via a backend API

# API

application programming interface

- rules on how HTTP requests (e.g. REST or GraphQL)
- needs to be mad
