[hugoalh]: https://github.com/hugoalh
[hugoalh-studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] & [hugoalh Studio][hugoalh-studio]) Coding Guide - ECMAScript

> **🕰️ Last Update:** 2023/09/23 10:00 UTC

> **🚧 Constructing:** This document is in constructing, contents maybe change rapidly.

This ECMAScript Coding Guide is an additional over the main [Coding Guide](./main.md), and has priority when there have any conflicts.

> **ℹ️ Notice:** All of the examples in this Coding Guide are based on TypeScript, similar style should apply on other programming languages.

## Linter

[`ESLint`](https://eslint.org) does most of the linting works in here, but linter can wrongly assert as well, this ECMAScript Coding Guide has priority when there have any conflicts.

---

## General

### Comparisons with strict equality

Always use strict equality (`===` and `!==`) on every comparisons.

**👎 Bad**

```ts
const foo = 1;
foo == "1";
//=> true
```

**👍 Good**

```ts
const foo = 1;
foo === "1";
//=> false
```

### Namespaces with camel case

Use concise, human-readable, and semantic names as appropriately.

| **Type** | **Upper Camel Case** | **Lower Camel Case** |
|:-:|:-:|:-:|
| `class` | ✔️ |  |
| `class`'s Method  |  | ✔️ |
| `class`'s Property  |  | ✔️ |
| `const` |  | ✔️ |
| `function` |  | ✔️ |
| `function`'s Argument |  | ✔️ |
| `let` |  | ✔️ |

**👍 Good**

```ts
class FooBar {
  catName = "Lucas";
  love(name) {}
}
const fooBar;
function fooBar(bar, gaz) {}
let fooBar;
```

### No extra semi-colons (`;`)

Only add 1 semi-colon at the end of every statements.

**👎 Bad**

```ts
const foo = "bar"//<<<<
if (typeof foo === "string") {
  return true//<<<<
};//<<<<
```

**👍 Good**

```ts
const foo = "bar";//<<<<
if (typeof foo === "string") {
  return true;//<<<<
}//<<<<
```

### No `if-return-else-return`

There is one notable case to keep in mind for the `if-else` control statements, if the `if` statement ends with a `return`, no need to add an `else` statement.

**👎 Bad**

```ts
if (something) {
  return 0;
} else {
  return 1;
}
```

**👍 Good**

```ts
if (something) {
  return 0;
}
return 1;
```

### No negative `if-else` whenever possible

Negative `if-else` control statements can cause confusing.

**👎 Bad**

```ts
if (!something) {
  console.log(anything);
} else {
  console.log(something);
}
```

**👍 Good**

```ts
if (something) {
  console.log(something);
} else {
  console.log(anything);
}
```

### No `"use strict";`

Strict mode is already applied to all of the ECMAScript files, hence no need to add an extra statement `"use strict";`.

### No `var`

Never use `var` in anywhere of the codes to prevent fuzzy declaration and/or hoisting unexpectedly; Instead, use `let`.

### Sort `import` by source

### Add array elements with `.push()`

When add elements to the array, use `.push()` but never direct assignment.

**👎 Bad**

```ts
const pets = [];
pets[pets.length] = "cat";
```

**👍 Good**

```ts
const pets = [];
pets.push("cat");
```

### No arrow function's implicit return

When use arrow functions, never use implicit return (also known as concise body).

**👎 Bad**

```ts
arr.map((e) => e.id);
```

**👍 Good**

```ts
arr.map((e) => {
  return e.id;
});
```

### Use function declarations but not function expressions

Always use function declarations but not function expressions.

**👎 Bad**

```ts
const sum = function (a, b) {
  return a + b;
};
```

**👍 Good**

```ts
function sum(a, b) {
  return a + b;
}
```

When use anonymous functions as a callback (a function passed to another method invocation), if it do not need to access `this`, use an arrow function to make the code shorter and cleaner.

**👎 Bad**

```ts
const array1 = [1, 2, 3, 4];
const sum = array1.reduce(function (a, b) {
  return (a + b);
});
```

**👍 Good**

```ts
const array1 = [1, 2, 3, 4];
const sum = array1.reduce((a, b) => {
  return (a + b);
});
```

### No strings' single quote

Never use single quote (`'`) for strings! Instead, use double quote (`"`) for strings, or backtick (<code>`</code>) for template literals/strings.

**👎 Bad**

```ts
const foo = 'bar';
const goo = 'gar';
const fooGoo = foo + goo;
//=> 'bargar'
```

**👍 Good**

```ts
const foo = "bar";
const goo = "gar";
const fooGoo = `${foo}${goo}`;
//=> "bargar"
```
