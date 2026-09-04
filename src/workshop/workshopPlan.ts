export const figmaWorkshopUrl =
  'https://www.figma.com/design/PXeoizPCugucYFtBXRnkwz/Figma-Workshop?node-id=0-1&p=f&t=BaPPV1F11loX5TK7-11';

export const workshopSteps = [
  {
    id: 'select-frame',
    title: 'Open Your Figma Page',
    description:
      'Open the Workshop 1 Figma file, go to your named page, and select the final top-level frame you designed.',
    href: figmaWorkshopUrl,
    actionLabel: 'Open Figma Workshop',
  },
  {
    id: 'copy-template',
    title: 'Create Your Page File',
    description:
      'Copy the single-page template into your own submission folder so your work stays isolated from everyone else.',
    code: 'src/submissions/<your-name>/single-page.tsx',
  },
  {
    id: 'ask-codex',
    title: 'Use Figma MCP',
    description:
      'Ask Codex to read the selected frame from your Figma page through Figma MCP and translate the design into React Magma components and tokens.',
    code: 'Implement my selected Figma frame in this file using React Magma.',
  },
  {
    id: 'validate-pr',
    title: 'Validate and PR',
    description:
      'Run the app, compare against Figma, run validation, then open one focused PR with the Figma frame link and screenshot.',
    code: 'pnpm validate',
  },
];
