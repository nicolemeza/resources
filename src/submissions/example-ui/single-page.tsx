import {
  Badge,
  BadgeColor,
  Button,
  ButtonColor,
  ButtonSize,
  ButtonTextTransform,
  Card,
  CardBody,
  Heading,
  Hyperlink,
  Paragraph,
  Tab,
  TabPanel,
  TabPanelsContainer,
  Tabs,
  TabsContainer,
  TabsTextTransform,
  TypographyVisualStyle,
  magma,
  styled,
} from 'react-magma-dom';

import type { SubmissionMetadata } from '../../workshop/types';

export const metadata: SubmissionMetadata = {
  title: 'Instructor Insights Overview',
  owner: 'Example UI',
  figmaUrl: 'https://www.figma.com/design/PXeoizPCugucYFtBXRnkwz/Figma-Workshop?node-id=2-23267&m=dev',
  status: 'ready',
};

const insightCards = [
  {
    title: 'Assignment Submission',
    value: '82%',
    trend: '+5',
    trendTone: BadgeColor.success,
    summary: 'Several quizzes had lower than average completion rates due to technical issues',
    action: 'Reminders sent to students who missed quiz deadlines',
  },
  {
    title: 'Quiz Completion Rate',
    value: '68%',
    trend: '-12',
    trendTone: BadgeColor.danger,
    summary: 'Several quizzes had lower than average completion rates due to technical issues',
    action: 'Reminders sent to students who missed quiz deadlines',
    hasInfo: true,
  },
  {
    title: 'Forum Participation',
    value: '54%',
    trend: '-11',
    trendTone: BadgeColor.danger,
    summary: 'Active discussions around recent project topics',
    action: 'New thread started by instructor to encourage peer feedback',
    hasInfo: true,
  },
];

const students = [
  {
    name: 'Sophia Martinez',
    detail: 'Completed all assignments',
    score: '82%',
  },
  {
    name: 'Liam Johnson',
    detail: 'Late submission on 2 assignments',
    score: '78%',
  },
  {
    name: 'Emma Chen',
    detail: 'Excelling in class participation',
    score: '88%',
  },
];

const struggleAreas = [
  'Respiratory System - Gas Exchange',
  'Cardiovascular System - Blood Flow Pathway',
  'Nervous System - Action Potentials',
];

export default function SinglePage() {
  return (
    <DashboardFrame aria-labelledby="instructor-insights-heading">
      <ProductBar>
        <BrandCluster>
          <BrandMark aria-hidden="true">F</BrandMark>
          <BrandName>Figma Demo</BrandName>
        </BrandCluster>
        <HeaderActions>
          <RoundIcon aria-hidden="true" />
          <ChevronIcon aria-hidden="true" />
        </HeaderActions>
      </ProductBar>

      <CourseBar>
        <Paragraph noMargins visualStyle={TypographyVisualStyle.bodyXSmall}>
          Anatomy and Physiology, Section A
        </Paragraph>
      </CourseBar>

      <ContentShell>
        <TabsContainer>
          <StyledTabs aria-label="Instructor insight views" textTransform={TabsTextTransform.none}>
            <Tab>Dashboard</Tab>
            <Tab>Students</Tab>
          </StyledTabs>
          <TabPanelsContainer>
            <TabPanel>
              <DashboardPanel>
                <TopInsightsSection aria-labelledby="instructor-insights-heading">
                  <Heading
                    id="instructor-insights-heading"
                    level={2}
                    visualStyle={TypographyVisualStyle.heading2XSmall}
                  >
                    Top Insights
                  </Heading>

                  <InsightGrid>
                    {insightCards.map((insight) => (
                      <MetricCard key={insight.title}>
                        <CompactCardBody>
                          <MetricTitleRow>
                            <MetricTitle>{insight.title}</MetricTitle>
                            {insight.hasInfo ? <InfoDot aria-hidden="true" /> : null}
                          </MetricTitleRow>
                          <MetricValueRow>
                            <MetricValue>{insight.value}</MetricValue>
                            <Badge color={insight.trendTone}>{insight.trend}</Badge>
                          </MetricValueRow>
                          <Paragraph noMargins visualStyle={TypographyVisualStyle.bodyXSmall}>
                            {insight.summary}
                          </Paragraph>
                          <Paragraph noMargins visualStyle={TypographyVisualStyle.bodyXSmall}>
                            {insight.action}
                          </Paragraph>
                        </CompactCardBody>
                      </MetricCard>
                    ))}
                  </InsightGrid>
                </TopInsightsSection>

                <SectionBlock aria-labelledby="struggling-students-heading">
                  <SectionTitleRow>
                    <Heading
                      id="struggling-students-heading"
                      level={2}
                      visualStyle={TypographyVisualStyle.heading2XSmall}
                    >
                      Struggling Students
                    </Heading>
                    <SectionMeta>
                      <span>Viewing 3 of 8</span>
                      <Button
                        color={ButtonColor.subtle}
                        size={ButtonSize.small}
                        textTransform={ButtonTextTransform.none}
                      >
                        View all
                      </Button>
                      <ChevronIcon aria-hidden="true" />
                    </SectionMeta>
                  </SectionTitleRow>

                  <StudentGrid>
                    {students.map((student) => (
                      <StudentCard key={student.name}>
                        <CompactCardBody>
                          <StudentHeader>
                            <div>
                              <CardLabel>{student.name}</CardLabel>
                              <Paragraph noMargins visualStyle={TypographyVisualStyle.bodyXSmall}>
                                {student.detail}
                              </Paragraph>
                            </div>
                            <AlertTriangle aria-hidden="true" />
                          </StudentHeader>
                          <StudentFooter>
                            <ScoreLabel>{student.score} score</ScoreLabel>
                            <Button
                              color={ButtonColor.subtle}
                              size={ButtonSize.small}
                              textTransform={ButtonTextTransform.none}
                            >
                              View Profile
                            </Button>
                          </StudentFooter>
                        </CompactCardBody>
                      </StudentCard>
                    ))}
                  </StudentGrid>
                </SectionBlock>

                <SectionBlock aria-labelledby="struggle-areas-heading">
                  <SectionTitleRow>
                    <Heading
                      id="struggle-areas-heading"
                      level={2}
                      visualStyle={TypographyVisualStyle.heading2XSmall}
                    >
                      Common Struggle Areas
                    </Heading>
                    <Paragraph noMargins visualStyle={TypographyVisualStyle.bodyXSmall}>
                      Based on class performance over the last 7 days.
                    </Paragraph>
                  </SectionTitleRow>

                  <RowsList>
                    {struggleAreas.map((area) => (
                      <StruggleRow key={area}>
                        <span>{area}</span>
                        <ChevronDownIcon aria-hidden="true" />
                      </StruggleRow>
                    ))}
                  </RowsList>
                </SectionBlock>

                <FooterNote>
                  <Paragraph noMargins visualStyle={TypographyVisualStyle.bodyXSmall}>
                    Results provided by AI may not be accurate or complete. Please verify results for accuracy.
                  </Paragraph>
                  <Hyperlink to={metadata.figmaUrl} opensInNewTab>
                    Report an issue
                  </Hyperlink>
                </FooterNote>
              </DashboardPanel>
            </TabPanel>
            <TabPanel>
              <PlaceholderPanel>
                <Heading level={2} visualStyle={TypographyVisualStyle.headingSmall}>
                  Students
                </Heading>
                <Paragraph noMargins>Student-level insight details would appear in this tab.</Paragraph>
              </PlaceholderPanel>
            </TabPanel>
          </TabPanelsContainer>
        </TabsContainer>
      </ContentShell>
    </DashboardFrame>
  );
}

const DashboardFrame = styled.main`
  width: 100%;
  max-width: 1317px;
  min-height: 1121px;
  overflow: hidden;
  border: 1px solid ${magma.colors.border};
  border-radius: ${magma.borderRadiusSmall};
  background: ${magma.colors.neutral200};
  color: ${magma.colors.neutral900};
  font-family: ${magma.bodyFont};

  @media (max-width: ${magma.breakpoints.large}px) {
    min-height: auto;
  }
`;

const ProductBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: ${magma.spaceScale.spacing09};
  padding: 0 ${magma.spaceScale.spacing05};
  background: ${magma.colors.primary700};
  color: ${magma.colors.neutral100};
`;

const BrandCluster = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${magma.spaceScale.spacing03};
`;

const BrandMark = styled.span`
  display: inline-grid;
  width: ${magma.iconSizes.small}px;
  height: ${magma.iconSizes.small}px;
  place-items: center;
  border-radius: ${magma.borderRadiusSmall};
  background: ${magma.colors.primary500};
  color: ${magma.colors.neutral100};
  font-size: ${magma.typeScale.size01.fontSize};
  font-weight: 700;
  line-height: ${magma.typeScale.size01.lineHeight};
`;

const BrandName = styled.span`
  font-size: ${magma.typeScale.size02.fontSize};
  font-weight: 700;
  line-height: ${magma.typeScale.size02.lineHeight};
`;

const HeaderActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${magma.spaceScale.spacing03};
`;

const RoundIcon = styled.span`
  display: inline-block;
  width: ${magma.iconSizes.xSmall}px;
  height: ${magma.iconSizes.xSmall}px;
  border: 1px solid ${magma.colors.borderInverse};
  border-radius: 50%;
`;

const CourseBar = styled.div`
  display: flex;
  align-items: center;
  min-height: ${magma.spaceScale.spacing08};
  padding: 0 ${magma.spaceScale.spacing05};
  border-bottom: 1px solid ${magma.colors.border};
  background: ${magma.colors.neutral100};
`;

const ContentShell = styled.section`
  padding: 0 ${magma.spaceScale.spacing05}
    ${magma.spaceScale.spacing05};
  background: ${magma.colors.neutral200};
`;

const StyledTabs = styled(Tabs)`
  background: ${magma.colors.neutral100};
`;

const DashboardPanel = styled.div`
  display: grid;
  gap: ${magma.spaceScale.spacing05};
  padding-top: ${magma.spaceScale.spacing05};
`;

const TopInsightsSection = styled.section`
  display: grid;
  gap: ${magma.spaceScale.spacing04};
  padding: ${magma.spaceScale.spacing04};
  border: 3px solid ${magma.colors.primary300};
  border-radius: ${magma.borderRadiusSmall};
  background: ${magma.colors.neutral100};
`;

const InsightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${magma.spaceScale.spacing04};

  @media (max-width: ${magma.breakpoints.large}px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled(Card)`
  height: 100%;
  border-color: ${magma.colors.border};
  box-shadow: none;
`;

const StudentCard = styled(Card)`
  height: 100%;
  border: 1px dashed ${magma.colors.border};
  box-shadow: none;
`;

const CompactCardBody = styled(CardBody)`
  display: grid;
  gap: ${magma.spaceScale.spacing03};
  min-height: 100%;
  padding: ${magma.spaceScale.spacing04};
`;

const MetricTitleRow = styled.div`
  display: flex;
  gap: ${magma.spaceScale.spacing02};
  align-items: center;
`;

const MetricTitle = styled.span`
  color: ${magma.colors.neutral700};
  font-size: ${magma.typeScale.size01.fontSize};
  font-weight: 600;
  line-height: ${magma.typeScale.size01.lineHeight};
`;

const MetricValueRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${magma.spaceScale.spacing03};
`;

const MetricValue = styled.span`
  color: ${magma.colors.neutral900};
  font-size: ${magma.typeScale.size07.fontSize};
  font-weight: 700;
  line-height: ${magma.typeScale.size07.lineHeight};
`;

const SectionBlock = styled.section`
  display: grid;
  gap: ${magma.spaceScale.spacing04};
  padding: ${magma.spaceScale.spacing04};
  border: 1px solid ${magma.colors.border};
  border-radius: ${magma.borderRadiusSmall};
  background: ${magma.colors.neutral100};
`;

const SectionTitleRow = styled.div`
  display: flex;
  gap: ${magma.spaceScale.spacing04};
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${magma.breakpoints.large}px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const SectionMeta = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${magma.spaceScale.spacing03};
  color: ${magma.colors.neutral500};
  font-size: ${magma.typeScale.size01.fontSize};
  line-height: ${magma.typeScale.size01.lineHeight};
`;

const StudentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${magma.spaceScale.spacing04};

  @media (max-width: ${magma.breakpoints.large}px) {
    grid-template-columns: 1fr;
  }
`;

const StudentHeader = styled.div`
  display: flex;
  gap: ${magma.spaceScale.spacing03};
  align-items: flex-start;
  justify-content: space-between;
  min-height: ${magma.spaceScale.spacing10};
`;

const CardLabel = styled.span`
  display: block;
  margin-bottom: ${magma.spaceScale.spacing02};
  color: ${magma.colors.neutral900};
  font-size: ${magma.typeScale.size02.fontSize};
  font-weight: 700;
  line-height: ${magma.typeScale.size02.lineHeight};
`;

const StudentFooter = styled.div`
  display: flex;
  gap: ${magma.spaceScale.spacing03};
  align-items: center;
  justify-content: space-between;
  padding-top: ${magma.spaceScale.spacing03};
  border-top: 1px solid ${magma.colors.border};

  @media (max-width: ${magma.breakpoints.large}px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const ScoreLabel = styled.span`
  color: ${magma.colors.neutral700};
  font-size: ${magma.typeScale.size01.fontSize};
  font-weight: 700;
  line-height: ${magma.typeScale.size01.lineHeight};
`;

const RowsList = styled.div`
  display: grid;
  border-top: 1px solid ${magma.colors.border};
`;

const StruggleRow = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: ${magma.spaceScale.spacing04}
    ${magma.spaceScale.spacing03};
  border: 0;
  border-bottom: 1px solid ${magma.colors.border};
  background: ${magma.colors.neutral100};
  color: ${magma.colors.neutral800};
  cursor: pointer;
  font-size: ${magma.typeScale.size02.fontSize};
  line-height: ${magma.typeScale.size02.lineHeight};
  text-align: left;

  &:hover {
    background: ${magma.colors.neutral200};
  }

  &:focus {
    outline: 2px solid ${magma.colors.focus};
    outline-offset: -2px;
  }
`;

const FooterNote = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: ${magma.spaceScale.spacing02};
  justify-content: center;
  color: ${magma.colors.neutral500};
  text-align: center;

  @media (max-width: ${magma.breakpoints.large}px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const PlaceholderPanel = styled.div`
  padding: ${magma.spaceScale.spacing06};
  border: 1px solid ${magma.colors.border};
  border-radius: ${magma.borderRadiusSmall};
  background: ${magma.colors.neutral100};
`;

const InfoDot = styled.span`
  display: inline-block;
  width: ${magma.spaceScale.spacing03};
  height: ${magma.spaceScale.spacing03};
  border-radius: 50%;
  background: ${magma.colors.info500};
`;

const AlertTriangle = styled.span`
  width: 0;
  height: 0;
  border-right: ${magma.spaceScale.spacing03} solid transparent;
  border-bottom: ${magma.spaceScale.spacing05} solid
    ${magma.colors.danger500};
  border-left: ${magma.spaceScale.spacing03} solid transparent;
`;

const ChevronIcon = styled.span`
  display: inline-block;
  width: ${magma.spaceScale.spacing03};
  height: ${magma.spaceScale.spacing03};
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  transform: rotate(45deg);
`;

const ChevronDownIcon = styled.span`
  display: inline-block;
  width: ${magma.spaceScale.spacing03};
  height: ${magma.spaceScale.spacing03};
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  color: ${magma.colors.neutral500};
  transform: rotate(45deg);
`;
