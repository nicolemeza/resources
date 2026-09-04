import { magma } from 'react-magma-dom';

export function applyMagmaCssVariables() {
  const root = document.documentElement;

  const variables = {
    '--magma-color-primary': magma.colors.primary,
    '--magma-color-primary-700': magma.colors.primary700,
    '--magma-color-secondary-600': magma.colors.secondary600,
    '--magma-color-neutral-100': magma.colors.neutral100,
    '--magma-color-neutral-200': magma.colors.neutral200,
    '--magma-color-neutral-900': magma.colors.neutral900,
    '--magma-color-border': magma.colors.border,
    '--magma-font-body': magma.bodyFont,
    '--magma-radius': magma.borderRadius,
    '--magma-radius-small': magma.borderRadiusSmall,
    '--magma-space-01': magma.spaceScale.spacing01,
    '--magma-space-02': magma.spaceScale.spacing02,
    '--magma-space-03': magma.spaceScale.spacing03,
    '--magma-space-04': magma.spaceScale.spacing04,
    '--magma-space-05': magma.spaceScale.spacing05,
    '--magma-space-06': magma.spaceScale.spacing06,
    '--magma-space-07': magma.spaceScale.spacing07,
    '--magma-space-08': magma.spaceScale.spacing08,
    '--magma-space-09': magma.spaceScale.spacing09,
    '--magma-space-10': magma.spaceScale.spacing10,
  };

  Object.entries(variables).forEach(([name, value]) => {
    root.style.setProperty(name, value);
  });
}
