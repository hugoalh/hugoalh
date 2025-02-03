# @hugoalh Universal Coding Guide

This document includes the universal coding guidelines over all of the @hugoalh projects, and for all of the markups and programming languages.

All of the examples in this document are in TypeScript syntax, similar style should apply on other programming languages.

## Indent with tab whenever possible

> [!IMPORTANT]
> - All of the markups and programming languages must follow this indentation rule, any invalid indentations are not acceptable!

Always use tab for indentation on most of the markups and programming languages, including but not limited to:

- CSS,
- HTML,
- JavaScript,
- JSON,
- PowerShell,
- TypeScript, and
- XML.

However, some of the markups and programming languages are only support to use space for indentation, these are as exception, including but not limited to:

- Markdown,
- Python, and
- YAML.

Codes in Markdown code blocks are also as exceptions, always use space for indentation in order to prevent weird display on the view mode.

## Keep AND conditions in single line

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

## Keep OR conditions in multiple lines

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

## Keep mixed AND and OR conditions in the same way

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

## Keep nullish coalescing in single line

**👍 Good**

```ts
const foo = a ?? b ?? c;
bar ??= d ?? e ?? f;
```

## No hard word wrap

Use of hard word wrap can cause accessibility issues, difficult to edit, and looks like "texts-quake" ("texts earthquake") on the small screen:

[![Example of "texts-quake" when use of hard word wrap.](https://martin-ueding.de/posts/hard-vs-soft-line-wrap/vim-hard-narrow.png "Example of \"texts-quake\" when use of hard word wrap.")](https://martin-ueding.de/posts/hard-vs-soft-line-wrap)

However, few of the markups are only support to have maximum 256 characters per line, these are as exceptions, including but not limited to:

- Configs, and
- Properties.

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

## Save source code files with "UTF-8 No-BOM" encode

Always save all of the source code files with "UTF-8 No-BOM" (8-bit Unicode Transformation Format without byte order mark) encode.

Some of the editors maybe have options of "UTF-8" and "UTF-8 BOM" instead, thus select "UTF-8".
