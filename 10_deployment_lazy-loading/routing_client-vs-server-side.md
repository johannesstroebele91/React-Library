# Differences

Client-side routing with React happens

- solely in the browser (with react-router-dom)
- AND NOT in the backend

Server-side routing happens

- on a remote machine
- which host the production ready React code

# Procedure of client-side routing

So if user visits the page (enters domain in browser)

- the user sends a request for the website to the server
- which contains the full URL that was entered

Afterwards the server sends back a response which contains

- HTML, CSS code
- JS React code, which contains the React router
  - which looks at the full URL entered by the user
  - and based omn that path render the requested page for the user

For a single page application

- the path provided in the request
- is ignored by the server
- and always the same response returned
- so the same HTML, CSS, and JS files
- AND only afterwards the React
- and more specifically react-router
- will look at the requested URL

Therefore, the server needs to be configured

- so it does not look at the requested URL path
- which is specific for each hosting provider
- but only the same index.html file
- which then requests the same JS code

# Procedure of server-side routing

In the past, the server handeled the URL

- and provided for different paths
- different files
- which provided to the client
- and rendered there to the user
