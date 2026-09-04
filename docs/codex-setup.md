# Codex Setup

Use this checklist before the workshop starts.

## App setup

1. Install or update the Codex desktop app.
2. Sign in with your work account.
3. Open this repository folder in Codex.
4. Confirm the model selected for the workshop matches the facilitator guidance.
5. Run `pnpm install` from the Codex terminal.
6. Run `pnpm dev` and open `http://localhost:5173`.

## React Magma skill

This repo includes a repo-scoped skill at `.agents/skills/react-magma`.
Codex should discover it when this repository is opened. The skill can trigger
implicitly when a task mentions React Magma, `react-magma-dom`, Magma tokens, or
component implementation. It can also be invoked explicitly with:

```text
Use the React Magma skill.
```

If the skill does not show up after cloning, restart Codex and reopen the repo.

## Figma MCP setup

If the Figma plugin is not available through the Codex plugin panel yet, add this to `~/.codex/config.toml`:

```toml
[mcp_servers.figma]
url = "https://mcp.figma.com/mcp"
```

Restart Codex after editing the config. The first Figma tool call should open a browser authentication flow.

## Prompt to use in the lab

```text
Implement the selected top-level frame from my own Workshop 1 Figma page in src/submissions/<your-name>/single-page.tsx using React Magma components and Magma tokens. Use Figma MCP design context and screenshot before editing. Keep the change isolated to my submission file unless a shared fix is required.
```

If Codex cannot see the active Figma selection, paste the exact frame link from your own Workshop 1 Figma page into the prompt.

## When Codex struggles

- Re-select the final top-level frame on your own Figma page and retry.
- Ask Codex to list available React Magma components before editing.
- Give Codex the exact submission file path.
- Paste the exact frame link if the active selection is not detected.
- Stop and simplify the ask if it starts editing unrelated files.
- Run `/review` before committing if your Codex app supports it.
