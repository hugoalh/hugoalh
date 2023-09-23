[hugoalh]: https://github.com/hugoalh
[hugoalh-studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] & [hugoalh Studio][hugoalh-studio]) Coding Guide

> **🕰️ Last Update:** 2023/09/23 10:00 UTC

> **🚧 Constructing:** This document is in constructing, contents maybe change rapidly.

This Coding Guide applies to all of the hxhS ([hugoalh][hugoalh] & [hugoalh Studio][hugoalh-studio]) projects, and for all of the markups and programming languages.

Some of the markups and/or programming languages have additional coding guide:

- [ECMAScript 🚧](./ecmascript.md)
- [PowerShell 🚧](./powershell.md)
- [YAML 🚧](./yaml.md)

> **ℹ️ Notice:** All of the examples in this Coding Guide are based on TypeScript, similar style should apply on other programming languages.

## General

### Forbidden targets

These targets are forbidden in all of the projects.

> **ℹ️ Notice:**
>
> - Targets without versions means all of the versions.
> - Targets which in beta or deprecated status are always forbidden.

- Mozilla Firefox
- GitHub Actions Runner
  - v1.X.X
- Go
  - < v1.13.0
- Google Chrome
  - v109.X.X
- Java
- Microsoft Edge
  - v109.X.X
  - EdgeHTML
- Microsoft Internet Explorer
- NodeJS
  - Non-LTS (Long Term Supported) versions (e.g.: v7.X.X, v9.X.X, v11.X.X, v13.X.X, v15.X.X, v17.X.X, ...)
  - < v6.9.0
- Opera
- PowerShell
  - v7.0.X
  - v6.X.X (PowerShell Core)
  - < v5.0.0 (Windows PowerShell)
- Python
  - v3.10.6
  - v3.10.5
  - v2.X.X
  - v1.X.X
- Safari (Web Browser)

### Indent with tab whenever possible

> **⚠️ Important:** All of the markups and programming languages must follow this indentation rule, any invalid indentation are not acceptable!

Always use tab for indentation on most of the markups and programming languages, including but not limited to:

- CSS (Cascading Style Sheets)
- HTML (HyperText Markup Language)
- JavaScript
- JSON (JavaScript Object Notation)
- PowerShell
- TypeScript
- XML

However, some of the markups and/or programming languages are only support to use space for indentation, these are as exception, including but not limited to:

- Markdown
- Python
- YAML (YAML Ain't Markup Language)

> **ℹ️ Notice:** Codes in Markdown code blocks are also as exceptions, always use space for indentation in order to prevent weird display on the view mode.

### Keep AND conditions in single line

**👎 Bad**

```ts
if (
  a &&
  b &&
  c
) {
  return true;
}
```

**👍 Good**

```ts
if (a && b && c) {
  return true;
}
```

### Keep OR conditions in multiple lines

**👎 Bad**

```ts
if (a || b || c) {
  return true;
}
```

**👍 Good**

```ts
if (
  a ||
  b ||
  c
) {
  return true;
}
```

### Keep mixed AND and OR conditions in the same way

**👍 Good**

```ts
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
}
```

### Keep nullish coalescing in single line

**👍 Good**

```ts
const foo = a ?? b ?? c;
bar ??= d ?? e ?? f;
```

### No hard word wrap

Use of hard word wrap can cause accessibility issues, difficult to edit, and looks like "texts-quake" ("texts earthquake") on the small screen:

[![Example of "texts-quake" when use of hard word wrap.](https://martin-ueding.de/posts/hard-vs-soft-line-wrap/vim-hard-narrow.png "Example of \"texts-quake\" when use of hard word wrap.")](https://martin-ueding.de/posts/hard-vs-soft-line-wrap)

However, few of the markups are only support to have maximum 256 characters per line, these are as exceptions, including but not limited to:

- Configs
- Properties

In such cases, applies hard word wrap between each sentences whenever possible.

**👎 Bad**

```md
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Pellentesque tincidunt vestibulum
enim quis egestas.
Nunc eget quam ultrices, accumsan
lorem id, porttitor nulla.
Curabitur dui metus, rhoncus at
accumsan nec, fringilla vel
ligula.
Pellentesque mollis ipsum at
risus rhoncus, id iaculis lorem
molestie.
Ut sed tempus nibh.
Donec suscipit et nulla ac
congue.
Pellentesque sed convallis
neque.
Aenean tortor dolor, laoreet
quis lectus sed, luctus eleifend
metus.
Pellentesque pulvinar tempor nibh
et interdum.
Sed lobortis blandit nisi, id
pretium felis facilisis et.
```

**👍 Good**

```md
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque tincidunt vestibulum enim quis egestas.
Nunc eget quam ultrices, accumsan lorem id, porttitor nulla.
Curabitur dui metus, rhoncus at accumsan nec, fringilla vel ligula.
Pellentesque mollis ipsum at risus rhoncus, id iaculis lorem molestie.
Ut sed tempus nibh.
Donec suscipit et nulla ac congue.
Pellentesque sed convallis neque.
Aenean tortor dolor, laoreet quis lectus sed, luctus eleifend metus. 
Pellentesque pulvinar tempor nibh et interdum. 
Sed lobortis blandit nisi, id pretium felis facilisis et.
```

### Save source code files with "UTF-8 No-BOM" encode

Always save all of the source code files with "UTF-8 No-BOM" (8-bit Unicode Transformation Format without byte order mark) encode.

Some of the editors maybe have options of "UTF-8" and "UTF-8 BOM" instead, thus select "UTF-8".
