[hugoalh]: https://github.com/hugoalh
[hugoalh-studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh-studio]) Coding Guide

> **📅 Last Update:** 2022/09/07 05:00 UTC

This Coding Guide applies to all of the hxhS ([hugoalh][hugoalh] and [hugoalh Studio][hugoalh-studio]) projects and repositories, and applies to all of the markups and programming languages; Some of the markups and programming languages have additional coding guide.

- [JavaScript (Additional)](./javascript.md)

---

## Indents with tab (`\t`) whenever possible

> **⚠ Important:** All of the markups and programming languages must follow this indents rule, any invalid indents are not acceptable!

Always use tab (`\t`) for indentations on most of the markups and programming languages, including but not limited to:

- CSS (Cascading Style Sheets),
- HTML (HyperText Markup Language),
- JavaScript,
- JSON (JavaScript Object Notation),
- PowerShell,
- TypeScript, and
- XML.

However, some of the markups and programming languages are only support to use space (`\s`) for indentations, these are as exceptions, including but not limited to:

- Markdown,
- Python, and
- YAML/YML (YAML Ain't Markup Language).

Codes in Markdown code blocks are also as exceptions, always use space (`\s`) for indentations in order to prevent weird display on the Markdown view mode.

## Keep `OR` conditions in multiple lines; Keep other conditions in single line

> **📋 Note:** All of the examples in here are based on JavaScript, similar style should apply on other programming languages.

Always keep `AND` conditions in single line.

<table width=100%>
<tbody valign="top">
<tr>
<td align="center" width=50%><b><i>Good</i></b></td>
<td align="center" width=50%><b><i>Bad</i></b></td>
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
</tbody>
</table>

Always keep `OR` conditions in multiple lines.

<table width=100%>
<tbody valign="top">
<tr>
<td align="center" width=50%><b><i>Good</i></b></td>
<td align="center" width=50%><b><i>Bad</i></b></td>
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
</tbody>
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

Use of hard wrap can cause accessibility issues, difficult to edit, and looks like "texts-quake" (~~"earthquake"~~) on the small screen.

[![Example of "texts-quake" when use of hard wrap.](https://martin-ueding.de/posts/hard-vs-soft-line-wrap/vim-hard-narrow.png "Example of \"texts-quake\" when use of hard wrap.")](https://martin-ueding.de/posts/hard-vs-soft-line-wrap)

However, few of the markups are only support to have 256 characters per line, these are as exceptions, including but not limited to:

- Properties (`.conf`).

In such cases, hard wrap should be happen between each sentences.

<table width=100%>
<tbody valign="top">
<tr>
<td align="center" width=50%><b><i>Good</i></b></td>
<td align="center" width=50%><b><i>Bad</i></b></td>
</tr>
<tr>
<td>

```md
|1  |5   |10  |15  |20  |25  |30  |35  |40  |45  |50  |55  |60  |65  |70  |75  |80

---

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

</td>
<td>

```md
|1  |5   |10  |15  |20  |25  |30  |35  |40

---

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

</td>
</tr>
</tbody>
</table>

## Source code files encoding with `UTF-8 No-BOM`

Always save all of the source code files with encoding `UTF-8 No-BOM` (8-bit Unicode Transformation Format without byte order mark).

Some of the editors maybe have options of `UTF-8` and `UTF-8 BOM` instead, thus select `UTF-8`.
