# Hands-On Slide Replacement

Use this text to replace the old slide that referenced `sandbox-targets`.

## Presenter Says

Each of you has your own page in the Workshop 1 Figma file. Open your named page, select the final top-level frame you designed, and use that exact frame as the source for your React Magma page.

GitHub Desktop is recommended for this workshop because it makes cloning, branching, committing, pushing, and opening a PR more visible. Terminal Git is fine if you already know it.

## Attendees Do

1. Clone the workshop repo. Use GitHub Desktop if you are newer to Git; terminal Git is also fine.
2. Create a branch from `main`: `first-last/single-page`.
3. Open the repo in Codex. Confirm Figma MCP is connected and the React Magma skill is available.
4. In Figma, open your named page and select your final top-level frame.
5. Copy `src/submissions/_template/SinglePage.tsx` to `src/submissions/<your-name>/single-page.tsx`.
6. Ask Codex: "Use the React Magma skill and Figma MCP. Implement my selected Figma frame in `src/submissions/<your-name>/single-page.tsx` as a single-page React Magma UI. Use React Magma components, enums, and Magma tokens."
7. Review the diff. Reject anything unrelated or anything you do not understand.
8. Run `pnpm dev` and compare the browser result to your Figma frame.
9. Run `pnpm validate`.
10. Commit, push, and open a PR back to `main` with the Figma frame link and a screenshot.
11. Tag a partner from the room as reviewer.
