[hugoalh]: https://github.com/hugoalh
[hugoalh Studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh Studio]) Coding Guide

> **📅 Last Update:** 2022/09/06 05:00 UTC

This Coding Guide applies to all of the hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh Studio]) projects and repositories, and applies to all of the markups and programming languages; Some of the markups and programming languages have additional coding guide.

- [JavaScript](./javascript.md)

---

## Indents with tabs whenever possible

> **⚠ Important:** All of the markups and programming languages must follow this indents rule, any invalid indents are not acceptable!

Always use tab (`\t`) for indents on most of the markups and programming languages, such as:

- CSS (Cascading Style Sheets),
- HTML (HyperText Markup Language),
- JavaScript,
- JSON (JavaScript Object Notation),
- PowerShell,
- TypeScript, and
- XML.

However, some of the markups and programming languages are not support use tab (`\t`) for indents, keep use space (`\s`) for indents on these markups and programming languages, such as:

- Markdown,
- Python, and
- YAML/YML (YAML Ain't Markup Language).

Codes in Markdown code blocks have special exceptions, those are always use space (`\s`) for indents in order to prevent weird display on the Markdown view mode.

## Keep `OR` conditions in multiple lines; Keep other conditions in single line

> **📋 Note:** All of the examples in here are based on JavaScript, similar style should apply on other programming languages.

Always keep `AND` conditions in single line.

<table width="100%">
<tr>
<td align="center" width="50%"><b><i>Good</i></b></td>
<td align="center" width="50%"><b><i>Bad</i></b></td>
</tr>
<tr>
<td>

```js
if (a && b && c) {
  return true;
};
```

</td>
<td>

```js
if (
  a &&
  b &&
  c
) {
  return true;
};
```

</td>
</tr>
</table>

Always keep `OR` conditions in multiple lines.

<table width="100%">
<tr>
<td align="center" width="50%"><b><i>Good</i></b></td>
<td align="center" width="50%"><b><i>Bad</i></b></td>
</tr>
<tr>
<td>

```js
if (
  a ||
  b ||
  c
) {
  return true;
};
```

</td>
<td>

```js
if (a || b || c) {
  return true;
};
```

</td>
</tr>
</table>

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

## No hard wrap



## Source code files encoding with UTF-8 No-BOM

All of the source code files must always save with encoding UTF-8 No-BOM (8-bit Unicode Transformation Format without byte order mark).

> **💡 Hint:** Some of the editors maybe have options of `UTF-8` and `UTF-8 BOM` instead, thus select `UTF-8`.
