# Basics
* Necessary to compile TS code to JS code
* Compiler is invoked automatically if
  * the dev server is started
  * OR the project is built for production

# compilerOptions
* target: JS version
  * es5 (which is quite old, but broad browser support)
  * influences how TS is compiled into JS
  * also the bundler babel influences the outcome (optimizes code)
* lib: TS libraries which are included
  * influences which types are known out of the box
  * e.g. dom states that default dom types are understood (e.g. HTMLInputElement type)
* allowJS: for mixing TS with JS files
* strict: true means the strictest possible setting (e.g. no implicit any type!)
* jsx: controlls that jsx code is supported
* include: states where the compiler searches ts files to compile