[hugoalh]: https://github.com/hugoalh
[hugoalh Studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh Studio]) Coding Guide - Additional For JavaScript

> **📅 Last Update:** 2022/09/05 04:00 UTC

## Preface

This JavaScript Additional Coding Guide applies to all of the hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh Studio]) projects and repositories, and an additional over the main [Coding Guide](./main.md), this JavaScript Additional Coding Guide has priority when there have any conflicts.

### Linter

*To be draft.*

## Comparisons

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

## Namespaces

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

## Semi-Colons

Always add 1 semi-colon at the end of the every statements.

```js
let foo = "bar";
if (typeof foo === "string") {
  return true;
};
```

## Sort

*To be draft.*

## Strings Quote

Never use single quote (`'`) for strings! Instead, use double quote (`"`) for strings, or backtick (<code>`</code>) for template literals/strings.

## `var`

`var` must not use in anywhere of the codes to prevent fuzzy declaration and/or hoisting unexpectedly.
