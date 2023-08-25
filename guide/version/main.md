[hugoalh]: https://github.com/hugoalh
[hugoalh-studio]: https://github.com/hugoalh-studio

# hxhS ([hugoalh][hugoalh] & [hugoalh Studio][hugoalh-studio]) Versioning Guide

> **🕰️ Last Update:** 2023/08/06 02:30 UTC

This Versioning Guide applies to all of the hxhS ([hugoalh][hugoalh] & [hugoalh Studio][hugoalh-studio]) projects.

## Classification

Most of the projects use [Semantic Versioning (SemVer) 2.0.0](#semantic-versioning-semver-200) for versioning unless otherwise specified.

| **Type** | **Package Manager / Registry** | **Schema** |
|:-:|:-:|:-:|
| Web | *N/A* | Snapshot ID / Timestamp (ISO 8601) |

## Schema

### Semantic Versioning (SemVer) 2.0.0

```txt
<Major>.<Minor>.<Patch>
<Major>.<Minor>.<Patch>-<PreRelease>
<Major>.<Minor>.<Patch>+<Build>
<Major>.<Minor>.<Patch>-<PreRelease>+<Build>
```

- Increment the \<Major> version when make incompatible API changes.
- Increment the \<Minor> version when add functionality in a backward compatible manner.
- Increment the \<Patch> version when make backward compatible bug fixes.
- Additional labels for pre-release and build metadata are available as extensions to the \<Major>.\<Minor>.\<Patch> format.

> **Attribution:** This Semantic Versioning (SemVer) 2.0.0 is adapted from and available at https://semver.org/spec/v2.0.0.html.
