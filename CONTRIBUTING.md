# Contributing

This repository is designed for a 90-minute workshop. Keep changes small, isolated, and easy to review.

## Workshop flow

1. Clone the repo.
2. Run `corepack enable` if `pnpm` is not available.
3. Run `pnpm install`.
4. Create a branch named `first-last/single-page`.
5. Copy `src/submissions/_template/SinglePage.tsx` into `src/submissions/<your-name>/single-page.tsx`.
6. Open your named page in the Workshop 1 Figma file and select your final top-level frame.
7. Ask Codex to implement the selected frame using Figma MCP, React Magma components, and Magma tokens.
8. Run `pnpm dev` and check the result in the browser.
9. Run `pnpm validate`.
10. Commit, push, and open a PR.

## PR checklist

- One frame or one setup fix per PR.
- No unrelated files changed.
- Exact Figma frame link from your own Figma page included.
- Before and after screenshots included when useful.
- `pnpm validate` passes locally.
- Diff reviewed before push.

## Commit messages

Use short imperative messages:

```text
feat(workshop): add student progress submission
fix(docs): clarify Codex setup
chore(ci): add pnpm validation
```
