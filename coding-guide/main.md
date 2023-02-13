[hugoalh]: https://github.com/hugoalh
[hugoalh-studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] & [hugoalh Studio][hugoalh-studio]) Coding Guide

> **🕰️ Last Update:** 2023/01/14 09:00 UTC

> **🚧 Constructing:** This document is in constructing, contents maybe change rapidly.

This Coding Guide applies to all of the hxhS ([hugoalh][hugoalh] & [hugoalh Studio][hugoalh-studio]) projects and repositories, and applies to all of the markups and programming languages; Some of the markups and programming languages have additional coding guide.

- [JavaScript 🚧](./javascript.md)
- [PowerShell 🚧](./powershell.md)
- [YAML/YML 🚧](./yaml.md)

---

## General

### Forbidden targets

These targets are forbidden in any projects and repositories.

> - Listed without any target's versions means all of the versions
> - Targets which in beta or deprecated status should also forbidden

- Firefox
- GitHub Actions / GitHub Actions Runner
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
  - v6.X.X *(PowerShell Core)*
  - < v5.0.0 *(Windows PowerShell)*
- Python
  - v3.10.6
  - v3.10.5
  - v2.X.X
  - v1.X.X
- Safari

### Indents with tab (`\t`) whenever possible

> **⚠ Important:** All of the markups and programming languages must follow this indentation rule, any invalid indentation are not acceptable!

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

### Keep `OR` conditions in multiple lines; Keep other conditions in single line

> **📋 Note:** All of the examples in here are based on JavaScript, similar style should apply on other programming languages.

Always keep `AND` conditions in single line.

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

Always keep `OR` conditions in multiple lines.

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
}
```

Always keep nullish coalescing in single line.

```js
let foo = a ?? b ?? c;
bar ??= d ?? e ?? f;
```

### No hard word wrap

Use of hard word wrap can cause accessibility issues, difficult to edit, and looks like "texts-quake" ("texts earthquake") on the small screen.

[![Example of "texts-quake" when use of hard word wrap.](https://martin-ueding.de/posts/hard-vs-soft-line-wrap/vim-hard-narrow.png "Example of \"texts-quake\" when use of hard word wrap.")](https://martin-ueding.de/posts/hard-vs-soft-line-wrap)

However, few of the markups are only support to have maximum 256 characters per line, these are as exceptions, including but not limited to:

- Properties (`.conf`).

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

### Source code files encoding with `UTF-8 No-BOM`

Always save all of the source code files with encoding `UTF-8 No-BOM` (8-bit Unicode Transformation Format without byte order mark).

Some of the editors maybe have options of `UTF-8` and `UTF-8 BOM` instead, thus select `UTF-8`.

## Structure

### Known Files

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
<li>TypeScript</li>
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
<td>
<ul>
<li>Docker</li>
<ul>
<li>Dockerfile</li>
</ul>
<li>Git Submodule</li>
<li>GitHub Actions</li>
<li>JavaScript</li>
<ul>
<li>NodeJS</li>
</ul>
<li><i>(Others are omitted due to not in use)</i></li>
</ul>
</td>
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
</ul>
</td>
<td>NodeJS package metadata.</td>
</tr>
<tr>
<td><code>README.md</code></td>
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
</ul>
</td>
<td>TypeScript configuration.</td>
</tr>
</table>
