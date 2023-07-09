[hugoalh]: https://github.com/hugoalh
[hugoalh-studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] & [hugoalh Studio][hugoalh-studio]) Coding Guide

> **🕰️ Last Update:** 2023/07/09 02:45 UTC

> **🚧 Constructing:** This document is in constructing, contents maybe change rapidly.

This Coding Guide applies to all of the hxhS ([hugoalh][hugoalh] & [hugoalh Studio][hugoalh-studio]) projects and repositories, and for all of the markups and programming languages.

Some of the markups and/or programming languages have additional coding guide:

- [JavaScript 🚧](./javascript.md)
- [TypeScript 🚧](./typescript.md)
- [PowerShell 🚧](./powershell.md)
- [YAML/YML 🚧](./yaml.md)

> **ℹ️ Notice:** All of the examples in this Coding Guide are based on JavaScript, similar style should apply on other programming languages.

## General

### Forbidden targets

These targets are forbidden in all of the projects and repositories.

> **ℹ️ Notice:**
>
> - Listed without any target's versions means all of the versions
> - Targets which in beta or deprecated status are always forbidden

- Mozilla Firefox
- GitHub Actions Runner
  - v1.X.X
- Go
  - < v1.13.0
- Google Chrome
  - v109.X.X
- Java
- Lua
  - Roblox
  - Roblox Studio
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
- YAML/YML (YAML Ain't Markup Language)

Codes in Markdown code blocks are also as exceptions, always use space for indentation in order to prevent weird display on the view mode.

### Keep AND conditions in single line

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```js
if (a && b && c) {
  return true;
}
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
}
```

</td>
</tr>
</tbody>
</table>

### Keep OR conditions in multiple lines

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
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
}
```

</td>
<td>

```js
if (a || b || c) {
  return true;
}
```

</td>
</tr>
</tbody>
</table>

### Keep mixed AND and OR conditions in the same way

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
}
```

### Keep nullish coalescing in single line

```js
let foo = a ?? b ?? c;
bar ??= d ?? e ?? f;
```

### No hard word wrap

Use of hard word wrap can cause accessibility issues, difficult to edit, and looks like "texts-quake" ("texts earthquake") on the small screen:

[![Example of "texts-quake" when use of hard word wrap.](https://martin-ueding.de/posts/hard-vs-soft-line-wrap/vim-hard-narrow.png "Example of \"texts-quake\" when use of hard word wrap.")](https://martin-ueding.de/posts/hard-vs-soft-line-wrap)

However, few of the markups are only support to have maximum 256 characters per line, these are as exceptions, including but not limited to:

- Properties (`.conf`)

In such cases, applies hard word wrap between each sentences whenever possible.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

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

</td>
<td>

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

</td>
</tr>
</tbody>
</table>

### Save source code files with `UTF-8 No-BOM` encode

Always save all of the source code files with `UTF-8 No-BOM` (8-bit Unicode Transformation Format without byte order mark) encode.

Some of the editors maybe have options of `UTF-8` and `UTF-8 BOM` instead, thus select `UTF-8`.

## Structure

<table>
<tr>
<td><b>Relative Path (Glob)</b></td>
<td><b>Markups & Programming Languages</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>
<ul>
<li><code>.cfduplication.yaml</code> <i>(Legacy)</i></li>
<li><code>.cfduplication.yml</code></li>
</ul>
</td>
<td>All</td>
<td>CodeFactor duplication configuration.</td>
</tr>
<tr>
<td>
<ul>
<li><code>.eslintrc</code> <i>(Legacy)</i></li>
<li><code>.eslintrc.mjs</code> <i>(Legacy)</i></li>
<li><code>.eslintrc.js</code> <i>(Legacy)</i></li>
<li><code>.eslintrc.yaml</code> <i>(Legacy)</i></li>
<li><code>.eslintrc.yml</code></li>
</ul>
</td>
<td>
<ul>
<li>JavaScript</li>
<ul>
<li>NodeJS</li>
</ul>
<li>TypeScript</li>
<ul>
<li>NodeJS</li>
</ul>
</ul>
</td>
<td>ESLint configuration.</td>
</tr>
<tr>
<td><code>.gitattributes</code></td>
<td>All</td>
<td>Git attributes.</td>
</tr>
<tr>
<td><code>.github/CODEOWNERS</code></td>
<td>All</td>
<td>GitHub code owners metadata.</td>
</tr>
<tr>
<td>
<ul>
<li><code>.github/dependabot.yaml</code> <i>(Legacy)</i></li>
<li><code>.github/dependabot.yml</code></li>
</ul>
</td>
<td></td>
<td>GitHub Dependabot configuration.</td>
</tr>
<tr>
<td><code>.github/ISSUE_TEMPLATE/*.md</code></td>
<td>All</td>
<td>GitHub issue templates.</td>
</tr>
<tr>
<td>
<ul>
<li><code>.github/ISSUE_TEMPLATE/config.yaml</code> <i>(Legacy)</i></li>
<li><code>.github/ISSUE_TEMPLATE/config.yml</code></li>
</ul>
</td>
<td>All</td>
<td>GitHub issue configuration.</td>
</tr>
<tr>
<td><code>.github/PULL_REQUEST_TEMPLATE.md</code></td>
<td>All</td>
<td>GitHub pull request templates.</td>
</tr>
<tr>
<td>
<ul>
<li><code>.github/workflows/*.yaml</code> <i>(Legacy)</i></li>
<li><code>.github/workflows/*.yml</code></li>
</ul>
</td>
<td>All</td>
<td>GitHub Actions workflows.</td>
</tr>
<tr>
<td><code>.gitignore</code></td>
<td>All</td>
<td>Git ignore.</td>
</tr>
<tr>
<td><code>.npmignore</code></td>
<td>
<ul>
<li>JavaScript</li>
<ul>
<li>NodeJS</li>
</ul>
<li>TypeScript</li>
<ul>
<li>NodeJS</li>
</ul>
</ul>
</td>
<td>NPM ignore.</td>
</tr>
<tr>
<td><code>.npmrc</code></td>
<td>
<ul>
<li>JavaScript</li>
<ul>
<li>NodeJS</li>
</ul>
<li>TypeScript</li>
<ul>
<li>NodeJS</li>
</ul>
</ul>
</td>
<td>NPM configuration.</td>
</tr>
<tr>
<td>
<ul>
<li><code>.yamllint.yaml</code> <i>(Legacy)</i></li>
<li><code>.yamllint.yml</code></li>
</ul>
</td>
<td>
<ul>
<li>YAML/YML</li>
</ul>
</td>
<td>YAMLLint configuration.</td>
</tr>
<tr>
<td>
<ul>
<li><code>.github/CODE_OF_CONDUCT.md</code> <i>(Legacy)</i></li>
<li><code>CODE_OF_CONDUCT.md</code></li>
</ul>
</td>
<td>All</td>
<td>Contributor covenant code of conduct.</td>
</tr>
<tr>
<td>
<ul>
<li><code>.github/CONTRIBUTING.md</code> <i>(Legacy)</i></li>
<li><code>CONTRIBUTING.md</code></li>
</ul>
</td>
<td>All</td>
<td>Contributing guide.</td>
</tr>
<tr>
<td>
<ul>
<li><code>.lgtm.yaml</code> <i>(Legacy)</i></li>
<li><code>.lgtm.yml</code> <i>(Legacy)</i></li>
</ul>
</td>
<td>All</td>
<td><i>(Legacy)</i> LGTM configuration.</td>
</tr>
<tr>
<td><code>deno.json</code></td>
<td>
<ul>
<li>JavaScript</li>
<ul>
<li>Deno</li>
</ul>
<li>TypeScript</li>
<ul>
<li>Deno</li>
</ul>
</ul>
</td>
<td>Deno configuration.</td>
</tr>
<tr>
<td><code>LICENSE.md</code></td>
<td>All</td>
<td>License.</td>
</tr>
<tr>
<td><code>node_modules/**</code></td>
<td>
<ul>
<li>JavaScript</li>
<ul>
<li>NodeJS</li>
</ul>
<li>TypeScript</li>
<ul>
<li>NodeJS</li>
</ul>
</ul>
</td>
<td>NodeJS modules.</td>
</tr>
<tr>
<td><code>package-lock.json</code></td>
<td>
<ul>
<li>JavaScript</li>
<ul>
<li>NodeJS</li>
</ul>
<li>TypeScript</li>
<ul>
<li>NodeJS</li>
</ul>
</ul>
</td>
<td>NodeJS package metadata lock.</td>
</tr>
<tr>
<td><code>package.json</code></td>
<td>
<ul>
<li>JavaScript</li>
<ul>
<li>NodeJS</li>
</ul>
<li>TypeScript</li>
<ul>
<li>NodeJS</li>
</ul>
</ul>
</td>
<td>NodeJS package metadata.</td>
</tr>
<tr>
<td><code>pnpm-lock.yaml</code></td>
<td>
<ul>
<li>JavaScript</li>
<ul>
<li>NodeJS</li>
</ul>
<li>TypeScript</li>
<ul>
<li>NodeJS</li>
</ul>
</ul>
</td>
<td>PNPM package metadata lock.</td>
</tr>
<tr>
<td>
<ul>
<li><code>.github/README.md</code> <i>(Legacy)</i></li>
<li><code>README.md</code></li>
</ul>
</td>
<td>All</td>
<td>Readme.</td>
</tr>
<tr>
<td>
<ul>
<li><code>.github/SECURITY.md</code> <i>(Legacy)</i></li>
<li><code>SECURITY.md</code></li>
</ul>
</td>
<td>All</td>
<td>Security policy.</td>
</tr>
<tr>
<td><code>tsconfig.json</code></td>
<td>
<ul>
<li>JavaScript</li>
<ul>
<li>NodeJS</li>
</ul>
<li>TypeScript</li>
<ul>
<li>NodeJS</li>
</ul>
</ul>
</td>
<td>TypeScript configuration.</td>
</tr>
</table>
