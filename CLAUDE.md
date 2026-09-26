# SVELIA workspace

- `shopify-theme/` — source of the SVELIA Shopify theme copy (pushed to the unpublished theme via `themeFilesUpsert` with raw GitHub URLs).
- `svelia-hero/` — Vite + React ShaderGradient hero prototype.
- `arcads/` — Arcads AI image/video workspace (krusemediallc/arcads-claude-code). Run its scripts from inside `arcads/`; its skills are registered in `.claude/skills/`. Auth: `ARCADS_BASIC_AUTH` or `ARCADS_API_KEY` environment variable. Reference photos go in `arcads/references/` (local-only, gitignored).
