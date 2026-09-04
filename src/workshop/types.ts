import type { ComponentType } from 'react';

export type SubmissionStatus = 'draft' | 'ready' | 'needs-review';

export interface SubmissionMetadata {
  title: string;
  owner: string;
  figmaUrl: string;
  status: SubmissionStatus;
  isTemplate?: boolean;
}

export interface SubmissionModule {
  default: ComponentType;
  metadata: SubmissionMetadata;
}

export interface SubmissionEntry {
  Component: ComponentType;
  metadata: SubmissionMetadata;
  path: string;
}
