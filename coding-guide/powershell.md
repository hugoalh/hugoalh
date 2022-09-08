[hugoalh]: https://github.com/hugoalh
[hugoalh-studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] & [hugoalh Studio][hugoalh-studio]) Coding Guide - PowerShell (Additional)

> **📅 Last Update:** 2022/09/08 09:00 UTC
>
> **🚧 Constructing:** This document is in constructing, contents maybe change rapidly.

This PowerShell Additional Coding Guide is an additional over the main [Coding Guide](./main.md), and has priority when there have any conflicts.

## Linter

[`PSScriptAnalyzer`](https://github.com/PowerShell/PSScriptAnalyzer) does most of the linting works in here, but linter can wrongly assert as well, this PowerShell Additional Coding Guide has priority when there have any conflicts.

---

## General

### Namespaces with upper camel case

Use concise, human-readable, and semantic names as appropriately.

```ps1
Class FooBar {}
[String]$FooBar
Function FooBar($Bar, $Gaz) {}
```

### No global

> **🔍 Linter Rule:**
>
> - `AvoidGlobalAliases`
> - `AvoidGlobalFunctions`
> - `AvoidGlobalVars`

Global scoped aliases, functions, and/or variables maybe override exist aliases, functions, and/or variables within the sessions with matching names; This name collision can cause difficult to debug issues for consumers of modules.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>Good</i></b></td>
<td align="center"><b><i>Bad</i></b></td>
</tr>
<tr>
<td>

```ps1
New-Alias -Name Name1 -Value Value
Function FunctionName {}
$Var1 = $Null
Function Test-NotGlobal ($Var1, $Var2) {
  $A = $Var1 + $Var2
}
```

</td>
<td>

```ps1
New-Alias -Name Name -Value Value -Scope 'Global'
Function Global:FunctionName {}
$Global:Var1 = $Null
Function Test-NotGlobal ($Var) {
  $A = $Var + $Var1
}
```

</td>
</tr>
</tbody>
</table>

### No semi-colons (`;`)

> **🔍 Linter Rule:** `AvoidSemicolonsAsLineTerminators`

Never end lines with a semi-colon.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>Good</i></b></td>
<td align="center"><b><i>Bad</i></b></td>
</tr>
<tr>
<td>

```ps1
Install-Module -Name 'PSScriptAnalyzer'; $A = 1 + $B
```

</td>
<td>

```ps1
Install-Module -Name 'PSScriptAnalyzer'; $A = 1 + $B;
```

</td>
</tr>
<tr>
<td>

```ps1
Install-Module -Name 'PSScriptAnalyzer'
$A = 1 + $B
```

</td>
<td>

```ps1
Install-Module -Name 'PSScriptAnalyzer';
$A = 1 + $B
```

</td>
</tr>
</tbody>
</table>
