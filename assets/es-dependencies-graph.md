# ES Dependencies Graph

**🕰️ Last Updated:** 2024-12-08 03:55 UTC

> [!NOTE]
>
> - All of the packages require these development dependencies:
>   - `deno-nodejs-transformer`
> - Only the latest release version of the packages are rendered.
> - Packages which has gray background are external packages.

```mermaid
%%{init: {"flowchart": {"htmlLabels": false}} }%%
flowchart LR
  classDef external fill:#e0e0e0,stroke:#e0e0e0;

  subgraph GRAPH_Array [Array]
    shuffle-array([shuffle-array])
    unique-array([unique-array])
  end

  subgraph GRAPH_Assert [Assert / Determine]
    bytes-matcher([bytes-matcher])
    is-empty([is-empty])
    is-json([is-json])
    is-numeric-integral([is-numeric-integral])
    is-numeric-prime([is-numeric-prime])
    is-object-plain([is-object-plain])
    is-primitive([is-primitive])
    is-special-type([is-special-type])
    is-string-ascii([is-string-ascii])
    is-string-singleline([is-string-singleline])
  end

  subgraph GRAPH_Compile [Bundle / Compile / Transform]
    deno-nodejs-transformer([deno-nodejs-transformer])
    jsr_deno_dnt(jsr:@deno/dnt):::external
  end

  subgraph GRAPH_Hash [Checksum / Hash]
    adler32([adler32])
  end

  subgraph GRAPH_CI [CI]
    github-actions-core([github-actions-core])
  end

  subgraph GRAPH_Crypto [Crypto]
    github-sodium([github-sodium])
    symmetric-crypto([symmetric-crypto])
    npm_libsodium-wrappers(npm:libsodium-wrappers):::external
  end

  subgraph GRAPH_Encoding [Encoding]
    jsr_std_encoding(jsr:@std/encoding):::external
  end

  subgraph GRAPH_System [File System / Operate System]
    env([env])
    eol([eol])
    fs([fs])
    jsr_std_fs(jsr:@std/fs):::external
    jsr_std_path(jsr:@std/path):::external
  end

  subgraph GRAPH_Iterate [Iterate]
    range-iterator([range-iterator])
    setation([setation])
  end

  subgraph GRAPH_Net [Net]
    exfetch([exfetch])
    http-header-link([http-header-link])
    http-header-retry-after([http-header-retry-after])
  end

  subgraph GRAPH_String [String]
    string-dissect([string-dissect])
    string-overflow([string-overflow])
  end

  subgraph GRAPH_Units [Units]
    pressure([pressure])
    temperature([temperature])
  end

  subgraph GRAPH_Misc [Miscellaneous]
    sort([sort])
    jsr_std_cli(jsr:@std/cli):::external
    jsr_std_collections(jsr:@std/collections):::external
    jsr_std_jsonc(jsr:@std/jsonc):::external
    npm_ansi-regex(npm:ansi-regex):::external
    npm_url-regex-safe(npm:url-regex-safe):::external
  end

  adler32 -- CLI --> jsr_std_cli
  deno-nodejs-transformer --> is-json
  deno-nodejs-transformer --> jsr_deno_dnt
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
