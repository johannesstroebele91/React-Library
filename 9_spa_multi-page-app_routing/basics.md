# Basics

- Have a different URL for each page (where we are)
- different paths should load different pages
- so when URL changes the visible content of a page is changed

# Traditional approach

IF not working with React

- there is a server
- which stores has different html files stored (or generates them dynamically there)
- and sends based on different URL requests, these html files to the client
- AND these html files are then rendered by the browser

This approach works

- but if we use different HTML pages
- we don't have a single page app
- therefore we loose all the state
- if the URL is changed

So we need to to wait

- for the request + response cycle
- to display changes
- and render the new page by the browser

# React approach (Single Page App)

React enables to load a client-side application

- so a JavaScript web app
- and utilize it to change what is visible on the screen
- which javascript, so instant user feedback can be provided
- instead of needing to wait on the request + response cycle

So just one initial HTML request & response cycle needs to be loaded

- and afterwards JavaScript takes over to handle changes
- Page (URL) changes are then handled client-side by (React) code
- which in return change the visible content without fetching a new HTML file.
- So NOT a request is sent everytime but React listens to clicks on links
