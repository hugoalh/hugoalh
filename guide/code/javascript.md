[hugoalh]: https://github.com/hugoalh
[hugoalh-studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] & [hugoalh Studio][hugoalh-studio]) Coding Guide - JavaScript

> **🕰️ Last Update:** 2023/01/09 04:00 UTC

> **🚧 Constructing:** This document is in constructing, contents maybe change rapidly.

This JavaScript Coding Guide is an additional over the main [Coding Guide](./main.md), and has priority when there have any conflicts.

## Linter

[`ESLint`](https://eslint.org) does most of the linting works in here, but linter can wrongly assert as well, this JavaScript Coding Guide has priority when there have any conflicts.

---

## General

### Comparisons with strict equality

Always use strict equality (`===` and `!==`) on every comparisons.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔️ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```js
let foo = 1;
foo === "1";
//=> false
```

</td>
<td>

```js
let foo = 1;
foo == "1";
//=> true
```

</td>
</tr>
</tbody>
</table>

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

```js
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

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔️ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```js
let foo = "bar";
if (typeof foo === "string") {
  return true;
}
```

</td>
<td>

```js
let foo = "bar"//;
if (typeof foo === "string") {
  return true//;
};//
```

</td>
</tr>
</tbody>
</table>

### No `if () { return } else { return }`

There is one notable case to keep in mind for the `if...else` control statements, if the `if` statement ends with a `return`, no need to add an `else` statement.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔️ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```js
if (something) {
  return 0;
}
return 1;
```

</td>
<td>

```js
if (something) {
  return 0;
} else {
  return 1;
}
```

</td>
</tr>
</tbody>
</table>

### No negative `if...else` whenever possible

Negative `if...else` control statements can cause confusing.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔️ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```js
if (something) {
  console.log(something);
} else {
  console.log(anything);
}
```

</td>
<td>

```js
if (!something) {
  console.log(anything);
} else {
  console.log(something);
}
```

</td>
</tr>
</tbody>
</table>

### No `new Array()`, `new BigInt()`, `new Boolean()`, `new Number()`, and `new String()` constructors

`Array`s, `BigInt`s, `Boolean`s, `Number`s and `String`s are all able to create via literals method; `RegExp`s are exceptions.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔️ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```js
let cities = [];
```

</td>
<td>

```js
let cities = new Array(length);
```

</td>
</tr>
</tbody>
</table>

### No `"use strict";`

Strict mode is already applied to all of the JavaScript files, hence no need to add an extra statement `"use strict";`.

### No `var`

Never use `var` in anywhere of the codes to prevent fuzzy declaration and/or hoisting unexpectedly; Instead, use `let`.

### Sort namespaces whenever possible

*To be draft.*

## Array

### Add `Array` items with `.push()`

When add items to the array, use `.push()` but never direct assignment.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔️ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```js
let pets = [];
pets.push("cat");
```

</td>
<td>

```js
let pets = [];
pets[pets.length] = "cat";
```

</td>
</tr>
</tbody>
</table>

## Function

### No arrow function's implicit return

When use arrow functions, never use implicit return (also known as concise body).

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔️ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```js
arr.map((e) => {
  return e.id;
});
```

</td>
<td>

```js
arr.map((e) => e.id);
```

</td>
</tr>
</tbody>
</table>

### Use function declarations but not function expressions

Always use function declarations but not function expressions.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔️ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```js
function sum(a, b) {
  return a + b;
}
```
</td>
<td>

```js
const sum = function (a, b) {
  return a + b;
};
```
</td>
</tr>
</tbody>
</table>

When use anonymous functions as a callback (a function passed to another method invocation), if it do not need to access `this`, use an arrow function to make the code shorter and cleaner.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔️ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```js
let array1 = [1, 2, 3, 4];
let sum = array1.reduce((a, b) => {
  return (a + b);
});
```
</td>
<td>

```js
let array1 = [1, 2, 3, 4];
let sum = array1.reduce(function (a, b) {
  return (a + b);
});

```
</td>
</tr>
</tbody>
</table>

## String

### Strings' quote no single quote

Never use single quote (`'`) for strings! Instead, use double quote (`"`) for strings, or backtick (<code>`</code>) for template literals/strings.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔️ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```js
let foo = "bar";
let goo = "gar";
let fooGoo = `${foo}${goo}`;
//=> "bargar"
```

</td>
<td>

```js
let foo = 'bar';
let goo = 'gar';
let fooGoo = foo + goo;
//=> 'bargar'
```

</td>
</tr>
</tbody>
</table>