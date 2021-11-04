# Steps

1. Testing code (e.g. errors handled)
2. Optimization opportunities (e.g. lazy loading)
3. Build App for Production (execute a script output a production ready bundle of the code - optimized and minified)
4. Upload production code to server (deployment)
5. Configure server
6. Build app for Production
7. Configure server (to handle SPA)

Run `npm run build`

- creates and build folder
- which contains a static folder
- with all necessary js and css files

A react SPA is a static website

- thereby only concist of
- HTML, CSS and JavaScript files
- WHICH is only client-(browser)-side,
- not server-side code (e.g. Node.js, PHP, ...)

# Host

A static site

- needs a static site hosting provider
- e.g. https://geekflare.com/best-static-site-hosting-platform/
- such as firebase

The website can be hosted on Firebase

- by creating an account
- and following these steps https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25600988#overview
  - `npm install -g firebase-tools`
  - `firebase login`
  - `firebase init`
  - Selecting hosting with spacebar
  - Set build as the public directory
