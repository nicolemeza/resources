import type { SubmissionEntry, SubmissionModule } from './types';

const modules = import.meta.glob<SubmissionModule>('../submissions/**/*.tsx', {
  eager: true,
});

export const submissions = collectSubmissions(modules);

export function collectSubmissions(moduleMap: Record<string, SubmissionModule>): SubmissionEntry[] {
  return Object.entries(moduleMap)
    .filter(([, module]) => !module.metadata.isTemplate)
    .map(([path, module]) => ({
      Component: module.default,
      metadata: module.metadata,
      path: normalizeSubmissionPath(path),
    }))
    .sort((first, second) => first.metadata.title.localeCompare(second.metadata.title));
}

export function normalizeSubmissionPath(path: string) {
  return path.replace('../', 'src/');
}
