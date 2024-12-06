# ES Dependencies Graph

**🕰️ Last Update:** 2024-12-06 09:40 UTC

> [!NOTE]
>
> - All of the packages have these development dependencies:
>   - `deno-nodejs-transformer`
> - Only the latest release version of the packages are rendered.

```mermaid
%%{init: {"flowchart": {"defaultRenderer": "elk", "htmlLabels": false}} }%%
flowchart LR
  classDef external fill:#e0e0e0,stroke:#e0e0e0;

  adler32([adler32])
  bytes-matcher([bytes-matcher])
  deno-nodejs-transformer([deno-nodejs-transformer])
  env([env])
  eol([eol])
  exfetch([exfetch])
  fs([fs])
  github-actions-core([github-actions-core])
  github-sodium([github-sodium])
  http-header-link([http-header-link])
  http-header-retry-after([http-header-retry-after])
  is-empty([is-empty])
  is-json([is-json])
  is-numeric-integral([is-numeric-integral])
  is-numeric-prime([is-numeric-prime])
  is-object-plain([is-object-plain])
  is-primitive([is-primitive])
  is-special-type([is-special-type])
  is-string-ascii([is-string-ascii])
  is-string-singleline([is-string-singleline])
  pressure([pressure])
  range-iterator([range-iterator])
  setation([setation])
  shuffle-array([shuffle-array])
  sort([sort])
  string-dissect([string-dissect])
  string-overflow([string-overflow])
  symmetric-crypto([symmetric-crypto])
  temperature([temperature])
  unique-array([unique-array])
  jsr_deno_dnt(jsr:@deno/dnt):::external
  jsr_std_cli(jsr:@std/cli):::external
  jsr_std_collections(jsr:@std/collections):::external
  jsr_std_encoding(jsr:@std/encoding):::external
  jsr_std_fs(jsr:@std/fs):::external
  jsr_std_jsonc(jsr:@std/jsonc):::external
  jsr_std_path(jsr:@std/path):::external
  npm_ansi-regex(npm:ansi-regex):::external
  npm_libsodium-wrappers(npm:libsodium-wrappers):::external
  npm_url-regex-safe(npm:url-regex-safe):::external

  adler32 -- CLI --> jsr_std_cli
  deno-nodejs-transformer --> jsr_deno_dnt
  deno-nodejs-transformer --> is-json
  deno-nodejs-transformer --> jsr_std_collections
  deno-nodejs-transformer --> jsr_std_fs
  deno-nodejs-transformer --> jsr_std_jsonc
  deno-nodejs-transformer --> jsr_std_path
  env --> jsr_std_path
  eol -- CLI --> jsr_std_cli
  exfetch --> http-header-link
  exfetch --> http-header-retry-after
  fs --> jsr_std_path
  github-actions-core --> env
  github-actions-core --> is-json
  github-actions-core --> is-string-singleline
  github-actions-core --> jsr_std_fs
  github-actions-core --> jsr_std_path
  github-sodium --> is-json
  github-sodium --> npm_libsodium-wrappers
  http-header-link --> is-string-singleline
  http-header-retry-after
  is-empty --> is-object-plain
  is-json --> is-object-plain
  string-dissect --> npm_ansi-regex
  string-dissect --> npm_url-regex-safe
  string-overflow --> string-dissect
  symmetric-crypto --> jsr_std_encoding
```
