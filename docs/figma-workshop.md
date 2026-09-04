# Figma Workshop Notes

Use the designs attendees created in Workshop 1:

https://www.figma.com/design/PXeoizPCugucYFtBXRnkwz/Figma-Workshop?node-id=0-1&p=f&t=BaPPV1F11loX5TK7-11

## Frame requirements for Workshop 2

Each attendee should open their own named Figma page and choose one final top-level frame that is:

- Small enough to implement as one page in 20 to 30 minutes.
- Built from components and tokens where possible.
- Annotated with any non-obvious behavior.
- Named clearly enough to identify in a PR.
- Linked directly with a node-specific Figma frame URL.

## Recommended scope

- A simple dashboard page.
- A course or assignment detail page.
- A landing page for a learning workflow.
- A form page with clear actions.
- A content page with cards, alerts, and navigation.

## Attendee instructions

1. Open your own named page in the Workshop 1 Figma file.
2. Pick the final top-level frame you created in Workshop 1.
3. Create a branch named `first-last/single-page`.
4. Copy `src/submissions/_template/SinglePage.tsx` into `src/submissions/<your-name>/single-page.tsx`.
5. Select the exact frame in Figma or copy its frame-specific link.
6. Ask Codex to implement the selected frame in the copied submission file using Figma MCP and React Magma.
7. Run the app locally and compare against the frame.
8. Open a PR with the Figma link and screenshot.

## Facilitator note

Keep the exercise scoped. If an attendee is stuck for more than five minutes, reduce the page to the most important section and let the PR show progress instead of completeness.
