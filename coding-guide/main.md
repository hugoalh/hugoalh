[hugoalh]: https://github.com/hugoalh
[hugoalh Studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh Studio]) Coding Guide

- **📅 Last Update:** 2022/09/04 09:00 UTC

## Preface

This Coding Guide applies to all of the hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh Studio]) projects and repositories, and covers most of the markups and programming languages; Some of the markups and programming languages have additional coding guide.

- [JavaScript](./javascript.md)

## Files Encoding

Always save the source code files with encoding UTF-8 (8-bit Unicode Transformation Format) without BOM (byte order mark).

## Indents

> **⚠ Important:** All of the markups and programming languages must obey this indents rule, any invalid indents are not acceptable!

Always use tab (`\t`) for indents on most of the markups and programming languages, such as CSS (Cascading Style Sheets), HTML (HyperText Markup Language), JavaScript, JSON (JavaScript Object Notation), PowerShell, TypeScript, and XML.

However, some of the markups and programming languages are not support use tab (`\t`) for indents, keep use space (`\s`) for indents on these markups and programming languages, such as Markdown, Python, and YAML/YML (YAML Ain't Markup Language).

Codes in Markdown code blocks have special exception, those are always use space (`\s`) for indents in order to prevent incorrect indents on view mode.

## Logical Operators

> **📋 Note:** All of the examples in here are based on JavaScript, similar style should apply on other programming languages.

Always keep `AND` conditions in single line.

```js
if (a && b && c) {
  return true;
};
```

Always keep `OR` conditions in multiple lines.

```js
if (
  a ||
  b ||
  c
) {
  return true;
};
```

Mixed `AND` and `OR` conditions also keep the same style.

```js
/*
True when:

- a + b + c
- a + d + e + f
- g
*/
if (
  a && (
    (b && c) ||
    (d && e && f)
  ) ||
  g
) {
  return true;
};
```

Always keep nullish coalescing in single line.

```js
let foo = a ?? b ?? c;
bar ??= d ?? e ?? f;
```
