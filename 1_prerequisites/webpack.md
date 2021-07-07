- [1. Basics](#1-basics)
  - [Goal](#goal)
  - [Approach](#approach)
- [2. Elements](#2-elements)
  - [Entry point](#entry-point)
  - [Output](#output)
  - [Loaders](#loaders)
  - [Plugins](#plugins)
  - [Mode](#mode)
  - [Code splitting (lazy loading)](#code-splitting-lazy-loading)
- [3. Popular commands](#3-popular-commands)

# 1. Basics

## Goal

- unify all these different sources and module types
- in a way that's possible to import everything in your JS code,
- and finally produce a shippable output

## Approach

- bundles JavaScript files for usage in a browser
- It can handle not only combination and minification of JS and CSS files,
- but also other assets such as image files (spriting) through the use of plugins

# 2. Elements

## Entry point

- starting point for webpack js a JS file
- from which all the dependencies of a frontend project are collected
- most often it is the default file `src/index.js` or `src/index.ts`

## Output

- It is where the resulting JS and static files are collected during the build process
- The default output folder for webpack (since version 4. is dist/
- The resulting JS files are part of the so called bundle

## Loaders

- are third-party extensions that help webpack deal with various file extensions
- e.g. CSS, images, txt files
- transform files (other than JavaScript) in modules
- Once the file becomes a module,
- webpack can use it as a dependency in your project

## Plugins

- Are third-party extensions that can alter how webpack works
- e.g. plugins for extracting HTML, CSS, or for setting up environment variables

## Mode

- webpack has two modes of operations: development and production
- production mode: automatically applies minification
- development mode: automatically applies optimizations to your JS code

## Code splitting (lazy loading)

- optimization technique for avoiding larger bundles
- developers can decide to load whole blocks of JS
- only in response to some user interaction
- e.g. clicks or route changes (or other conditions)

# 3. Popular commands

- npm start: starts the web development server using webpack
- npm build: build webpack for production
