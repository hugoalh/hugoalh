# ES Dependencies Graph

**🕰️ Last Updated:** 2025-03-12 10:20 UTC

> [!NOTE]
> 
> - External dependencies are not rendered.
> - Only the latest release version of the packages are rendered.

```mermaid
flowchart LR
  subgraph GRAPH_Assert["Assert / Determine"]
    bytes-matcher(["bytes-matcher"])
    is-empty(["is-empty"])
    is-json(["is-json"])
    is-object-plain(["is-object-plain"])
    is-primitive(["is-primitive"])
    is-special-type(["is-special-type"])
    is-numeric-integral(["is-numeric-integral"])
    is-numeric-prime(["is-numeric-prime"])
    is-string-ascii(["is-string-ascii"])
    is-string-singleline(["is-string-singleline"])
    string-dissect(["string-dissect"])
  end

  subgraph GRAPH_CI["CI / Workflow"]
    github-actions-core(["github-actions-core"])
  end

  subgraph GRAPH_Compiler["Bundler / Compiler / Transformer"]
    deno-nodejs-transformer(["deno-nodejs-transformer"])
  end

  subgraph GRAPH_Crypto["Crypto"]
    github-sodium(["github-sodium"])
    symmetric-crypto(["symmetric-crypto"])
  end

  subgraph GRAPH_Hash["Checksum / Hash"]
    adler32(["adler32"])
    djb2a(["djb2a"])
    fnv(["fnv"])
    sdbm(["sdbm"])
  end

  subgraph GRAPH_Iterate["Iterate"]
    range-iterator(["range-iterator"])
    setation(["setation"])
  end

  subgraph GRAPH_Linter["Formatter / Linter"]
    deno-lint-rules(["deno-lint-rules"])
  end

  subgraph GRAPH_Net["Net"]
    exfetch(["exfetch"])
    http-header-link(["http-header-link"])
    http-header-retry-after(["http-header-retry-after"])
  end

  subgraph GRAPH_RegExp["Regular Expression"]
    url-regexp(["url-regexp"])
  end

  subgraph GRAPH_System["System"]
    env(["env"])
    eol(["eol"])
    fs(["fs"])
    process(["process"])
  end

  subgraph GRAPH_Types_Operation["Types Operation"]
    shuffle-array(["shuffle-array"])
    sort(["sort"])
    string-overflow(["string-overflow"])
    unique-array(["unique-array"])
  end

  subgraph GRAPH_Units["Units"]
    pressure(["pressure"])
    temperature(["temperature"])
  end

  deno-lint-rules --> is-string-ascii
  deno-nodejs-transformer --> fs
  deno-nodejs-transformer --> is-json
  deno-nodejs-transformer --> sort
  exfetch --> http-header-link
  exfetch --> http-header-retry-after
  fs --> fnv
  fs --> is-json
  fs --> sort
  github-actions-core --> env
  github-actions-core --> eol
  github-actions-core --> is-json
  github-actions-core --> is-string-singleline
  github-sodium --> is-json
  http-header-link --> is-string-singleline
  http-header-retry-after
  is-empty --> is-object-plain
  is-json --> is-object-plain
  process --> is-json
  setation --> sort
  string-dissect --> url-regexp
  string-overflow --> string-dissect

  adler32 -. Development .-> deno-nodejs-transformer
  bytes-matcher -. Development .-> deno-nodejs-transformer
  djb2a -. Development .-> deno-nodejs-transformer
  env -. Development .-> deno-nodejs-transformer
  eol -. Development .-> deno-nodejs-transformer
  exfetch -. Development .-> deno-nodejs-transformer
  fnv -. Development .-> deno-nodejs-transformer
  fs -. Development .-> deno-nodejs-transformer
  github-actions-core -. Development .-> deno-nodejs-transformer
  github-sodium -. Development .-> deno-nodejs-transformer
  http-header-link -. Development .-> deno-nodejs-transformer
  http-header-retry-after -. Development .-> deno-nodejs-transformer
  is-empty -. Development .-> deno-nodejs-transformer
  is-json -. Development .-> deno-nodejs-transformer
  is-numeric-integral -. Development .-> deno-nodejs-transformer
  is-numeric-prime -. Development .-> deno-nodejs-transformer
  is-object-plain -. Development .-> deno-nodejs-transformer
  is-primitive -. Development .-> deno-nodejs-transformer
  is-special-type -. Development .-> deno-nodejs-transformer
  is-string-ascii -. Development .-> deno-nodejs-transformer
  is-string-singleline -. Development .-> deno-nodejs-transformer
  pressure -. Development .-> deno-nodejs-transformer
  process -. Development .-> deno-nodejs-transformer
  range-iterator -. Development .-> deno-nodejs-transformer
  sdbm -. Development .-> deno-nodejs-transformer
  setation -. Development .-> deno-nodejs-transformer
  shuffle-array -. Development .-> deno-nodejs-transformer
  sort -. Development .-> deno-nodejs-transformer
  string-dissect -. Development .-> deno-nodejs-transformer
  string-overflow -. Development .-> deno-nodejs-transformer
  symmetric-crypto -. Development .-> deno-nodejs-transformer
  temperature -. Development .-> deno-nodejs-transformer
  unique-array -. Development .-> deno-nodejs-transformer
  url-regexp -. Development .-> deno-nodejs-transformer

  adler32 -. Development .-> deno-lint-rules
  bytes-matcher -. Development .-> deno-lint-rules
  djb2a -. Development .-> deno-lint-rules
  env -. Development .-> deno-lint-rules
  eol -. Development .-> deno-lint-rules
  exfetch -. Development .-> deno-lint-rules
  fnv -. Development .-> deno-lint-rules
  fs -. Development .-> deno-lint-rules
  github-actions-core -. Development .-> deno-lint-rules
  github-sodium -. Development .-> deno-lint-rules
  http-header-link -. Development .-> deno-lint-rules
  http-header-retry-after -. Development .-> deno-lint-rules
  is-empty -. Development .-> deno-lint-rules
  is-json -. Development .-> deno-lint-rules
  is-numeric-integral -. Development .-> deno-lint-rules
  is-numeric-prime -. Development .-> deno-lint-rules
  is-object-plain -. Development .-> deno-lint-rules
  is-primitive -. Development .-> deno-lint-rules
  is-special-type -. Development .-> deno-lint-rules
  is-string-ascii -. Development .-> deno-lint-rules
  is-string-singleline -. Development .-> deno-lint-rules
  pressure -. Development .-> deno-lint-rules
  process -. Development .-> deno-lint-rules
  range-iterator -. Development .-> deno-lint-rules
  sdbm -. Development .-> deno-lint-rules
  setation -. Development .-> deno-lint-rules
  shuffle-array -. Development .-> deno-lint-rules
  sort -. Development .-> deno-lint-rules
  string-dissect -. Development .-> deno-lint-rules
  string-overflow -. Development .-> deno-lint-rules
  symmetric-crypto -. Development .-> deno-lint-rules
  temperature -. Development .-> deno-lint-rules
  unique-array -. Development .-> deno-lint-rules
  url-regexp -. Development .-> deno-lint-rules
```
