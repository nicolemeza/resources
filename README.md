# Codexworkshop

A React Magma sandbox for the "From Frame to PR" workshop. Attendees clone this repo, open their own page in the Workshop 1 Figma file, select the final frame they designed, use Codex + Figma MCP to implement one single-page React Magma app, and open a small pull request.

Workshop 1 Figma file: https://www.figma.com/design/PXeoizPCugucYFtBXRnkwz/Figma-Workshop?node-id=0-1&p=f&t=BaPPV1F11loX5TK7-11

## Quick start

```bash
corepack enable
pnpm install
pnpm dev
```

The local app runs at `http://localhost:5173`.

## Validation

```bash
pnpm validate
```

This runs linting, type checking, tests, and a production build.

## How attendees add work

Copy the single-page template file:

```bash
mkdir -p src/submissions/first-last
cp src/submissions/_template/SinglePage.tsx src/submissions/first-last/single-page.tsx
```

Then update the copied file:

- Remove `isTemplate: true`.
- Set your name in `owner`.
- Add the exact Figma frame URL from your own Workshop 1 Figma page.
- Replace the template UI with a single-page React Magma implementation.

The app auto-discovers submissions under `src/submissions/**/*.tsx`.

## Facilitator setup

Before the workshop:

1. Confirm each attendee has their own named page in the Workshop 1 Figma file.
2. Confirm each attendee has one final top-level frame on their page.
3. Confirm attendees know how to copy an exact frame link, not only the file link or page link.
4. Confirm each attendee can access the GitHub repo and Figma file.
5. Confirm attendees can run `pnpm install` and `pnpm dev`.
6. Confirm Codex can access the repo and Figma MCP.
7. Create or confirm lightweight branch protection if you want CI required before merge.

Useful docs live in `docs/`.

- [Participant workflow](docs/participant-workflow.md)
- [Codex setup](docs/codex-setup.md)
- [Figma workshop notes](docs/figma-workshop.md)
- [React Magma cheatsheet](docs/magma-cheatsheet.md)

## React Magma notes

This repo uses React Magma `4.14.0`, which targets React `17.0.2`. The app wraps itself in `WorkshopMagmaProvider`, which uses React Magma's `ThemeContext.Provider`, `GlobalStyles`, and `magma` theme.

Use React Magma docs for component props: https://react-magma.cengage.com/version/4.14.0/

## Repo-scoped Codex skill

This repo includes a React Magma skill at `.agents/skills/react-magma`. Codex reads repo-scoped skills from `.agents/skills` when the repo is opened, so attendees do not need to install the skill separately. If it does not appear in Codex after cloning, restart Codex and reopen the repository.
