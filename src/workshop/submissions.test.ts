import type { ComponentType } from 'react';
import { describe, expect, it } from 'vitest';

import { collectSubmissions, normalizeSubmissionPath } from './submissions';
import type { SubmissionModule } from './types';

const EmptyComponent = (() => null) as ComponentType;

describe('submission registry', () => {
  it('filters templates and sorts visible submissions by title', () => {
    const modules: Record<string, SubmissionModule> = {
      '../submissions/_template/SinglePage.tsx': {
        default: EmptyComponent,
        metadata: {
          title: 'Template',
          owner: 'Workshop',
          figmaUrl: 'https://www.figma.com/files/team',
          status: 'draft',
          isTemplate: true,
        },
      },
      '../submissions/hayford/single-page.tsx': {
        default: EmptyComponent,
        metadata: {
          title: 'Course Dashboard',
          owner: 'Hayford Kesse',
          figmaUrl: 'https://www.figma.com/files/team',
          status: 'ready',
        },
      },
      '../submissions/avery/single-page.tsx': {
        default: EmptyComponent,
        metadata: {
          title: 'Assignment Planner',
          owner: 'Avery Johnson',
          figmaUrl: 'https://www.figma.com/files/team',
          status: 'ready',
        },
      },
    };

    expect(collectSubmissions(modules).map((entry) => entry.metadata.title)).toEqual([
      'Assignment Planner',
      'Course Dashboard',
    ]);
  });

  it('normalizes Vite glob paths to repo paths', () => {
    expect(normalizeSubmissionPath('../submissions/hayford/single-page.tsx')).toBe(
      'src/submissions/hayford/single-page.tsx',
    );
  });
});
