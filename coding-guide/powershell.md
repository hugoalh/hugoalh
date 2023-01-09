[hugoalh]: https://github.com/hugoalh
[hugoalh-studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] & [hugoalh Studio][hugoalh-studio]) Coding Guide - PowerShell

> **🕰️ Last Update:** 2023/01/09 04:00 UTC
>
> **🚧 Constructing:** This document is in constructing, contents maybe change rapidly.

This PowerShell Coding Guide is an additional over the main [Coding Guide](./main.md), and has priority when there have any conflicts.

## Linter

[`PSScriptAnalyzer`](https://github.com/PowerShell/PSScriptAnalyzer) does most of the linting works in here, but linter can wrongly assert as well, this PowerShell Coding Guide has priority when there have any conflicts.

---

## General

### Namespaces with upper camel case

Use concise, human-readable, and semantic names as appropriately.

```ps1
Class FooBar {}
[String]$FooBar
Function FooBar($Bar, $Gaz) {}
```

### No assignment statements alignments

Consecutive assignment statements are more readable if they are aligned, but also cause some issues. Keep only 1 space (`\s`) between the equal (`=`).

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```ps1
[String]$MyLanguage = 'en_US'
[String]$ThisIsAVeryLoooooooooooooooooooongVariableName = 'fooBar'
```

</td>
<td>

```ps1
[String]$MyLanguage                                     = 'en_US'
[String]$ThisIsAVeryLoooooooooooooooooooongVariableName = 'fooBar'
```

</td>
</tr>
</tbody>
</table>

### No assignment to automatic variables

> **🔍 Linter Rule:** `AvoidAssignmentToAutomaticVariable`

PowerShell has built in variables known as automatic variables, many of them are read only and PowerShell throws an error when trying to assign an value on those, other automatic variables should only be assigned in certain special cases to achieve a certain effect as a special technique.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```ps1
Function Get-CustomErrorMessage($ErrorMessage){
  $FinalErrorMessage = "Error occurred: $ErrorMessage"
}
```

</td>
<td>

```ps1
Function Get-CustomErrorMessage($ErrorMessage){
  $Error = "Error occurred: $ErrorMessage"
}
```

</td>
</tr>
</tbody>
</table>

### No default value for mandatory parameters

> **🔍 Linter Rule:** `AvoidDefaultValueForMandatoryParameter`

Mandatory parameters should not have a default values because there is no scenario where the default can be used. PowerShell prompts for a value if the parameter value is not specified when calling the function.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```ps1
Function Test {
  [CmdletBinding()]
  Param (
    [Parameter(Mandatory = $True)]$Parameter1
  )
}
```

</td>
<td>

```ps1
Function Test {
  [CmdletBinding()]
  Param (
    [Parameter(Mandatory = $True)]$Parameter1 = 'default Value'
  )
}
```

</td>
</tr>
</tbody>
</table>

### No default value for switch type parameters

> **🔍 Linter Rule:** `AvoidDefaultValueSwitchParameter`

Switch parameters for commands should default to `$False`.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
</tr>
<tr>
<td>

```ps1
Function Test-Script {
  [CmdletBinding()]
  Param (
      [String]$Param1,
      [Switch]$Switch
  )
  ...
}
```

</td>
<td>

```ps1
Function Test-Script {
  [CmdletBinding()]
  Param (
      [String]$Param1,
      [Switch]$Switch = $True
  )
  ...
}
```

</td>
</tr>
</tbody>
</table>

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
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
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

### No semi-colons (`;`) at the end of any lines

> **🔍 Linter Rule:** `AvoidSemicolonsAsLineTerminators`

Never end lines with the semi-colons.

<table>
<tbody valign="top">
<tr>
<td align="center"><b><i>✔ Good</i></b></td>
<td align="center"><b><i>❌ Bad</i></b></td>
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
