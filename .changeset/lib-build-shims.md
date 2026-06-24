---
'@jpp-toolkit/plugin-build-lib': minor
---

Add a `--shims` / `--no-shims` flag to `jpp build lib` to control whether tsdown injects the `node:path` / `node:url` / `import.meta.url` shims into emitted files. Defaults to `true`, preserving current behavior.
