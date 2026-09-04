import {
  Badge,
  BadgeColor,
  Button,
  ButtonColor,
  ButtonTextTransform,
  Card,
  CardBody,
  CardHeading,
  Heading,
  Paragraph,
  TypographyVisualStyle,
} from 'react-magma-dom';

import type { SubmissionMetadata } from '../../workshop/types';

export const metadata: SubmissionMetadata = {
  title: 'Workshop 1 Single Page',
  owner: 'Your Name',
  figmaUrl: 'https://www.figma.com/design/PXeoizPCugucYFtBXRnkwz/Figma-Workshop?node-id=0-1&p=f&t=BaPPV1F11loX5TK7-11',
  status: 'draft',
  isTemplate: true,
};

export default function SinglePage() {
  return (
    <main className="template-frame" aria-labelledby="single-page-heading">
      <div>
        <Badge color={BadgeColor.secondary}>Template</Badge>
        <Heading id="single-page-heading" level={2} visualStyle={TypographyVisualStyle.headingMedium}>
          Build your Workshop 1 design here
        </Heading>
        <Paragraph visualStyle={TypographyVisualStyle.bodyLarge}>
          Replace this template with a single-page React Magma implementation of
          your selected Figma frame.
        </Paragraph>
      </div>

      <Card>
        <CardHeading headingLevel={3}>Implementation target</CardHeading>
        <CardBody>
          <Paragraph>
            Ask Codex to use Figma MCP, read your exact frame selection, and
            translate the design into React Magma components and Magma tokens.
          </Paragraph>
          <div className="template-frame__actions">
            <Button color={ButtonColor.primary} textTransform={ButtonTextTransform.none}>
              Primary action
            </Button>
            <Button color={ButtonColor.secondary} textTransform={ButtonTextTransform.none}>
              Secondary action
            </Button>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
