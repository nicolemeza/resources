# Participant Workflow

Use this flow for the live workshop.

## Before coding

1. Open the GitHub repo URL from the facilitator.
2. Clone the repo with GitHub Desktop, or use `git clone` if you are comfortable with terminal Git.
3. Open the cloned folder in Codex.
4. In the Codex terminal, run:

```bash
corepack enable
pnpm install
pnpm dev
```

5. Open `http://localhost:5173`.
6. Confirm Figma MCP is connected in Codex.
7. Open the Workshop 1 Figma file.
8. Open your named Figma page.
9. Select the final top-level frame you designed, or copy a link directly to that frame.

## Create your branch

Recommended for the workshop: use GitHub Desktop.

1. Fetch latest from `main`.
2. Create a new branch from `main`.
3. Name it `first-last/single-page`.

Terminal Git also works:

```bash
git pull origin main
git switch -c first-last/single-page
```

## Create your page file

```bash
mkdir -p src/submissions/first-last
cp src/submissions/_template/SinglePage.tsx src/submissions/first-last/single-page.tsx
```

Edit the copied file:

- Remove `isTemplate: true`.
- Set `owner` to your name.
- Set `figmaUrl` to the exact frame link from your own Figma page.

## Ask Codex to build

Use this prompt:

```text
Use the React Magma skill and Figma MCP. Implement my selected Figma frame in src/submissions/first-last/single-page.tsx as a single-page React Magma UI. Use React Magma components, enums, and Magma tokens. Keep changes isolated to my submission file unless a shared fix is required.
```

If Codex cannot read the active Figma selection, paste the exact frame link into the prompt. A page-level Figma link is not enough; use the selected frame link.

## Check and open PR

1. Review the diff in Codex or GitHub Desktop.
2. Run:

```bash
pnpm validate
```

3. Commit the change.
4. Push the branch.
5. Open a pull request back to `main`.
6. Include the Figma frame link from your own page and a screenshot of the local page.
