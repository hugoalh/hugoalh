[hugoalh]: https://github.com/hugoalh
[hugoalh Studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh Studio]) Coding Guide - Additional For JavaScript

> **📅 Last Update:** 2022/09/06 05:00 UTC

This JavaScript Additional Coding Guide applies to all of the hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh Studio]) projects and repositories, and an additional over the main [Coding Guide](./main.md), this JavaScript Additional Coding Guide has priority when there have any conflicts.

## Linter

*To be draft.*

---

## Add `Array` items with `.push()`

When add items to the array, use `.push()` but not direct assignment.

<table width="100%">
<tr>
<td align="center" width="50%"><b><i>Good</i></b></td>
<td align="center" width="50%"><b><i>Bad</i></b></td>
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
</table>

## Comparisons with strict equality

Always use strict equality (`===` and `!==`) on every comparisons.

<table width="100%">
<tr>
<td align="center" width="50%"><b><i>Good</i></b></td>
<td align="center" width="50%"><b><i>Bad</i></b></td>
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
</table>

## Namespaces with camel case

Use concise, human-readable, and semantic names as appropriately.

| **Type** | **Case** |
|:-:|:-:|
| `class` | Upper Camel |
| `class`'s Method  | Lower Camel |
| `class`'s Property  | Lower Camel |
| `const` | Lower Camel |
| `function` | Lower Camel |
| `function`'s Argument | Lower Camel |
| `let` | Lower Camel |

```js
class FooBar {
  catName = "Lucas";
  love(name) {};
};
const fooBar;
function fooBar(bar, gaz) {};
let fooBar;
```

## No arrow function's implicit return

When use arrow functions, never use implicit return (also known as concise body).

<table width="100%">
<tr>
<td align="center" width="50%"><b><i>Good</i></b></td>
<td align="center" width="50%"><b><i>Bad</i></b></td>
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
</table>

## No `if () { return } else { return };`

There is one notable case to keep in mind for the `if...else` control statements, if the `if` statement ends with a `return`, no need to add an `else` statement.

<table width="100%">
<tr>
<td align="center" width="50%"><b><i>Good</i></b></td>
<td align="center" width="50%"><b><i>Bad</i></b></td>
</tr>
<tr>
<td>

```js
if (something) {
  return 0;
};
return 1;
```

</td>
<td>

```js
if (something) {
  return 0;
} else {
  return 1;
};
```

</td>
</tr>
</table>

## No negative `if` whenever possible

<table width="100%">
<tr>
<td align="center" width="50%"><b><i>Good</i></b></td>
<td align="center" width="50%"><b><i>Bad</i></b></td>
</tr>
<tr>
<td>

```js
if (something) {
  console.log(something);
} else {
  console.log(anything);
};
```

</td>
<td>

```js
if (!something) {
  console.log(anything);
} else {
  console.log(something);
};
```

</td>
</tr>
</table>

## No `new Array()`, `new BigInt()`, `new Boolean()`, `new Number()`, and `new String()` constructors

`Array`s, `BigInt`s, `Boolean`s, `Number`s and `String`s are all able to create via literals method; `RegExp`s are exceptions.

<table width="100%">
<tr>
<td align="center" width="50%"><b><i>Good</i></b></td>
<td align="center" width="50%"><b><i>Bad</i></b></td>
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
</table>

## No `"use strict";`

*To be draft.*

## No `var`

`var` must not use in anywhere of the codes to prevent fuzzy declaration and/or hoisting unexpectedly.

## Semi-colons at the end of every statements

Always add 1 semi-colon at the end of every statements.

<table width="100%">
<tr>
<td align="center" width="50%"><b><i>Good</i></b></td>
<td align="center" width="50%"><b><i>Bad</i></b></td>
</tr>
<tr>
<td>

```js
let foo = "bar";
if (typeof foo === "string") {
  return true;
};
```

</td>
<td>

```js
let foo = "bar"//;
if (typeof foo === "string") {
  return true//;
}//;
```

</td>
</tr>
</table>

## Sort namespaces whenever possible

*To be draft.*

## Strings quote no single quote

Never use single quote (`'`) for strings! Instead, use double quote (`"`) for strings, or backtick (<code>`</code>) for template literals/strings.

<table width="100%">
<tr>
<td align="center" width="50%"><b><i>Good</i></b></td>
<td align="center" width="50%"><b><i>Bad</i></b></td>
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
</table>

## Use function declarations but not function expressions

Always use function declarations but not function expressions.

<table width="100%">
<tr>
<td align="center" width="50%"><b><i>Good</i></b></td>
<td align="center" width="50%"><b><i>Bad</i></b></td>
</tr>
<tr>
<td>

```js
function sum(a, b) {
  return a + b;
};
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
</table>

When use anonymous functions as a callback (a function passed to another method invocation), if it do not need to access `this`, use an arrow function to make the code shorter and cleaner.

<table width="100%">
<tr>
<td align="center" width="50%"><b><i>Good</i></b></td>
<td align="center" width="50%"><b><i>Bad</i></b></td>
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
</table>
