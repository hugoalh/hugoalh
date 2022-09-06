[hugoalh]: https://github.com/hugoalh
[hugoalh Studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh Studio]) Coding Guide - Additional For JavaScript

> **📅 Last Update:** 2022/09/06 03:00 UTC

This JavaScript Additional Coding Guide applies to all of the hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh Studio]) projects and repositories, and an additional over the main [Coding Guide](./main.md), this JavaScript Additional Coding Guide has priority when there have any conflicts.

## Linter

*To be draft.*

---

## Comparisons with strict equality

Always use strict equality (`===` and `!==`) on every comparisons.

```js
let foo = 1;

/* Good */
foo === "1";
//=> false

/* Bad */
foo == "1";
//=> true
```

## Namespaces with camel case

| **Type** | **Case** |
|:-:|:-:|
| `class` | Upper Camel |
| `const` | Lower Camel |
| `function` | Lower Camel |
| `let` | Lower Camel |

```js
class FooBar {};
const fooBar;
function fooBar(bar, gaz) {};
let fooBar;
```

## No `var`

`var` must not use in anywhere of the codes to prevent fuzzy declaration and/or hoisting unexpectedly.

## Semi-colons at the end of every statements

Always add 1 semi-colon at the end of every statements.

```js
let foo = "bar";
if (typeof foo === "string") {
  return true;
};
```

## Sort whenever possible

*To be draft.*

## Strings quote without single quote

Never use single quote (`'`) for strings! Instead, use double quote (`"`) for strings, or backtick (<code>`</code>) for template literals/strings.
