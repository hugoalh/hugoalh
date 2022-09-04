[hugoalh]: https://github.com/hugoalh
[hugoalh Studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh Studio]) JavaScript Additional Coding Guide

- **📅 Last Update:** 2022/09/04 09:00 UTC

## Preface

This JavaScript Additional Coding Guide applies to all of the hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh Studio]) projects and repositories, and an additional over the main [Coding Guide](./main.md), this JavaScript Additional Coding Guide has priority when there have any conflicts.

## Comparisons

Always use strict equality (triple equals (`===`)) on every comparisons.

```js
let foo = 1;

/* Good */
typeof foo === "string";
//=> false

/* Bad */
typeof foo == "string";
//=> true
```

## Namespaces

| **Type** | **Case** |
|:-:|:-:|
| `class` | Upper Camel |
| `const` | Lower Camel |
| `function` | Lower Camel |
| `let` | Lower Camel |

```js
class Foo {};
const foo;
function foo(bar, gaz) {};
let foo;
```

## Semi-Colons

Always add 1 semi-colon at the end of the every statements.

```js
let foo = "bar";
if (typeof foo === "string") {
  return true;
};
```

## String Quotes

Never use single quotes (`'`) for string! Instead, use double quotes (`"`), or backtick (<code>`</code>) for template literals (template strings).

## `var`

`var` must not use in anywhere of the codes to prevent fuzzy declaration and/or hoisting unexpectedly.
