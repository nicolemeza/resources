# Codexworkshop

## What this project uses
- React 17, Vite, TypeScript, and React Magma 4.14.0.
- pnpm is the only package manager for this repo.
- React Magma components and tokens should be used for workshop UI.
- This repo provides a local `WorkshopMagmaProvider`; React Magma 4.14.0 does not export a `MagmaProvider`.
- The workshop outcome is one single-page React Magma implementation per attendee, based on the final frame on their own named page in the Workshop 1 Figma file.

## Rules for any change
- Keep attendee work isolated under `src/submissions/<your-name>/single-page.tsx` unless the facilitator requests a different filename.
- Do not edit `src/App.tsx`, `src/workshop/submissions.ts`, or shared components for an individual frame unless the facilitator asks.
- Use React Magma components before creating custom UI.
- Use Magma tokens from `magma.colors`, `magma.spaceScale`, and `magma.typeScale`; do not add raw hex colors.
- Search for a similar component or submission before creating a new one.
- Use the attendee's exact top-level Figma frame link from their own Figma page. Do not invent a frame or implement from the file-level URL or page URL alone.
- For Figma-driven work, fetch design context and a screenshot through Figma MCP before editing code.
- Keep PRs focused on one frame or one workshop setup fix.
- Remove unused imports, dead code, and abandoned variations before committing.

## Setup
- `corepack enable` if pnpm is not available.
- `pnpm install` to install dependencies.
- `pnpm dev` to run locally on `http://localhost:5173`.
- `pnpm validate` before opening a PR.

## Git workflow
- Branch from `main` for the workshop starter repo.
- Use branch names like `first-last/single-page`.
- Open PRs back to `main`.
- Include the Figma frame link and before/after screenshots in the PR.
