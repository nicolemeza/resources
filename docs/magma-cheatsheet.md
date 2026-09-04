# React Magma Cheatsheet

React Magma docs: https://react-magma.cengage.com/version/4.14.0/

## Install baseline

This repo already includes the required packages:

```text
react-magma-dom@4.14.0
react-magma-icons@3.2.7
react@17.0.2
react-dom@17.0.2
@emotion/react@11.13.0
@emotion/styled@11.13.0
lodash@4.18.1
```

`lodash` is explicit because the React Magma 4.14.0 bundle imports it at runtime.

## Common imports

```tsx
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeading,
  Container,
  Grid,
  GridItem,
  Heading,
  Hyperlink,
  Paragraph,
  TypographyVisualStyle,
} from 'react-magma-dom';
```

## Token examples

```tsx
import { magma } from 'react-magma-dom';

const spacing = magma.spaceScale.spacing06;
const primary = magma.colors.primary;
const headingSize = magma.typeScale.size07;
```

## Component guidance

- Use `Button` for actions.
- Use `Hyperlink` for navigation or Figma links.
- Use `Card`, `CardHeading`, and `CardBody` for repeated framed items.
- Use `Heading` and `Paragraph` for text.
- Use `Badge` for compact status labels.
- Use `Grid` and `GridItem` for layout when a Magma layout primitive fits.
- Use custom CSS only for page layout or workshop scaffolding, and keep values mapped to Magma tokens.

## Common prompt add-on

```text
Use React Magma components. Use Magma tokens, not raw colors or arbitrary spacing. Do not edit shared files unless the submission cannot work otherwise.
```
