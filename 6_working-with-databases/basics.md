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

# Solution

This can be done

- natively using fetch()
- or with libraries e.g. axios

Can send

- get (often no specification needed e.g. with fetch())
- and post requests (specification needed method: 'POST')

# Detailed explanation

Data can be requested

- by the frontend (user)
- from the backend (server)
- via an API (service layer)

Generally, a backend API exposes URLs

- to which requests can be made (e.g. in JSON format) from the frontend and
- different data is returned by the backend (e.g. in JSON format)
- based on the URL the request was made to
- The backend API has no logic (that's the job of the frontend)

No direct connection to the datbase from the frontend

- is advisable because database secrets would
- would be needed to be exposed to the browser make it work

The backend code is not exposed to the browser

- and therefore hides the database secrets

Among other functionalities, the backend provides

- a connection to the database and
- an API for the frontend to access data

# Firebase database

Firebase enables to setup

- a database
- and directly an API
