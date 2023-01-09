[hugoalh]: https://github.com/hugoalh
[hugoalh-studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] & [hugoalh Studio][hugoalh-studio]) Coding Guide - YAML/YML

> **🕰️ Last Update:** 2023/01/09 04:00 UTC
>
> **🚧 Constructing:** This document is in constructing, contents maybe change rapidly.

This YAML/YML Coding Guide is an additional over the main [Coding Guide](./main.md), and has priority when there have any conflicts.

## Linter

[`YAMLLint`](https://github.com/adrienverge/yamllint) does most of the linting works in here, but linter can wrongly assert as well, this YAML/YML Coding Guide has priority when there have any conflicts.

---

## General

### No empty lines

> **🔍 Linter Rule:**
>
> ```yml
> empty-lines:
>   max-end: 1
>   max-start: 0
>   max: 0
> ```

New line for end of files are exceptions.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```yml
object:
  key1: 4
  key2: 8
array:
  - 1
  - 2
  - "abc"
```

</td>
<td>

```yml
object:
  key1: 4
  key2: 8

array:
  - 1
  - 2
  - "abc"
```

</td>
</tr>
</tbody>
</table>

### No extra spaces

> **🔍 Linter Rule:**
>
> ```yml
> colons:
>   max-spaces-after: 1
>   max-spaces-before: 0
> commas:
>   max-spaces-after: 1
>   max-spaces-before: 0
>   min-spaces-after: 1
> hyphens:
>   max-spaces-after: 1
> trailing-spaces: true
> ```

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```yml
object:
  key1: 4
  key2: 8
array:
  - 1
  - 2
  - "abc"
```

</td>
<td>

```yml
object  :
  key1  :  4
  key2  :  8
array   :
  -        1
  -        2
  -        "abc"
```

</td>
</tr>
<tr>
<td>

```yml
this document doesn't contain
any trailing
spaces
```

</td>
<td>

```yml
this document contains     
trailing spaces
on lines 1 and 3         
```

</td>
</tr>
</tbody>
</table>

### No non-empty braces, brackets, and values

> **🔍 Linter Rule:**
>
> ```yml
> braces:
>   forbid: "non-empty"
>   max-spaces-inside-empty: 0
>   max-spaces-inside: 1
>   min-spaces-inside-empty: 0
>   min-spaces-inside: 1
> brackets:
>   forbid: "non-empty"
>   max-spaces-inside-empty: 0
>   max-spaces-inside: 1
>   min-spaces-inside-empty: 0
>   min-spaces-inside: 1
> empty-values:
>   forbid-in-block-mappings: true
>   forbid-in-flow-mappings: true
> ```

*This is YAML/YML, not JSON!*

Use empty braces and/or brackets to specify the type of values which empty.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```yml
object:
  key1: 4
  key2: 8
array:
  - 1
  - 2
  - "abc"
```

</td>
<td>

```yml
object: { key1: 4, key2: 8 }
array: [ 1, 2, "abc" ]
```

</td>
</tr>
<tr>
<td>

```yml
object: {}
array: []
```

</td>
<td>

```yml
object: { }
array: [ ]
```

</td>
</tr>
<tr>
<td>

```yml
object: {}
array: []
```

</td>
<td>

```yml
object:
array:
```

</td>
</tr>
</tbody>
</table>

## Boolean

### No fuzzy truthy

> **🔍 Linter Rule:**
>
> ```yml
> truthy: true
> ```

Fuzzy truthy cause confusing, always use `true` or `false` only.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```yml
sayYes: true
```

</td>
<td>

```yml
sayYes: YES
```

</td>
</tr>
</tbody>
</table>

## Number

### No float numbers start with dot

> **🔍 Linter Rule:**
>
> ```yml
> float-values:
>   require-numeral-before-decimal: true
> ```

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```yml
anemometer:
  angle: 0.0
```

</td>
<td>

```yml
anemometer:
  angle: .0
```

</td>
</tr>
</tbody>
</table>

### No `.NaN`

> **🔍 Linter Rule:**
>
> ```yml
> float-values:
>   forbid-nan: true
> ```

`NaN` is consider as type of number in some of the programming languages which can cause incorrect behaviours.

### No octal numbers

> **🔍 Linter Rule:**
>
> ```yml
> octal-values:
>   forbid-implicit-octal: true
>   forbid-explicit-octal: true
> ```

In YAML/YML, numbers that start with `0` are interpreted as octal, but this is not always wanted. For instance `010` is the city code of Beijing, and should not be converted to `8`.

## String

### Always quote single line strings with double quote (`"`)

> **🔍 Linter Rule:**
>
> ```yml
> quoted-strings:
>   quote-type: "double"
>   required: true
> ```

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```yml
foo: "bar"
```

</td>
<td>

```yml
foo: 'bar'
```

</td>
</tr>
<tr>
<td>

```yml
foo: "bar"
```

</td>
<td>

```yml
foo: bar
```

</td>
</tr>
<tr>
<td>

```yml
not_number: "123"
not_boolean: "true"
not_comment: "# comment"
not_list: "[1, 2, 3]"
not_map: "{a: 1, b: 2}"
```

</td>
<td>

```yml
not_number: 123
not_boolean: true
not_comment: # comment
not_list: [1, 2, 3]
not_map: {a: 1, b: 2}
```

</td>
</tr>
</tbody>
</table>
