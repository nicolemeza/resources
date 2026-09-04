# Troubleshooting

## pnpm is not found

Run:

```bash
corepack enable
corepack prepare pnpm@10.34.1 --activate
```

Then retry:

```bash
pnpm install
```

## The app does not start

Run:

```bash
node --version
pnpm install
pnpm dev
```

This repo expects Node `18.18.0` or newer. The `.nvmrc` uses Node `20.19.0`.

## The submission does not show up

Check that:

- The file is under `src/submissions/<your-name>/`.
- The file extension is `.tsx`.
- The file has a default export.
- The file exports `metadata`.
- `metadata.isTemplate` is removed or set to `false`.

## Codex edits too many files

Stop the run and retry with a narrower prompt:

```text
Only edit src/submissions/<your-name>/single-page.tsx. Use the selected top-level frame from my Figma page as reference. Do not change shared files.
```

## Figma selection cannot be found

- Re-select the exact top-level frame on your own Figma page.
- Make sure the Figma desktop app or browser tab is active.
- Retry the prompt after the selection is active.
