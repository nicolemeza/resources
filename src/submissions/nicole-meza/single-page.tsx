import type { ChangeEvent, KeyboardEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import {
  AIButton,
  AIButtonSize,
  AIButtonTextTransform,
  Button,
  ButtonColor,
  ButtonIconPosition,
  ButtonShape,
  ButtonSize,
  ButtonTextTransform,
  ButtonVariant,
  Card,
  CardHeading,
  Heading,
  IconButton,
  Input,
  InputSize,
  Paragraph,
  ProgressBar,
  ProgressBarColor,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableHeaderCellScope,
  TableRow,
  Tag,
  TagColor,
  TagSize,
  TypographyVisualStyle,
  magma,
  styled,
} from 'react-magma-dom';
import {
  AccountCircleIcon,
  AccessTimeIcon,
  AddIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowUpwardIcon,
  AutoAwesomeIcon,
  AutoStoriesIcon,
  BuildIcon,
  CalendarTodayIcon,
  CancelIcon,
  CheckCircleIcon,
  CheckIcon,
  ChecklistIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  CollectionsBookmarkIcon,
  ContentCopyIcon,
  DoubleArrowIcon,
  ExpandMoreIcon,
  FlagIcon,
  FormatSizeIcon,
  FunctionsIcon,
  HelpIcon,
  HistoryIcon,
  HomeIcon,
  KeyboardIcon,
  ListIcon,
  LogoutIcon,
  MenuBookIcon,
  MessageIcon,
  MoreHorizIcon,
  PrintIcon,
  ReceiptIcon,
  SchoolIcon,
  SearchIcon,
  SettingsAccessibilityIcon,
  SettingsIcon,
  StarIcon,
  ThumbDownAltIcon,
  ThumbUpAltIcon,
  TranslateIcon,
  VideocamIcon,
  VolumeUpIcon,
  WebIcon,
  WorkIcon,
} from 'react-magma-icons';

import type { SubmissionMetadata } from '../../workshop/types';
import mindTapLogo from './cengage-mindtap-logo.png';
import masterItResourceImage from './master-it-resource.png';
import railBongoIcon from './rail-bongo.png';
import railFlashcardsIcon from './rail-flashcards.png';
import railGlossaryIcon from './rail-glossary.png';
import railNotesIcon from './rail-notes.png';
import railProgressIcon from './rail-progress.png';
import watchItResourceImage from './watch-it-resource.png';

export const metadata: SubmissionMetadata = {
  title: 'Student Assistant Concept Check',
  owner: 'Nicole Meza',
  figmaUrl:
    'https://www.figma.com/design/AeKz05nyuXL1n1PPiKQQTy/WebAssign---Consolidation-to-MAST?node-id=1043-14956&t=PoPLYT3iegKVU6h9-4',
  status: 'ready',
};

interface RailIconProps {
  color?: string;
  size?: number;
}

interface RailAssetIconProps extends RailIconProps {
  src: string;
}

function RailAssetIcon({ size = 32, src }: RailAssetIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <image width="32" height="32" preserveAspectRatio="none" href={src} xlinkHref={src} />
    </svg>
  );
}

function MyContentIcon({ size = 32 }: RailIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" fill="url(#my-content-icon-pattern)" />
      <defs>
        <pattern
          id="my-content-icon-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#my-content-icon-image" transform="scale(0.015625)" />
        </pattern>
        <image
          id="my-content-icon-image"
          width="64"
          height="64"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdJJREFUeNrsm89KAlEUxs9Mpi0iwgjyASL6Qy1qYduIoG0vEOG+aFe4tzbRCzSv0DYIlyEGCQUGQrRpo+YfQiUly+kcMaiIqUjF5nwffAzMXO7w/e4998xmDNu2SbNMUi4A0A7A0+4J56zrVb5Y7ECbp06zQ1eh6ZNe3wGdCE+tOa3/UAKBDu7YAM6AXj8DPotr1vjjmWL/awAcAG0QAACgd2XMHiXlOs7eZy+zh1yeucSOsnfYN3IITrDj7GEliy4LvMZeYgelBCKKwr+XZI6YrW2vVSumgpp30iDaIAAAAAAAAAAAAAAAAAAAAAAAAAAAAACok6ebLwvaF7T7ckgjVPzyeYH8tNe3TXFjwZ07wCm8SJ7JmK6WQKP+1LWXOYX/zZh2qVGvk1nLZ9XWfy2fIbOYTKgFINnNyt0tFS7P1YWXzJK92QVyiTOq5tLkn5mngdExMj39rgzdeK5TLZdprryE/9AG5cbbzY5p/WfDUtYBPoRcCSBb9X075r7qdS+ArdikY8D0o482Y1NdBWB4FzdslAAAAAAAAAAA6AVQUpy/IgCiigGcCoAw+0FheMkcFgApdpB9zC4rCF5uZZXMKQM/TqILAAAAAAAA6NWrAAMA8uV4cGiFncgAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}

function MyNotesIcon(props: RailIconProps) {
  return <RailAssetIcon {...props} src={railNotesIcon} />;
}

function BongoIcon(props: RailIconProps) {
  return <RailAssetIcon {...props} src={railBongoIcon} />;
}

function GlossaryIcon(props: RailIconProps) {
  return <RailAssetIcon {...props} src={railGlossaryIcon} />;
}

function FlashcardsIcon(props: RailIconProps) {
  return <RailAssetIcon {...props} src={railFlashcardsIcon} />;
}

function ProgressIcon(props: RailIconProps) {
  return <RailAssetIcon {...props} src={railProgressIcon} />;
}

const resourceActions = [
  { label: 'Read it', Icon: AutoStoriesIcon },
  { label: 'Watch it', Icon: VideocamIcon },
  { label: 'Master it', Icon: SchoolIcon },
];

const assistantScriptedPrompts = [
  "I'm having trouble understanding what a mixed number is. Can you show me an example?",
  'How do I convert an improper fraction to a mixed number?',
];

const assistantExampleResponse =
  'A mixed number combines a whole number with a proper fraction. For example, 2 3/4 means you have 2 whole units plus 3/4 of another unit. You\'ll often see mixed numbers when a quantity is greater than one but not a whole number.';

const assistantConversionSteps = [
  'To convert an improper fraction to a mixed number first divide the numerator by the denominator.',
  'If there is no remainder, the improper fraction becomes a whole number. If there is a remainder, then a mixed number will result in the following form where the divisor of the mixed number will be the denominator from the original improper fraction.',
];

const teacherScriptedQuestion =
  'How do I know if 5/18 is a proper or improper fraction? Is it because the top number is smaller than the bottom number?';

const teacherScriptedResponse =
  "Great question! You're exactly right. 5/18 is a proper fraction because the numerator (5) is smaller than the denominator (18). Whenever the top number is less than the bottom number, the fraction is less than 1, which makes it proper. An improper fraction would be the opposite \u2014 like 18/5, where the top number is larger.";

const firstQuestionNumber = 1;
const secondQuestionNumber = 2;
const thirdQuestionNumber = 3;
const fourthQuestionNumber = 4;
const defaultQuestionNumber = fourthQuestionNumber;
const totalQuestionCount = 4;
const implementedQuestionNumbers = [
  firstQuestionNumber,
  secondQuestionNumber,
  thirdQuestionNumber,
  defaultQuestionNumber,
];
const lrnoPageNumbers = Array.from(
  { length: totalQuestionCount },
  (_unusedValue, index) => index + 1
);

const toolRailItems = [
  { label: 'My Content', Icon: MyContentIcon },
  { label: 'My Notes', Icon: MyNotesIcon },
  { label: 'Bongo', Icon: BongoIcon },
  { label: 'Glossary', Icon: GlossaryIcon },
  { label: 'Flashcards', Icon: FlashcardsIcon },
  { label: 'Progress', Icon: ProgressIcon },
];

const learningNavTopItems = [
  { label: 'Home', Icon: HomeIcon },
  { label: 'Account', Icon: AccountCircleIcon },
  { label: 'Receipts', Icon: ReceiptIcon },
  { label: 'Collections', Icon: CollectionsBookmarkIcon },
  { label: 'WebAssign', Icon: WebIcon },
];

const learningNavBottomItems = [
  { label: 'Tools', Icon: BuildIcon },
  { label: 'Learning Path', Icon: SchoolIcon },
  { label: 'Work', Icon: WorkIcon },
  { label: 'Help', Icon: HelpIcon },
];

const answerInputWidth = '80px';
const answerDividerWidth = magma.spaceScale.spacing12;
const learningNavigationWidth = `calc(${magma.spaceScale.spacing12} + ${magma.spaceScale.spacing02} - 1px)`;
const readerNavigationWidth = magma.spaceScale.spacing11;
const readerToolRailWidth = `calc(${magma.spaceScale.spacing09} + ${magma.spaceScale.spacing03})`;
const courseToolRailWidth = magma.spaceScale.spacing09;
const teacherPanelWidth = '500px';
const teacherPanelMinWidth = `calc(${magma.spaceScale.spacing14} * 2 + ${magma.spaceScale.spacing09})`;
const questionPageParam = 'question';
const readItPageParam = 'read-it';
const watchItPageParam = 'watch-it';
const masterItPageParam = 'master-it';
const activityOverviewPageParam = 'activity-overview';

const initialAnswerValues = {
  whole: '',
  numerator: '',
  denominator: '',
};

const correctAnswerValues = {
  whole: '4',
  numerator: '2',
  denominator: '7',
};

const overviewStats = [
  { label: 'Due date (EST)', value: '11/26/2026 @ 11:59 PM', Icon: CalendarTodayIcon },
  { label: 'Time limit', value: '1 hour', Icon: AccessTimeIcon },
  { label: 'Final score (Best)', value: '--', Icon: StarIcon },
  { label: 'Attempts', value: '4', Icon: ChecklistIcon },
  { label: 'Points Possible', value: '10', Icon: AddIcon },
  { label: 'Grading policy', value: 'Counts toward grade', Icon: CheckCircleIcon },
];

const overviewAttemptRows = [
  { attempt: '1', hasStartAction: true },
  { attempt: '2', hasStartAction: false },
  { attempt: '3', hasStartAction: false },
  { attempt: '4', hasStartAction: false },
];

type AnswerField = keyof typeof initialAnswerValues;
type AnswerValues = typeof initialAnswerValues;
type AnswerValuesByQuestion = Partial<Record<number, AnswerValues>>;
type AnswerFeedback = 'idle' | 'incorrect' | 'correct';
type AnswerFeedbackByQuestion = Partial<Record<number, AnswerFeedback>>;

export default function SinglePage() {
  if (isMasterItPage()) {
    return <MasterItPage />;
  }

  if (isWatchItPage()) {
    return <WatchItPage />;
  }

  if (isReadItPage()) {
    return <ReadItPage />;
  }

  if (isActivityOverviewPage()) {
    return <ActivityOverviewPage />;
  }

  if (isQuestionPage()) {
    return <QuestionPrototype />;
  }

  return <ActivityOverviewPage />;
}

function QuestionPrototype() {
  const activeQuestionNumber = getActiveQuestionNumber();
  const [answerValuesByQuestion, setAnswerValuesByQuestion] =
    useState<AnswerValuesByQuestion>({
      [defaultQuestionNumber]: initialAnswerValues,
    });
  const [answerFeedbackByQuestion, setAnswerFeedbackByQuestion] =
    useState<AnswerFeedbackByQuestion>({
      [defaultQuestionNumber]: 'idle',
    });
  const [isStudentAssistantOpen, setIsStudentAssistantOpen] = useState(false);
  const [isTeacherChatOpen, setIsTeacherChatOpen] = useState(false);
  const answerValues = answerValuesByQuestion[activeQuestionNumber] ?? initialAnswerValues;
  const activeAnswerFeedback = answerFeedbackByQuestion[activeQuestionNumber] ?? 'idle';
  const isCheckAnswerActive =
    answerValues.whole.trim().length > 0 &&
    answerValues.numerator.trim().length > 0 &&
    answerValues.denominator.trim().length > 0;
  const hasAnswerFeedback = activeAnswerFeedback !== 'idle';
  const isFirstQuestion = activeQuestionNumber === firstQuestionNumber;
  const isFourthQuestion = activeQuestionNumber === fourthQuestionNumber;
  const showCheckAnswer = false;
  const showResourcesPanel =
    activeQuestionNumber !== secondQuestionNumber && !isFourthQuestion;
  const showTeacherAction = isFourthQuestion;
  const hasResourceStudentAssistant = showResourcesPanel && !isFirstQuestion;
  const isIncorrectAnswer = activeAnswerFeedback === 'incorrect';
  const isCorrectAnswer =
    answerValues.whole.trim() === correctAnswerValues.whole &&
    answerValues.numerator.trim() === correctAnswerValues.numerator &&
    answerValues.denominator.trim() === correctAnswerValues.denominator;

  const handleAnswerChange =
    (field: AnswerField) =>
    (event: ChangeEvent<HTMLInputElement>): void => {
      setAnswerFeedbackByQuestion((currentFeedbackByQuestion) => ({
        ...currentFeedbackByQuestion,
        [activeQuestionNumber]: 'idle',
      }));
      setAnswerValuesByQuestion((currentValuesByQuestion) => ({
        ...currentValuesByQuestion,
        [activeQuestionNumber]: {
          ...(currentValuesByQuestion[activeQuestionNumber] ?? initialAnswerValues),
          [field]: event.target.value,
        },
      }));
    };

  const handleCheckAnswer = (): void => {
    if (!isCheckAnswerActive) {
      return;
    }

    setAnswerFeedbackByQuestion((currentFeedbackByQuestion) => ({
      ...currentFeedbackByQuestion,
      [activeQuestionNumber]: isCorrectAnswer ? 'correct' : 'incorrect',
    }));
  };

  const handleStudentAssistantToggle = (): void => {
    setIsStudentAssistantOpen((currentValue) => !currentValue);
  };

  const handleResourceStudentAssistantOpen = (): void => {
    if (!hasResourceStudentAssistant) {
      return;
    }

    setIsStudentAssistantOpen(true);
  };

  const handleTeacherChatOpen = (): void => {
    setIsTeacherChatOpen(true);
  };

  return (
    <MindTapFrame aria-labelledby="activity-title">
      <LearningNavigation />

      <ProductHeader>
        <BrandLockup>
          <LogoImage alt="Cengage MindTap" src={mindTapLogo} />
        </BrandLockup>
        <TopActions>
          <AIButton
            aria-controls="student-assistant-chatbot"
            aria-expanded={isStudentAssistantOpen}
            leadingIcon={<AutoAwesomeIcon />}
            leftColor={magma.colors.primary500}
            onClick={handleStudentAssistantToggle}
            rightColor={magma.colors.success500}
            size={AIButtonSize.small}
            textTransform={AIButtonTextTransform.none}
          >
            Student Assistant
          </AIButton>
          <SearchCue>
            <SearchIcon color={magma.colors.success500} size={18} />
            <span>Search this course</span>
          </SearchCue>
          <IconButton
            aria-label="Help"
            color={ButtonColor.subtle}
            icon={<HelpIcon />}
            shape={ButtonShape.round}
            size={ButtonSize.small}
          />
        </TopActions>
      </ProductHeader>

      <PageColumns>
        <MainColumn>
          <ActivityBar>
            <BackButton
              color={ButtonColor.subtle}
              icon={<ChevronLeftIcon />}
              iconPosition={ButtonIconPosition.left}
              isInverse
              onClick={navigateToActivityOverview}
              size={ButtonSize.small}
              textTransform={ButtonTextTransform.uppercase}
              variant={ButtonVariant.link}
            >
              Back to activity overview
            </BackButton>
            <ActivityDivider />
            <ActivityTitle
              id="activity-title"
              isInverse
              level={2}
              visualStyle={TypographyVisualStyle.heading2XSmall}
            >
              Chapter 02 Concept Check 1: Fractions
            </ActivityTitle>
          </ActivityBar>

          <DetailBar>
            <ActivityDetailsButton
              color={ButtonColor.subtle}
              icon={<ExpandMoreIcon color={magma.colors.primary500} size={20} />}
              iconPosition={ButtonIconPosition.right}
              size={ButtonSize.small}
              textTransform={ButtonTextTransform.uppercase}
              variant={ButtonVariant.link}
            >
              Activity Details
            </ActivityDetailsButton>
          </DetailBar>

          <QuestionBodyLayout $hasTeacherPanel={isTeacherChatOpen}>
            <Workspace className={hasAnswerFeedback ? 'has-feedback' : undefined}>
              {showTeacherAction && (
                <QuestionTopActionRow>
                  <AskTeacherButton
                    aria-controls="ask-teacher-chat-panel"
                    aria-expanded={isTeacherChatOpen}
                    color={ButtonColor.secondary}
                    icon={<MessageIcon color={magma.colors.primary500} size={16} />}
                    iconPosition={ButtonIconPosition.right}
                    onClick={handleTeacherChatOpen}
                    size={ButtonSize.small}
                    textTransform={ButtonTextTransform.uppercase}
                    variant={ButtonVariant.solid}
                  >
                    Ask my teacher
                  </AskTeacherButton>
                </QuestionTopActionRow>
              )}

              <QuestionArea>
                <QuestionPanel>
                  <ProgressHeader>
                    <Paragraph noMargins visualStyle={TypographyVisualStyle.bodyMedium}>
                      {activeQuestionNumber} of {totalQuestionCount}
                    </Paragraph>
                    <Separator aria-hidden="true" />
                    <Paragraph noMargins visualStyle={TypographyVisualStyle.bodyMedium}>
                      1 Point
                    </Paragraph>
                  </ProgressHeader>
                  <ProgressBar
                    aria-label="Question progress"
                    color={ProgressBarColor.primary}
                    height={8}
                    percentage={getQuestionProgressPercentage(activeQuestionNumber)}
                  />

                  <QuestionText noMargins>
                    Convert the improper fraction to a whole or mixed number. (Enter your answer as a
                    simplified mixed number.)
                  </QuestionText>

                  <MathWork aria-label="Convert thirty sevenths into a mixed number">
                    <ProblemFraction>
                      <Fraction>
                        <span>30</span>
                        <FractionLine aria-hidden="true" />
                        <span>7</span>
                      </Fraction>
                    </ProblemFraction>

                    <AnswerRow>
                      <AnswerInput>
                        <AnswerInputControl $feedbackState={activeAnswerFeedback}>
                          <Input
                            aria-invalid={isIncorrectAnswer}
                            inputSize={InputSize.medium}
                            isLabelVisuallyHidden
                            labelText="Whole number"
                            onChange={handleAnswerChange('whole')}
                            value={answerValues.whole}
                            width={answerInputWidth}
                          />
                          <AnswerFeedbackIcon feedbackState={activeAnswerFeedback} />
                        </AnswerInputControl>
                      </AnswerInput>
                      <Fraction>
                        <AnswerInput
                          $hasBottomPadding
                          $isStacked
                        >
                          <AnswerInputControl $feedbackState={activeAnswerFeedback}>
                            <Input
                              aria-invalid={isIncorrectAnswer}
                              inputSize={InputSize.medium}
                              isLabelVisuallyHidden
                              labelText="Numerator"
                              onChange={handleAnswerChange('numerator')}
                              value={answerValues.numerator}
                              width={answerInputWidth}
                            />
                            <AnswerFeedbackIcon feedbackState={activeAnswerFeedback} />
                          </AnswerInputControl>
                        </AnswerInput>
                        <AnswerFractionLine aria-hidden="true" />
                        <AnswerInput
                          $isStacked
                        >
                          <AnswerInputControl $feedbackState={activeAnswerFeedback}>
                            <Input
                              aria-invalid={isIncorrectAnswer}
                              inputSize={InputSize.medium}
                              isLabelVisuallyHidden
                              labelText="Denominator"
                              onChange={handleAnswerChange('denominator')}
                              value={answerValues.denominator}
                              width={answerInputWidth}
                            />
                            <AnswerFeedbackIcon feedbackState={activeAnswerFeedback} />
                          </AnswerInputControl>
                        </AnswerInput>
                      </Fraction>
                    </AnswerRow>
                  </MathWork>

                  {!hasAnswerFeedback && showResourcesPanel && (
                    <ResourcesCardPanel
                      isStudentAssistantOpen={isStudentAssistantOpen}
                      onStudentAssistantClick={handleResourceStudentAssistantOpen}
                      showStudentAssistant={!isFirstQuestion}
                    />
                  )}

                  {showCheckAnswer && (
                    <CheckAnswerRow>
                      <Button
                        color={ButtonColor.subtle}
                        disabled={!isCheckAnswerActive}
                        onClick={handleCheckAnswer}
                        size={ButtonSize.medium}
                        textTransform={ButtonTextTransform.uppercase}
                        variant={ButtonVariant.solid}
                      >
                        Check answer
                      </Button>
                    </CheckAnswerRow>
                  )}
                </QuestionPanel>

                <QuestionToolbar aria-label="Question tools">
                  <IconButton
                    aria-label="Checklist"
                    color={ButtonColor.subtle}
                    icon={<ChecklistIcon />}
                    size={ButtonSize.small}
                    variant={ButtonVariant.link}
                  />
                  <IconButton
                    aria-label="Accessibility settings"
                    color={ButtonColor.subtle}
                    icon={<SettingsAccessibilityIcon />}
                    size={ButtonSize.small}
                    variant={ButtonVariant.link}
                  />
                  <IconButton
                    aria-label="Flag question"
                    color={ButtonColor.subtle}
                    icon={<FlagIcon />}
                    size={ButtonSize.small}
                    variant={ButtonVariant.link}
                  />
                  <ToolbarSpacer />
                  <IconButton
                    aria-label="Collapse tools"
                    color={ButtonColor.subtle}
                    icon={<ChevronLeftIcon />}
                    size={ButtonSize.small}
                    variant={ButtonVariant.link}
                  />
                </QuestionToolbar>
              </QuestionArea>

              {activeAnswerFeedback === 'correct' ? (
                <CorrectFeedbackCard
                  questionNumber={activeQuestionNumber}
                />
              ) : activeAnswerFeedback === 'incorrect' ? (
                <IncorrectFeedbackCard
                  questionNumber={activeQuestionNumber}
                />
              ) : (
                null
              )}

              <LrnoPagination currentQuestionNumber={activeQuestionNumber} />
            </Workspace>

            {isTeacherChatOpen && (
              <TeacherChatPanel onClose={() => setIsTeacherChatOpen(false)} />
            )}
          </QuestionBodyLayout>
        </MainColumn>

        <ToolRail aria-label="Course tools">
          {toolRailItems.map(({ label, Icon }) => (
            <RailButton key={label} aria-label={label} title={label}>
              <Icon size={32} />
            </RailButton>
          ))}
        </ToolRail>
      </PageColumns>

      {isStudentAssistantOpen && (
        <StudentAssistantChatbot
          onClose={() => setIsStudentAssistantOpen(false)}
          questionNumber={activeQuestionNumber}
        />
      )}

    </MindTapFrame>
  );
}

interface AnswerFeedbackIconProps {
  feedbackState: AnswerFeedback;
}

function AnswerFeedbackIcon({ feedbackState }: AnswerFeedbackIconProps) {
  if (feedbackState === 'correct') {
    return (
      <AnswerStatusIcon aria-hidden="true">
        <CheckIcon color={magma.colors.success500} size={16} />
      </AnswerStatusIcon>
    );
  }

  if (feedbackState === 'incorrect') {
    return (
      <AnswerStatusIcon aria-hidden="true">
        <CloseIcon color={magma.colors.danger500} size={16} />
      </AnswerStatusIcon>
    );
  }

  return null;
}

interface StudentAssistantChatbotProps {
  onClose: () => void;
  questionNumber: number;
}

function StudentAssistantChatbot({ onClose, questionNumber }: StudentAssistantChatbotProps) {
  const assistantActionColor = magma.colors.neutral700;
  const assistantMessagesRef = useRef<HTMLDivElement | null>(null);
  const [assistantConversationStep, setAssistantConversationStep] = useState(0);
  const [pendingAssistantStep, setPendingAssistantStep] = useState<number | null>(null);
  const [composerValue, setComposerValue] = useState('');
  const [submittedMessages, setSubmittedMessages] = useState<string[]>([]);
  const nextPromptIndex =
    assistantConversationStep >= 4
      ? assistantScriptedPrompts.length
      : assistantConversationStep >= 2
        ? 1
        : 0;
  const canSendAssistantMessage =
    composerValue.trim().length > 0 &&
    pendingAssistantStep === null &&
    nextPromptIndex < assistantScriptedPrompts.length;

  useEffect(() => {
    if (pendingAssistantStep === null) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setAssistantConversationStep(pendingAssistantStep);
      setPendingAssistantStep(null);
    }, 650);

    return () => window.clearTimeout(timeoutId);
  }, [pendingAssistantStep]);

  useEffect(() => {
    const messagesElement = assistantMessagesRef.current;

    if (!messagesElement) {
      return undefined;
    }

    const animationFrameId = window.requestAnimationFrame(() => {
      messagesElement.scrollTop = messagesElement.scrollHeight;
    });

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [assistantConversationStep, submittedMessages]);

  const handleAssistantMessageSend = (): void => {
    if (!canSendAssistantMessage) {
      return;
    }

    const messageIndex = nextPromptIndex;
    const nextMessage = assistantScriptedPrompts[messageIndex];
    const nextUserStep = messageIndex === 0 ? 1 : 3;
    const nextAssistantStep = messageIndex === 0 ? 2 : 4;

    setSubmittedMessages((currentMessages) => {
      const nextMessages = [...currentMessages];
      nextMessages[messageIndex] = nextMessage;
      return nextMessages;
    });
    setAssistantConversationStep(nextUserStep);
    setPendingAssistantStep(nextAssistantStep);
    setComposerValue('');
  };

  const handleComposerKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key !== 'Enter' || event.shiftKey) {
      return;
    }

    event.preventDefault();
    handleAssistantMessageSend();
  };

  return (
    <AssistantPanel
      aria-label="Student Assistant chat"
      aria-live="polite"
      id="student-assistant-chatbot"
    >
      <AssistantHeader>
        <AssistantRole>
          <AutoAwesomeIcon color={magma.colors.primary500} size={24} />
          <AssistantTitle>Student Assistant</AssistantTitle>
        </AssistantRole>

        <AssistantHeaderActions>
          <AssistantIconButton
            aria-label="Conversation history"
            color={ButtonColor.subtle}
            icon={<HistoryIcon color={assistantActionColor} size={20} />}
            size={ButtonSize.medium}
            title="Conversation history"
            variant={ButtonVariant.link}
          />
          <AssistantIconButton
            aria-label="Assistant settings"
            color={ButtonColor.subtle}
            icon={<SettingsIcon color={assistantActionColor} size={20} />}
            size={ButtonSize.medium}
            title="Assistant settings"
            variant={ButtonVariant.link}
          />
          <AssistantIconButton
            aria-label="Close Student Assistant"
            color={ButtonColor.subtle}
            icon={<CloseIcon color={assistantActionColor} size={20} />}
            onClick={onClose}
            size={ButtonSize.medium}
            title="Close Student Assistant"
            variant={ButtonVariant.link}
          />
        </AssistantHeaderActions>
      </AssistantHeader>

      <AssistantMessages ref={assistantMessagesRef}>
        <AssistantMessageGroup>
          <AssistantMessageCopy>
            I see you're on Chapter 02 Concept Check 1: Fractions, question {questionNumber}.
            How can I help you?
          </AssistantMessageCopy>
          <AssistantResponseActions actionColor={assistantActionColor} />
        </AssistantMessageGroup>

        {assistantConversationStep >= 1 && (
          <AssistantUserMessage>
            {submittedMessages[0] ?? assistantScriptedPrompts[0]}
          </AssistantUserMessage>
        )}

        {assistantConversationStep >= 2 && (
          <>
            <AssistantMessageGroup>
              <AssistantMessageCopy>{assistantExampleResponse}</AssistantMessageCopy>
              <AssistantResponseActions actionColor={assistantActionColor} />
            </AssistantMessageGroup>
          </>
        )}

        {assistantConversationStep >= 3 && (
          <>
            <AssistantUserMessage>
              {submittedMessages[1] ?? assistantScriptedPrompts[1]}
            </AssistantUserMessage>
          </>
        )}

        {assistantConversationStep >= 4 && (
          <>
            <AssistantMessageGroup>
              <AssistantRichMessageCopy>
                {assistantConversionSteps.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </AssistantRichMessageCopy>
              <AssistantFormulaBlock aria-label="Mixed number form">
                <AssistantFormulaLabel>whole number</AssistantFormulaLabel>
                <AssistantFormulaFraction>
                  <AssistantFormulaLabel>remainder</AssistantFormulaLabel>
                  <AssistantFormulaLine aria-hidden="true" />
                  <AssistantFormulaLabel>divisor</AssistantFormulaLabel>
                </AssistantFormulaFraction>
              </AssistantFormulaBlock>
              <AssistantResponseActions actionColor={assistantActionColor} />
            </AssistantMessageGroup>
          </>
        )}
      </AssistantMessages>

      <AssistantComposer>
        <AssistantComposerLabel htmlFor="student-assistant-composer">
          Ask Student Assistant
        </AssistantComposerLabel>
        <AssistantComposerInput
          id="student-assistant-composer"
          onChange={(event) => setComposerValue(event.target.value)}
          onKeyDown={handleComposerKeyDown}
          placeholder="How can student assistant help"
          value={composerValue}
        />
        <AssistantComposerFooter>
          <AssistantComposerTools>
            <AssistantIconButton
              aria-label="Add content"
              color={ButtonColor.subtle}
              icon={<AddIcon color={assistantActionColor} size={20} />}
              size={ButtonSize.medium}
              title="Add content"
              variant={ButtonVariant.link}
            />
            <AssistantIconButton
              aria-label="Math mode"
              color={ButtonColor.subtle}
              icon={<FunctionsIcon color={assistantActionColor} size={20} />}
              size={ButtonSize.medium}
              title="Math mode"
              variant={ButtonVariant.link}
            />
            <AssistantIconButton
              aria-label="Keyboard"
              color={ButtonColor.subtle}
              icon={<KeyboardIcon color={assistantActionColor} size={20} />}
              size={ButtonSize.medium}
              title="Keyboard"
              variant={ButtonVariant.link}
            />
          </AssistantComposerTools>
          <AssistantSendButton
            $isActive={canSendAssistantMessage}
            aria-label="Send message"
            color={ButtonColor.subtle}
            disabled={!canSendAssistantMessage}
            icon={
              <ArrowUpwardIcon
                color={
                  canSendAssistantMessage
                    ? magma.colors.neutral100
                    : magma.colors.neutral500
                }
                size={20}
              />
            }
            onClick={handleAssistantMessageSend}
            size={ButtonSize.medium}
            title="Send message"
            variant={ButtonVariant.solid}
          />
        </AssistantComposerFooter>
      </AssistantComposer>
    </AssistantPanel>
  );
}

interface AssistantResponseActionsProps {
  actionColor: string;
}

function AssistantResponseActions({ actionColor }: AssistantResponseActionsProps) {
  return (
    <AssistantReactions aria-label="Response actions">
      <AssistantReactionButton
        aria-label="Good response"
        color={ButtonColor.subtle}
        icon={<ThumbUpAltIcon color={actionColor} size={16} />}
        size={ButtonSize.small}
        title="Good response"
        variant={ButtonVariant.link}
      />
      <AssistantReactionButton
        aria-label="Bad response"
        color={ButtonColor.subtle}
        icon={<ThumbDownAltIcon color={actionColor} size={16} />}
        size={ButtonSize.small}
        title="Bad response"
        variant={ButtonVariant.link}
      />
      <AssistantReactionButton
        aria-label="Copy response"
        color={ButtonColor.subtle}
        icon={<ContentCopyIcon color={actionColor} size={16} />}
        size={ButtonSize.small}
        title="Copy response"
        variant={ButtonVariant.link}
      />
      <AssistantReactionButton
        aria-label="Read response aloud"
        color={ButtonColor.subtle}
        icon={<VolumeUpIcon color={actionColor} size={16} />}
        size={ButtonSize.small}
        title="Read response aloud"
        variant={ButtonVariant.link}
      />
    </AssistantReactions>
  );
}

interface TeacherChatPanelProps {
  onClose: () => void;
}

function TeacherChatPanel({ onClose }: TeacherChatPanelProps) {
  const teacherActionColor = magma.colors.neutral700;
  const teacherMessagesRef = useRef<HTMLDivElement | null>(null);
  const [teacherConversationStep, setTeacherConversationStep] = useState(0);
  const [isTeacherResponsePending, setIsTeacherResponsePending] = useState(false);
  const [composerValue, setComposerValue] = useState('');
  const canSendTeacherMessage =
    composerValue.trim().length > 0 &&
    teacherConversationStep === 0 &&
    !isTeacherResponsePending;

  useEffect(() => {
    if (!isTeacherResponsePending) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setTeacherConversationStep(2);
      setIsTeacherResponsePending(false);
    }, 650);

    return () => window.clearTimeout(timeoutId);
  }, [isTeacherResponsePending]);

  useEffect(() => {
    const messagesElement = teacherMessagesRef.current;

    if (!messagesElement) {
      return undefined;
    }

    const animationFrameId = window.requestAnimationFrame(() => {
      messagesElement.scrollTop = messagesElement.scrollHeight;
    });

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [teacherConversationStep, isTeacherResponsePending]);

  const handleTeacherMessageSend = (): void => {
    if (!canSendTeacherMessage) {
      return;
    }

    setTeacherConversationStep(1);
    setIsTeacherResponsePending(true);
    setComposerValue('');
  };

  const handleTeacherComposerKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter') {
      return;
    }

    event.preventDefault();
    handleTeacherMessageSend();
  };

  return (
    <TeacherPanel
      aria-label="Conversation with Ellen Manchester"
      aria-live="polite"
      id="ask-teacher-chat-panel"
    >
      <TeacherPanelHeader>
        <TeacherPanelHeadingGroup>
          <TeacherPanelTitle>Conversation with Ellen Manchester</TeacherPanelTitle>
          <TeacherPanelSubtitle>
            Contemporary Mathematics for Business &amp; Consumers | Section 001
          </TeacherPanelSubtitle>
        </TeacherPanelHeadingGroup>

        <TeacherPanelHeaderActions>
          <TeacherPanelIconButton
            aria-label="More conversation actions"
            color={ButtonColor.subtle}
            icon={<MoreHorizIcon color={teacherActionColor} size={20} />}
            size={ButtonSize.small}
            title="More conversation actions"
            variant={ButtonVariant.solid}
          />
          <TeacherPanelIconButton
            aria-label="Close teacher chat"
            color={ButtonColor.subtle}
            icon={<CloseIcon color={teacherActionColor} size={20} />}
            onClick={onClose}
            size={ButtonSize.small}
            title="Close teacher chat"
            variant={ButtonVariant.solid}
          />
        </TeacherPanelHeaderActions>
      </TeacherPanelHeader>

      <TeacherPanelBody ref={teacherMessagesRef}>
        {teacherConversationStep === 0 ? (
          <TeacherPanelPrompt>Ask Ellen Manchester about this question.</TeacherPanelPrompt>
        ) : (
          <TeacherMessageGroup>
            <TeacherOutgoingMessageBlock>
              <TeacherOutgoingBubble>{teacherScriptedQuestion}</TeacherOutgoingBubble>
              <TeacherMessageMetadata $align="end">
                <TeacherMessageSender>You</TeacherMessageSender>
                <TeacherMetadataDot aria-hidden="true" />
                <TeacherMessageTime>1:28 PM</TeacherMessageTime>
              </TeacherMessageMetadata>
            </TeacherOutgoingMessageBlock>

            {teacherConversationStep >= 2 && (
              <TeacherIncomingMessageBlock>
                <TeacherIncomingCopy>{teacherScriptedResponse}</TeacherIncomingCopy>
                <TeacherMessageMetadata $align="start">
                  <TeacherMessageSender>Ellen Manchester</TeacherMessageSender>
                  <TeacherMetadataDot aria-hidden="true" />
                  <TeacherMessageTime>1:28 PM</TeacherMessageTime>
                </TeacherMessageMetadata>
              </TeacherIncomingMessageBlock>
            )}
          </TeacherMessageGroup>
        )}
      </TeacherPanelBody>

      <TeacherPanelComposer>
        <TeacherComposerBox>
          <AssistantComposerLabel htmlFor="teacher-chat-composer">
            Ask Ellen Manchester
          </AssistantComposerLabel>
          <TeacherComposerInput
            id="teacher-chat-composer"
            onChange={(event) => setComposerValue(event.target.value)}
            onKeyDown={handleTeacherComposerKeyDown}
            placeholder="What do you want to chat about?"
            value={composerValue}
          />
          <AssistantComposerFooter>
            <AssistantComposerTools>
              <AssistantIconButton
                aria-label="Add content"
                color={ButtonColor.subtle}
                icon={<AddIcon color={teacherActionColor} size={24} />}
                size={ButtonSize.medium}
                title="Add content"
                variant={ButtonVariant.link}
              />
              <AssistantIconButton
                aria-label="Math mode"
                color={ButtonColor.subtle}
                icon={<FunctionsIcon color={teacherActionColor} size={24} />}
                size={ButtonSize.medium}
                title="Math mode"
                variant={ButtonVariant.link}
              />
              <AssistantIconButton
                aria-label="Keyboard"
                color={ButtonColor.subtle}
                icon={<KeyboardIcon color={teacherActionColor} size={24} />}
                size={ButtonSize.medium}
                title="Keyboard"
                variant={ButtonVariant.link}
              />
            </AssistantComposerTools>
            <AssistantSendButton
              $isActive={canSendTeacherMessage}
              aria-label="Send message"
              color={ButtonColor.subtle}
              disabled={!canSendTeacherMessage}
              icon={
                <ArrowUpwardIcon
                  color={
                    canSendTeacherMessage
                      ? magma.colors.neutral100
                      : magma.colors.neutral500
                  }
                  size={24}
                />
              }
              onClick={handleTeacherMessageSend}
              size={ButtonSize.medium}
              title="Send message"
              variant={ButtonVariant.solid}
            />
          </AssistantComposerFooter>
        </TeacherComposerBox>
      </TeacherPanelComposer>
    </TeacherPanel>
  );
}

function ActivityOverviewPage() {
  return (
    <MindTapFrame aria-labelledby="overview-title">
      <LearningNavigation />

      <OverviewProductHeader>
        <BrandLockup>
          <LogoImage alt="Cengage MindTap" src={mindTapLogo} />
        </BrandLockup>
        <OverviewTopActions>
          <OverviewSearchCue>
            <SearchIcon color={magma.colors.success500} size={18} />
            <span>Search this course</span>
          </OverviewSearchCue>
          <OverviewHelpButton
            aria-label="Help"
            color={ButtonColor.subtle}
            icon={<HelpIcon />}
            shape={ButtonShape.round}
            size={ButtonSize.small}
          />
          <OverviewUserCue aria-label="User menu" title="User menu">
            <AccountCircleIcon color={magma.colors.neutral500} size={24} />
            <span>User</span>
            <ExpandMoreIcon color={magma.colors.neutral500} size={20} />
          </OverviewUserCue>
        </OverviewTopActions>
      </OverviewProductHeader>

      <PageColumns>
        <MainColumn>
          <ActivityBar>
            <BackButton
              color={ButtonColor.subtle}
              icon={<ChevronLeftIcon />}
              iconPosition={ButtonIconPosition.left}
              isInverse
              size={ButtonSize.small}
              textTransform={ButtonTextTransform.uppercase}
              variant={ButtonVariant.link}
            >
              Back to Learning Path
            </BackButton>
            <ActivityDivider />
            <OverviewActivityTitle
              id="overview-title"
              isInverse
              level={1}
              visualStyle={TypographyVisualStyle.heading2XSmall}
            >
              Chapter 02 Concept Check 1: Fractions
            </OverviewActivityTitle>
          </ActivityBar>

          <OverviewBody>
            <OverviewContent>
              <OverviewHeading level={2} visualStyle={TypographyVisualStyle.headingSmall}>
                Activity Overview
              </OverviewHeading>

              <OverviewStatsCard aria-label="Activity details">
                {overviewStats.map(({ Icon, label, value }) => (
                  <OverviewStat key={label}>
                    <Icon color={magma.colors.info500} size={32} />
                    <OverviewStatText>
                      <OverviewStatLabel noMargins>{label}</OverviewStatLabel>
                      <OverviewStatValue noMargins>{value}</OverviewStatValue>
                    </OverviewStatText>
                  </OverviewStat>
                ))}
              </OverviewStatsCard>

              <OverviewTableWrap>
                <OverviewTable aria-label="Attempt overview">
                  <TableHead>
                    <TableRow>
                      <OverviewHeaderCell scope={TableHeaderCellScope.col}>
                        Attempt (of 4)
                      </OverviewHeaderCell>
                      <OverviewHeaderCell scope={TableHeaderCellScope.col}>
                        Submitted on
                      </OverviewHeaderCell>
                      <OverviewHeaderCell scope={TableHeaderCellScope.col}>
                        Status
                      </OverviewHeaderCell>
                      <OverviewHeaderCell scope={TableHeaderCellScope.col}>
                        Score
                      </OverviewHeaderCell>
                      <OverviewHeaderCell scope={TableHeaderCellScope.col}>
                        Actions
                      </OverviewHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {overviewAttemptRows.map(({ attempt, hasStartAction }) => (
                      <TableRow key={attempt}>
                        <OverviewCell>{attempt}</OverviewCell>
                        <OverviewCell>--</OverviewCell>
                        <OverviewCell>--</OverviewCell>
                        <OverviewCell>--</OverviewCell>
                        {hasStartAction ? (
                          <OverviewCell>
                            <OverviewStartButton
                              color={ButtonColor.primary}
                              onClick={navigateToQuestionPage}
                              size={ButtonSize.small}
                              textTransform={ButtonTextTransform.uppercase}
                              variant={ButtonVariant.solid}
                            >
                              Start
                            </OverviewStartButton>
                          </OverviewCell>
                        ) : (
                          <OverviewCell>--</OverviewCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </OverviewTable>
              </OverviewTableWrap>
            </OverviewContent>
          </OverviewBody>
        </MainColumn>

        <ToolRail aria-label="Course tools">
          {toolRailItems.map(({ label, Icon }) => (
            <RailButton key={label} aria-label={label} title={label}>
              <Icon size={32} />
            </RailButton>
          ))}
        </ToolRail>
      </PageColumns>
    </MindTapFrame>
  );
}

function LearningNavigation() {
  return (
    <LearningNav aria-label="Learning navigation">
      <LearningNavExpandButton
        aria-label="Expand navigation"
        color={ButtonColor.subtle}
        icon={<DoubleArrowIcon color={magma.colors.tertiary500} size={24} />}
        size={ButtonSize.medium}
        title="Expand navigation"
        variant={ButtonVariant.link}
      />

      <LearningNavSection>
        {learningNavTopItems.map(({ label, Icon }) => (
          <LearningNavItemButton
            key={label}
            aria-label={label}
            color={ButtonColor.subtle}
            icon={<Icon color={magma.colors.tertiary500} size={24} />}
            size={ButtonSize.medium}
            title={label}
            variant={ButtonVariant.link}
          />
        ))}
      </LearningNavSection>

      <LearningNavUtilitySection>
        {learningNavBottomItems.map(({ label, Icon }) => (
          <LearningNavItemButton
            key={label}
            aria-label={label}
            color={ButtonColor.subtle}
            icon={<Icon color={magma.colors.tertiary500} size={24} />}
            size={ButtonSize.medium}
            title={label}
            variant={ButtonVariant.link}
          />
        ))}
      </LearningNavUtilitySection>

      <LearningNavSignOutButton
        aria-label="Sign out"
        color={ButtonColor.subtle}
        icon={<LogoutIcon color={magma.colors.tertiary500} size={24} />}
        size={ButtonSize.medium}
        title="Sign out"
        variant={ButtonVariant.link}
      />
    </LearningNav>
  );
}

interface LrnoPaginationProps {
  currentQuestionNumber: number;
}

function LrnoPagination({ currentQuestionNumber }: LrnoPaginationProps) {
  const previousQuestionNumber = currentQuestionNumber - 1;
  const nextQuestionNumber = currentQuestionNumber + 1;
  const canMoveToPrevious = implementedQuestionNumbers.includes(previousQuestionNumber);
  const canMoveToNext = implementedQuestionNumbers.includes(nextQuestionNumber);

  return (
    <PaginationBar aria-label="Question navigation">
      <LrnoPreviousButton
        aria-label="Previous question"
        color={ButtonColor.subtle}
        disabled={!canMoveToPrevious}
        icon={
          <ArrowBackIcon
            color={
              !canMoveToPrevious
                ? magma.colors.neutral500
                : magma.colors.primary500
            }
          />
        }
        onClick={canMoveToPrevious ? () => navigateToQuestionNumber(previousQuestionNumber) : undefined}
        size={ButtonSize.medium}
      />
      {lrnoPageNumbers.map((pageNumber) => {
        const isSelected = pageNumber === currentQuestionNumber;
        const isCompleted = pageNumber < currentQuestionNumber;
        const hasQuestionScreen = implementedQuestionNumbers.includes(pageNumber);

        return (
          <LrnoPageButton
            key={pageNumber}
            aria-current={isSelected ? 'page' : undefined}
            className={isSelected ? 'is-selected' : isCompleted ? 'is-completed' : undefined}
            color={ButtonColor.subtle}
            onClick={hasQuestionScreen ? () => navigateToQuestionNumber(pageNumber) : undefined}
            size={ButtonSize.medium}
            textTransform={ButtonTextTransform.none}
            variant={ButtonVariant.link}
          >
            {pageNumber}
          </LrnoPageButton>
        );
      })}
      <LrnoNextButton
        color={ButtonColor.primary}
        icon={<ArrowForwardIcon color={magma.colors.neutral100} />}
        iconPosition={ButtonIconPosition.right}
        onClick={canMoveToNext ? () => navigateToQuestionNumber(nextQuestionNumber) : undefined}
        size={ButtonSize.medium}
        textTransform={ButtonTextTransform.uppercase}
      >
        Next
      </LrnoNextButton>
    </PaginationBar>
  );
}

interface ResourcesCardPanelProps {
  isStudentAssistantOpen?: boolean;
  onStudentAssistantClick?: () => void;
  showStudentAssistant?: boolean;
}

function ResourcesCardPanel({
  isStudentAssistantOpen = false,
  onStudentAssistantClick,
  showStudentAssistant = true,
}: ResourcesCardPanelProps) {
  return (
    <ResourcesCard>
      <ResourcesContent>
        <ResourcesHeading headingLevel={3}>Resources</ResourcesHeading>
        <CompactCardBody>
          <ResourcesRow>
            <ResourceButtonGroup>
              {resourceActions.map(({ label, Icon }) => (
                <IconButton
                  key={label}
                  color={ButtonColor.subtle}
                  icon={<Icon />}
                  iconPosition={ButtonIconPosition.left}
                  onClick={getResourceActionHandler(label)}
                  size={ButtonSize.small}
                  textTransform={ButtonTextTransform.none}
                >
                  {label}
                </IconButton>
              ))}
            </ResourceButtonGroup>
            {showStudentAssistant && (
              <IconButton
                aria-controls="student-assistant-chatbot"
                aria-expanded={isStudentAssistantOpen}
                color={ButtonColor.secondary}
                icon={<AutoAwesomeIcon />}
                iconPosition={ButtonIconPosition.left}
                onClick={onStudentAssistantClick}
                size={ButtonSize.small}
                textTransform={ButtonTextTransform.none}
              >
                Ask Student assistant
              </IconButton>
            )}
          </ResourcesRow>
        </CompactCardBody>
      </ResourcesContent>
    </ResourcesCard>
  );
}

interface QuestionFeedbackCardProps {
  questionNumber: number;
  showResourceActions?: boolean;
}

function IncorrectFeedbackCard({
  questionNumber,
  showResourceActions = true,
}: QuestionFeedbackCardProps) {
  return (
    <FeedbackCard aria-live="polite">
      <FeedbackContent>
        <FeedbackQuestionLabel noMargins visualStyle={TypographyVisualStyle.bodyXSmall}>
          Question {questionNumber} of {totalQuestionCount}
        </FeedbackQuestionLabel>

        <FeedbackBody>
          <FeedbackTitleRow>
            <CancelIcon color={magma.colors.danger500} size={20} />
            <FeedbackTitle noMargins visualStyle={TypographyVisualStyle.bodySmall}>
              Hmm, not quite.
            </FeedbackTitle>
          </FeedbackTitleRow>

          <FeedbackCopy noMargins visualStyle={TypographyVisualStyle.bodySmall}>
            Recall that an improper fraction occurs when the numerator is greater than or equal to
            the denominator.
          </FeedbackCopy>

          <FeedbackCopy noMargins visualStyle={TypographyVisualStyle.bodySmall}>
            To convert an improper fraction to a mixed number first divide the numerator by the
            denominator.
          </FeedbackCopy>

          <FeedbackCopy noMargins visualStyle={TypographyVisualStyle.bodySmall}>
            If there is no remainder, the improper fraction becomes a whole number. If there is a
            remainder, then a mixed number will result in the following form where the divisor of the
            mixed number will be the denominator from the original improper fraction.
          </FeedbackCopy>

          <MixedNumberExample aria-label="Mixed number form">
            <span>whole number</span>
            <ExampleFraction>
              <span>remainder</span>
              <ExampleFractionLine aria-hidden="true" />
              <span>divisor</span>
            </ExampleFraction>
          </MixedNumberExample>

          <FeedbackCitationTag
            color={TagColor.default}
            icon={<MenuBookIcon />}
            labelText="Chapter 2. Fractions plus 1"
            size={TagSize.small}
          >
            Chapter 2. Fractions +1
          </FeedbackCitationTag>
        </FeedbackBody>

        <FeedbackDivider />

        <FeedbackFooter>
          <FeedbackRating aria-label="Rate this response">
            <IconButton
              aria-label="Helpful response"
              color={ButtonColor.subtle}
              icon={<ThumbUpAltIcon />}
              size={ButtonSize.small}
              variant={ButtonVariant.link}
            />
            <IconButton
              aria-label="Not helpful response"
              color={ButtonColor.subtle}
              icon={<ThumbDownAltIcon />}
              size={ButtonSize.small}
              variant={ButtonVariant.link}
            />
          </FeedbackRating>

          <FeedbackActions $showResourceActions={showResourceActions}>
            {showResourceActions && (
              <ResourceButtonGroup>
                {resourceActions.map(({ label, Icon }) => (
                  <IconButton
                    key={label}
                    color={ButtonColor.subtle}
                    icon={<Icon />}
                    iconPosition={ButtonIconPosition.left}
                    onClick={getResourceActionHandler(label)}
                    size={ButtonSize.small}
                    textTransform={ButtonTextTransform.none}
                  >
                    {label}
                  </IconButton>
                ))}
              </ResourceButtonGroup>
            )}
            <IconButton
              color={ButtonColor.secondary}
              icon={<AutoAwesomeIcon />}
              iconPosition={ButtonIconPosition.left}
              size={ButtonSize.small}
              textTransform={ButtonTextTransform.none}
            >
              Ask Student assistant
            </IconButton>
          </FeedbackActions>
        </FeedbackFooter>
      </FeedbackContent>
    </FeedbackCard>
  );
}

function CorrectFeedbackCard({
  questionNumber,
  showResourceActions = true,
}: QuestionFeedbackCardProps) {
  return (
    <FeedbackCard aria-live="polite">
      <FeedbackContent>
        <FeedbackQuestionLabel noMargins visualStyle={TypographyVisualStyle.bodyXSmall}>
          Question {questionNumber} of {totalQuestionCount}
        </FeedbackQuestionLabel>

        <FeedbackBody>
          <FeedbackTitleRow>
            <CheckCircleIcon color={magma.colors.success500} size={20} />
            <FeedbackTitle noMargins visualStyle={TypographyVisualStyle.bodySmall}>
              Yes, That's right!
            </FeedbackTitle>
          </FeedbackTitleRow>

          <FeedbackCopy noMargins visualStyle={TypographyVisualStyle.bodySmall}>
            You correctly converted the improper fraction to a mixed number.
          </FeedbackCopy>

          <FeedbackCitationTag
            color={TagColor.default}
            icon={<MenuBookIcon />}
            labelText="Chapter 2. Fractions plus 1"
            size={TagSize.small}
          >
            Chapter 2. Fractions +1
          </FeedbackCitationTag>
        </FeedbackBody>

        <FeedbackDivider />

        <FeedbackFooter>
          <FeedbackRating aria-label="Rate this response">
            <IconButton
              aria-label="Helpful response"
              color={ButtonColor.subtle}
              icon={<ThumbUpAltIcon />}
              size={ButtonSize.small}
              variant={ButtonVariant.link}
            />
            <IconButton
              aria-label="Not helpful response"
              color={ButtonColor.subtle}
              icon={<ThumbDownAltIcon />}
              size={ButtonSize.small}
              variant={ButtonVariant.link}
            />
          </FeedbackRating>

          <FeedbackActions $showResourceActions={showResourceActions}>
            {showResourceActions && (
              <ResourceButtonGroup>
                {resourceActions.map(({ label, Icon }) => (
                  <IconButton
                    key={label}
                    color={ButtonColor.subtle}
                    icon={<Icon />}
                    iconPosition={ButtonIconPosition.left}
                    onClick={getResourceActionHandler(label)}
                    size={ButtonSize.small}
                    textTransform={ButtonTextTransform.none}
                  >
                    {label}
                  </IconButton>
                ))}
              </ResourceButtonGroup>
            )}
            <IconButton
              color={ButtonColor.secondary}
              icon={<AutoAwesomeIcon />}
              iconPosition={ButtonIconPosition.left}
              size={ButtonSize.small}
              textTransform={ButtonTextTransform.none}
            >
              Ask Student assistant
            </IconButton>
          </FeedbackActions>
        </FeedbackFooter>
      </FeedbackContent>
    </FeedbackCard>
  );
}

function ReadItPage() {
  return (
    <ReaderFrame aria-label="Chapter 2 Fractions reader">
      <ReaderNavigation aria-label="Reader navigation">
        <ReaderNavButton aria-label="Expand navigation" title="Expand navigation">
          <ChevronRightIcon color={magma.colors.tertiary500} size={20} />
          <ChevronRightIcon color={magma.colors.tertiary500} size={20} />
        </ReaderNavButton>
        <ReaderNavButton aria-label="Sign out" title="Sign out">
          <LogoutIcon color={magma.colors.tertiary500} size={20} />
        </ReaderNavButton>
      </ReaderNavigation>

      <ReaderApp>
        <ReaderHeader>
          <BrandLockup>
            <LogoImage alt="Cengage MindTap" src={mindTapLogo} />
          </BrandLockup>
          <TopActions>
            <SearchCue>
              <SearchIcon color={magma.colors.success500} size={18} />
              <span>Search this course</span>
            </SearchCue>
            <IconButton
              aria-label="Help"
              color={ButtonColor.subtle}
              icon={<HelpIcon />}
              shape={ButtonShape.round}
              size={ButtonSize.small}
            />
          </TopActions>
        </ReaderHeader>

        <ReaderChapterBar>
          <ReaderChapterTitle noMargins visualStyle={TypographyVisualStyle.bodyMedium}>
            Chapter 2: Fractions
          </ReaderChapterTitle>
          <IconButton
            aria-label="Close reader"
            color={ButtonColor.subtle}
            icon={<CloseIcon />}
            size={ButtonSize.small}
            variant={ButtonVariant.link}
          />
        </ReaderChapterBar>

        <ReaderToolbar aria-label="Reader tools">
          <IconButton
            aria-label="Table of contents"
            color={ButtonColor.subtle}
            icon={<ListIcon />}
            size={ButtonSize.small}
            variant={ButtonVariant.link}
          />
          <ReaderToolbarActions>
            <IconButton
              aria-label="Read aloud"
              color={ButtonColor.subtle}
              icon={<VolumeUpIcon />}
              size={ButtonSize.small}
              variant={ButtonVariant.link}
            />
            <IconButton
              aria-label="Translate"
              color={ButtonColor.subtle}
              icon={<TranslateIcon />}
              size={ButtonSize.small}
              variant={ButtonVariant.link}
            />
            <IconButton
              aria-label="Text size"
              color={ButtonColor.subtle}
              icon={<FormatSizeIcon />}
              size={ButtonSize.small}
              variant={ButtonVariant.link}
            />
            <IconButton
              aria-label="Bookmark"
              color={ButtonColor.subtle}
              icon={<MenuBookIcon />}
              size={ButtonSize.small}
              variant={ButtonVariant.link}
            />
            <IconButton
              aria-label="Print"
              color={ButtonColor.subtle}
              icon={<PrintIcon />}
              size={ButtonSize.small}
              variant={ButtonVariant.link}
            />
            <IconButton
              aria-label="Reader help"
              color={ButtonColor.subtle}
              icon={<HelpIcon />}
              size={ButtonSize.small}
              variant={ButtonVariant.link}
            />
          </ReaderToolbarActions>
        </ReaderToolbar>

        <ReaderBody>
          <ReaderPageTurn aria-label="Previous reader page">
            <ChevronLeftIcon color={magma.colors.neutral700} size={44} />
          </ReaderPageTurn>

          <ReaderSection>
            <ReaderTitleRow>
              <ReaderSectionLabel noMargins>Section I</ReaderSectionLabel>
              <ReaderHeading level={1} visualStyle={TypographyVisualStyle.headingMedium}>
                Understanding and Working with Fractions
              </ReaderHeading>
            </ReaderTitleRow>
            <ReaderArticle>
              <p>
                <ReaderLeadText>Fractions</ReaderLeadText> are a mathematical way of expressing a
                part of a whole thing. The word fraction comes from a Latin word meaning
                &ldquo;break.&rdquo; Fractions result from breaking a unit into a number of equal
                parts. This concept is used quite commonly in business. We may look at sales for the
                year or reduce prices by for a sale. A new production machine in your company may be
                times faster than the old one, or you might want to cut yards of fabric from a roll
                of material.
              </p>
              <p>
                Just like whole numbers, fractions can be added, subtracted, multiplied, divided,
                and even combined with whole numbers. This chapter introduces you to the various
                types of fractions and shows you how they are used in the business world.
              </p>
            </ReaderArticle>
          </ReaderSection>

          <ReaderPageTurn aria-label="Next reader page">
            <ChevronRightIcon color={magma.colors.neutral700} size={44} />
          </ReaderPageTurn>
        </ReaderBody>

        <ReaderProgressFooter aria-label="Reader progress">
          <ReaderProgressTrack>
            <ReaderProgressFill />
            <ReaderProgressDot />
          </ReaderProgressTrack>
        </ReaderProgressFooter>
      </ReaderApp>

      <ReaderToolRail aria-label="Course tools">
        {toolRailItems.map(({ label, Icon }) => (
          <ReaderRailButton key={label} aria-label={label} title={label}>
            <Icon size={32} />
          </ReaderRailButton>
        ))}
      </ReaderToolRail>
    </ReaderFrame>
  );
}

function WatchItPage() {
  return (
    <ResourceScreenshotFrame
      $backgroundColor={magma.colors.neutral900}
      aria-label="Watch it resource"
    >
      <ResourceScreenshotImage
        $maxWidth="1355px"
        alt="Watch it resource screenshot"
        src={watchItResourceImage}
      />
    </ResourceScreenshotFrame>
  );
}

function MasterItPage() {
  return (
    <ResourceScreenshotFrame
      $backgroundColor={magma.colors.neutral100}
      aria-label="Master it resource"
    >
      <ResourceScreenshotImage
        $maxWidth="1600px"
        alt="Master it resource screenshot"
        src={masterItResourceImage}
      />
    </ResourceScreenshotFrame>
  );
}

function isMasterItPage(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return new URLSearchParams(window.location.search).get('page') === masterItPageParam;
}

function isWatchItPage(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return new URLSearchParams(window.location.search).get('page') === watchItPageParam;
}

function isReadItPage(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return new URLSearchParams(window.location.search).get('page') === readItPageParam;
}

function isActivityOverviewPage(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return new URLSearchParams(window.location.search).get('page') === activityOverviewPageParam;
}

function isQuestionPage(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const questionNumber = Number(
    new URLSearchParams(window.location.search).get(questionPageParam)
  );

  return implementedQuestionNumbers.includes(questionNumber);
}

function getActiveQuestionNumber(): number {
  if (typeof window === 'undefined') {
    return defaultQuestionNumber;
  }

  const questionNumber = Number(
    new URLSearchParams(window.location.search).get(questionPageParam)
  );

  return implementedQuestionNumbers.includes(questionNumber) ? questionNumber : defaultQuestionNumber;
}

function getQuestionProgressPercentage(questionNumber: number): number {
  return (questionNumber / totalQuestionCount) * 100;
}

function openReadItPage(): void {
  if (typeof window === 'undefined') {
    return;
  }

  const readItUrl = new URL(window.location.href);
  readItUrl.searchParams.set('page', readItPageParam);
  readItUrl.searchParams.delete(questionPageParam);
  window.open(readItUrl.toString(), '_blank', 'noopener,noreferrer');
}

function openWatchItPage(): void {
  if (typeof window === 'undefined') {
    return;
  }

  const watchItUrl = new URL(window.location.href);
  watchItUrl.searchParams.set('page', watchItPageParam);
  watchItUrl.searchParams.delete(questionPageParam);
  window.open(watchItUrl.toString(), '_blank', 'noopener,noreferrer');
}

function openMasterItPage(): void {
  if (typeof window === 'undefined') {
    return;
  }

  const masterItUrl = new URL(window.location.href);
  masterItUrl.searchParams.set('page', masterItPageParam);
  masterItUrl.searchParams.delete(questionPageParam);
  window.open(masterItUrl.toString(), '_blank', 'noopener,noreferrer');
}

function getResourceActionHandler(label: string): (() => void) | undefined {
  if (label === 'Read it') {
    return openReadItPage;
  }

  if (label === 'Watch it') {
    return openWatchItPage;
  }

  if (label === 'Master it') {
    return openMasterItPage;
  }

  return undefined;
}

function navigateToActivityOverview(): void {
  if (typeof window === 'undefined') {
    return;
  }

  const overviewUrl = new URL(window.location.href);
  overviewUrl.searchParams.delete('page');
  overviewUrl.searchParams.delete(questionPageParam);
  window.location.assign(overviewUrl.toString());
}

function navigateToQuestionPage(): void {
  navigateToQuestionNumber(firstQuestionNumber);
}

function navigateToQuestionNumber(questionNumber: number): void {
  if (typeof window === 'undefined') {
    return;
  }

  const questionUrl = new URL(window.location.href);
  questionUrl.searchParams.delete('page');
  questionUrl.searchParams.set(questionPageParam, String(questionNumber));

  window.location.assign(questionUrl.toString());
}

interface ResourceScreenshotFrameProps {
  $backgroundColor: string;
}

interface ResourceScreenshotImageProps {
  $maxWidth: string;
}

const ResourceScreenshotFrame = styled.main<ResourceScreenshotFrameProps>`
  display: flex;
  min-height: 100vh;
  align-items: flex-start;
  justify-content: center;
  overflow: auto;
  background: ${({ $backgroundColor }) => $backgroundColor};
`;

const ResourceScreenshotImage = styled.img<ResourceScreenshotImageProps>`
  display: block;
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth};
  height: auto;
`;

const ReaderFrame = styled.main`
  display: grid;
  min-height: 100vh;
  grid-template-columns: ${readerNavigationWidth} minmax(0, 1fr) ${readerToolRailWidth};
  overflow: hidden;
  background: ${magma.colors.neutral100};
  color: ${magma.colors.neutral700};
  font-family: ${magma.bodyFont};

  @media (max-width: ${magma.breakpoints.medium}px) {
    grid-template-columns: minmax(0, 1fr);
    overflow: auto;
  }
`;

const ReaderNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${magma.colors.primary700};

  @media (max-width: ${magma.breakpoints.medium}px) {
    display: none;
  }
`;

const ReaderNavButton = styled.button`
  display: inline-flex;
  width: 100%;
  min-height: ${readerNavigationWidth};
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-bottom: 1px solid ${magma.colors.primary400};
  background: ${magma.colors.primary600};
  color: ${magma.colors.tertiary500};
  cursor: pointer;

  svg + svg {
    margin-left: -${magma.spaceScale.spacing04};
  }
`;

const ReaderApp = styled.div`
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
`;

const ReaderHeader = styled.header`
  display: flex;
  min-height: 43px;
  align-items: center;
  justify-content: space-between;
  gap: ${magma.spaceScale.spacing04};
  padding: 0 ${magma.spaceScale.spacing03};
  border-bottom: 1px solid ${magma.colors.border};
  background: ${magma.colors.neutral100};

  @media (max-width: ${magma.breakpoints.medium}px) {
    align-items: flex-start;
    flex-direction: column;
    padding: ${magma.spaceScale.spacing03};
  }
`;

const ReaderChapterBar = styled.div`
  display: flex;
  min-height: ${magma.spaceScale.spacing08};
  align-items: center;
  justify-content: space-between;
  padding: 0 ${magma.spaceScale.spacing05};
  border-bottom: 1px solid ${magma.colors.border};
  background: ${magma.colors.neutral200};
`;

const ReaderChapterTitle = styled(Paragraph)`
  color: ${magma.colors.neutral700};
`;

const ReaderToolbar = styled.div`
  display: flex;
  min-height: 42px;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${magma.spaceScale.spacing05};
  border-bottom: 1px solid ${magma.colors.border};
  background: ${magma.colors.neutral100};
`;

const ReaderToolbarActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${magma.spaceScale.spacing02};
`;

const ReaderBody = styled.section`
  display: grid;
  flex: 1 1 auto;
  grid-template-columns: 70px minmax(0, 1fr) 70px;
  align-items: center;
  gap: ${magma.spaceScale.spacing14};
  min-height: 0;
  background: ${magma.colors.neutral100};

  @media (max-width: ${magma.breakpoints.large}px) {
    gap: ${magma.spaceScale.spacing06};
  }

  @media (max-width: ${magma.breakpoints.medium}px) {
    grid-template-columns: minmax(0, 1fr);
    padding: ${magma.spaceScale.spacing06};
  }
`;

const ReaderPageTurn = styled.button`
  display: inline-grid;
  width: 70px;
  height: 70px;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 0 ${magma.borderRadius} ${magma.borderRadius} 0;
  background: ${magma.colors.neutral200};
  cursor: pointer;

  &:last-of-type {
    border-radius: ${magma.borderRadius} 0 0 ${magma.borderRadius};
  }

  @media (max-width: ${magma.breakpoints.medium}px) {
    display: none;
  }
`;

const ReaderSection = styled.article`
  width: min(100%, 800px);
  align-self: start;
  justify-self: center;
  padding: ${magma.spaceScale.spacing08} ${magma.spaceScale.spacing03};
`;

const ReaderTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${magma.spaceScale.spacing05};
  margin-bottom: ${magma.spaceScale.spacing05};

  @media (max-width: ${magma.breakpoints.medium}px) {
    align-items: flex-start;
    flex-direction: column;
    gap: ${magma.spaceScale.spacing02};
  }
`;

const ReaderSectionLabel = styled(Paragraph)`
  && {
    color: ${magma.colors.neutral500};
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: ${magma.typeScale.size06.lineHeight};
    white-space: nowrap;
  }
`;

const ReaderHeading = styled(Heading)`
  && {
    margin: 0;
    color: ${magma.colors.primary600};
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: ${magma.typeScale.size06.lineHeight};
  }
`;

const ReaderArticle = styled.div`
  color: ${magma.colors.neutral700};
  font-family: ${magma.bodyNarrativeFont};
  font-size: ${magma.typeScale.size03.fontSize};
  line-height: ${magma.typeScale.size03.lineHeight};

  p {
    margin: 0 0 ${magma.spaceScale.spacing04};
  }
`;

const ReaderLeadText = styled.span`
  color: ${magma.colors.primary500};
`;

const ReaderProgressFooter = styled.footer`
  padding: ${magma.spaceScale.spacing03};
  border-top: 1px solid ${magma.colors.border};
  background: ${magma.colors.neutral100};
`;

const ReaderProgressTrack = styled.div`
  display: flex;
  height: 5px;
  align-items: center;
  overflow: hidden;
  border-radius: 9999px;
  background: ${magma.colors.neutral200};
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.35);
`;

const ReaderProgressFill = styled.span`
  width: 79px;
  height: 5px;
  border-radius: 9999px 0 0 9999px;
  background: ${magma.colors.info600};
`;

const ReaderProgressDot = styled.span`
  width: ${magma.spaceScale.spacing03};
  height: ${magma.spaceScale.spacing03};
  flex: 0 0 auto;
  border-radius: 50%;
  background: ${magma.colors.info600};
`;

const ReaderToolRail = styled.aside`
  display: flex;
  width: ${readerToolRailWidth};
  flex-direction: column;
  align-items: center;
  gap: ${magma.spaceScale.spacing04};
  padding: ${magma.spaceScale.spacing05} ${magma.spaceScale.spacing02};
  background: ${magma.colors.neutral600};

  @media (max-width: ${magma.breakpoints.medium}px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ReaderRailButton = styled.button`
  display: inline-grid;
  width: ${magma.spaceScale.spacing09};
  height: ${magma.spaceScale.spacing09};
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: ${magma.colors.tertiary500};
`;

const AssistantPanel = styled.aside`
  position: fixed;
  z-index: 4;
  right: calc(${magma.spaceScale.spacing09} + ${magma.spaceScale.spacing06});
  bottom: ${magma.spaceScale.spacing06};
  display: flex;
  width: min(
    calc(100vw - ${magma.spaceScale.spacing08}),
    calc(
      ${magma.spaceScale.spacing14} + ${magma.spaceScale.spacing14} +
        ${magma.spaceScale.spacing14} + ${magma.spaceScale.spacing03} +
        ${magma.spaceScale.spacing02}
    )
  );
  height: min(
    calc(
      ${magma.spaceScale.spacing14} + ${magma.spaceScale.spacing14} +
        ${magma.spaceScale.spacing14} + ${magma.spaceScale.spacing14} +
        ${magma.spaceScale.spacing06} - ${magma.spaceScale.spacing03}
    ),
    calc(
      100vh - (${magma.spaceScale.spacing14} + ${magma.spaceScale.spacing14} +
            ${magma.spaceScale.spacing06} + ${magma.spaceScale.spacing04})
    )
  );
  min-height: calc(${magma.spaceScale.spacing14} + ${magma.spaceScale.spacing14});
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${magma.colors.neutral300};
  border-radius: ${magma.borderRadius};
  background: ${magma.colors.neutral100};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
  color: ${magma.colors.neutral700};

  @media (max-width: ${magma.breakpoints.medium}px) {
    top: ${magma.spaceScale.spacing04};
    right: ${magma.spaceScale.spacing04};
    bottom: ${magma.spaceScale.spacing04};
    left: ${magma.spaceScale.spacing04};
    width: auto;
    height: auto;
  }
`;

const AssistantHeader = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: ${magma.spaceScale.spacing04};
  padding: ${magma.spaceScale.spacing04} ${magma.spaceScale.spacing05};
  background: linear-gradient(
    180deg,
    ${magma.colors.neutral100} 64%,
    rgba(255, 255, 255, 0)
  );
`;

const AssistantRole = styled.div`
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: ${magma.spaceScale.spacing03};
  padding: ${magma.spaceScale.spacing02} ${magma.spaceScale.spacing03};
`;

const AssistantTitle = styled.span`
  overflow: hidden;
  background: linear-gradient(270deg, ${magma.colors.success500}, ${magma.colors.primary500});
  background-clip: text;
  color: ${magma.colors.primary500};
  font-size: ${magma.typeScale.size04.fontSize};
  font-weight: 600;
  letter-spacing: 0;
  line-height: ${magma.typeScale.size04.lineHeight};
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AssistantHeaderActions = styled.div`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: ${magma.spaceScale.spacing02};
`;

const AssistantIconButton = styled(IconButton)`
  && {
    width: ${magma.spaceScale.spacing09};
    min-width: ${magma.spaceScale.spacing09};
    height: ${magma.spaceScale.spacing09};
    min-height: ${magma.spaceScale.spacing09};
    padding: 0;
    border: 0;
    border-radius: ${magma.borderRadius};
    background: transparent;
    box-shadow: none;
    color: ${magma.colors.neutral700};
  }

  &&:hover,
  &&:focus {
    background: ${magma.colors.neutral200};
    color: ${magma.colors.neutral700};
  }

  span {
    padding: 0;
  }
`;

const AssistantMessages = styled.div`
  display: flex;
  min-height: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: ${magma.spaceScale.spacing05};
  overflow-y: auto;
  padding: ${magma.spaceScale.spacing05};
`;

const AssistantMessageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${magma.spaceScale.spacing03};
  padding: ${magma.spaceScale.spacing03};
`;

const AssistantMessageCopy = styled.p`
  margin: 0;
  color: ${magma.colors.neutral700};
  font-size: ${magma.typeScale.size03.fontSize};
  font-weight: 400;
  letter-spacing: 0;
  line-height: ${magma.typeScale.size03.lineHeight};
`;

const AssistantRichMessageCopy = styled.div`
  color: ${magma.colors.neutral700};
  font-size: ${magma.typeScale.size03.fontSize};
  font-weight: 400;
  letter-spacing: 0;
  line-height: ${magma.typeScale.size03.lineHeight};

  p {
    margin: 0 0 ${magma.spaceScale.spacing03};
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const AssistantReactions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${magma.spaceScale.spacing02};
`;

const AssistantReactionButton = styled(AssistantIconButton)`
  && {
    width: calc(${magma.spaceScale.spacing07} + ${magma.spaceScale.spacing02});
    min-width: calc(${magma.spaceScale.spacing07} + ${magma.spaceScale.spacing02});
    height: calc(${magma.spaceScale.spacing07} + ${magma.spaceScale.spacing02});
    min-height: calc(${magma.spaceScale.spacing07} + ${magma.spaceScale.spacing02});
  }
`;

const AssistantUserMessage = styled.p`
  align-self: flex-end;
  max-width: 76%;
  margin: 0;
  padding: ${magma.spaceScale.spacing03};
  border-radius: ${magma.borderRadius};
  background: ${magma.colors.primary100};
  color: ${magma.colors.primary500};
  font-size: ${magma.typeScale.size03.fontSize};
  font-weight: 400;
  letter-spacing: 0;
  line-height: ${magma.typeScale.size03.lineHeight};
`;

const AssistantFormulaBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: ${magma.spaceScale.spacing04};
  padding: ${magma.spaceScale.spacing04} ${magma.spaceScale.spacing05};
  border-radius: ${magma.borderRadius};
  background: ${magma.colors.neutral200};
`;

const AssistantFormulaFraction = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const AssistantFormulaLabel = styled.span`
  color: ${magma.colors.neutral700};
  font-size: ${magma.typeScale.size02.fontSize};
  font-weight: 400;
  letter-spacing: 0;
  line-height: ${magma.typeScale.size02.lineHeight};
  white-space: nowrap;
`;

const AssistantFormulaLine = styled.span`
  width: calc(${magma.spaceScale.spacing10} + ${magma.spaceScale.spacing03});
  height: 1px;
  background: ${magma.colors.neutral700};
`;

const AssistantComposer = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: ${magma.spaceScale.spacing03};
  margin: 0 ${magma.spaceScale.spacing05} ${magma.spaceScale.spacing05};
  padding: ${magma.spaceScale.spacing04};
  border: 1px solid ${magma.colors.neutral300};
  border-radius: ${magma.borderRadius};
  background: ${magma.colors.neutral100};
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.18);
`;

const AssistantComposerLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`;

const AssistantComposerInput = styled.textarea`
  min-height: ${magma.spaceScale.spacing07};
  resize: none;
  border: 0;
  outline: none;
  color: ${magma.colors.neutral700};
  font-family: ${magma.bodyFont};
  font-size: ${magma.typeScale.size02.fontSize};
  line-height: ${magma.typeScale.size02.lineHeight};

  &::placeholder {
    color: ${magma.colors.neutral500};
    opacity: 1;
  }
`;

const AssistantComposerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${magma.spaceScale.spacing03};
`;

const AssistantComposerTools = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${magma.spaceScale.spacing02};
`;

interface AssistantSendButtonProps {
  $isActive: boolean;
}

const AssistantSendButton = styled(AssistantIconButton)<AssistantSendButtonProps>`
  && {
    background: ${({ $isActive }) =>
      $isActive ? magma.colors.primary500 : magma.colors.neutral300};
    color: ${({ $isActive }) =>
      $isActive ? magma.colors.neutral100 : magma.colors.neutral500};
    opacity: 1;
  }

  &&:hover,
  &&:focus {
    background: ${({ $isActive }) =>
      $isActive ? magma.colors.primary600 : magma.colors.neutral300};
    color: ${({ $isActive }) =>
      $isActive ? magma.colors.neutral100 : magma.colors.neutral500};
  }
`;

const TeacherPanel = styled.aside`
  display: flex;
  width: 100%;
  min-width: 0;
  min-height: 100%;
  align-self: stretch;
  flex-direction: column;
  overflow: hidden;
  border-left: 1px solid ${magma.colors.neutral300};
  background: ${magma.colors.neutral100};
  color: ${magma.colors.neutral700};

  @media (max-width: ${magma.breakpoints.medium}px) {
    min-height: calc(${magma.spaceScale.spacing14} * 2);
    border-top: 1px solid ${magma.colors.neutral300};
    border-left: 0;
  }
`;

const TeacherPanelHeader = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${magma.spaceScale.spacing05};
  padding: ${magma.spaceScale.spacing05};
  border-bottom: 1px solid ${magma.colors.neutral300};
  background: ${magma.colors.neutral100};
`;

const TeacherPanelHeadingGroup = styled.div`
  min-width: 0;
  flex: 1 1 auto;
  color: ${magma.colors.neutral700};
`;

const TeacherPanelTitle = styled.h2`
  margin: 0;
  color: ${magma.colors.neutral700};
  font-size: ${magma.typeScale.size04.fontSize};
  font-weight: 600;
  letter-spacing: 0;
  line-height: ${magma.typeScale.size04.lineHeight};
`;

const TeacherPanelSubtitle = styled.p`
  margin: 0;
  color: ${magma.colors.neutral700};
  font-size: ${magma.typeScale.size02.fontSize};
  font-weight: 400;
  letter-spacing: ${magma.typeScale.size02.letterSpacing};
  line-height: ${magma.typeScale.size02.lineHeight};
`;

const TeacherPanelHeaderActions = styled.div`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: ${magma.spaceScale.spacing03};
`;

const TeacherPanelIconButton = styled(IconButton)`
  && {
    width: ${magma.spaceScale.spacing07};
    min-width: ${magma.spaceScale.spacing07};
    height: ${magma.spaceScale.spacing07};
    min-height: ${magma.spaceScale.spacing07};
    padding: 0;
    border: 1px solid ${magma.colors.neutral300};
    border-radius: ${magma.borderRadius};
    background: ${magma.colors.neutral100};
    box-shadow: none;
    color: ${magma.colors.neutral700};
  }

  &&:hover,
  &&:focus {
    background: ${magma.colors.neutral200};
    color: ${magma.colors.neutral700};
  }

  span {
    padding: 0;
  }
`;

const TeacherPanelBody = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 0;
  overflow-y: auto;
  padding: ${magma.spaceScale.spacing06} ${magma.spaceScale.spacing05};
  background: ${magma.colors.neutral100};
`;

const TeacherPanelPrompt = styled.p`
  margin: 0;
  color: ${magma.colors.neutral700};
  font-size: ${magma.typeScale.size02.fontSize};
  font-weight: 400;
  letter-spacing: ${magma.typeScale.size02.letterSpacing};
  line-height: ${magma.typeScale.size02.lineHeight};
`;

const TeacherMessageGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${magma.spaceScale.spacing05};
`;

const TeacherOutgoingMessageBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  gap: ${magma.spaceScale.spacing03};
  padding: ${magma.spaceScale.spacing03} 0 ${magma.spaceScale.spacing03}
    ${magma.spaceScale.spacing08};
`;

const TeacherIncomingMessageBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: ${magma.spaceScale.spacing03};
  padding: ${magma.spaceScale.spacing03} ${magma.spaceScale.spacing08}
    ${magma.spaceScale.spacing03} 0;
`;

const TeacherOutgoingBubble = styled.p`
  width: 100%;
  max-width: ${teacherPanelWidth};
  margin: 0;
  padding: ${magma.spaceScale.spacing03} ${magma.spaceScale.spacing04};
  border-radius: ${magma.borderRadius};
  background: ${magma.colors.neutral200};
  color: ${magma.colors.neutral700};
  font-size: ${magma.typeScale.size03.fontSize};
  font-weight: 400;
  letter-spacing: 0;
  line-height: ${magma.typeScale.size03.lineHeight};
  word-break: break-word;
`;

const TeacherIncomingCopy = styled.p`
  width: 100%;
  max-width: ${teacherPanelWidth};
  margin: 0;
  color: ${magma.colors.neutral700};
  font-size: ${magma.typeScale.size03.fontSize};
  font-weight: 400;
  letter-spacing: 0;
  line-height: ${magma.typeScale.size03.lineHeight};
  word-break: break-word;
`;

interface TeacherMessageMetadataProps {
  $align: 'start' | 'end';
}

const TeacherMessageMetadata = styled.div<TeacherMessageMetadataProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${({ $align }) => ($align === 'end' ? 'flex-end' : 'flex-start')};
  gap: ${magma.spaceScale.spacing03};
`;

const TeacherMessageSender = styled.span`
  color: ${magma.colors.neutral700};
  font-size: ${magma.typeScale.size01.fontSize};
  font-weight: 400;
  letter-spacing: 0.32px;
  line-height: ${magma.typeScale.size01.lineHeight};
  white-space: nowrap;
`;

const TeacherMessageTime = styled.span`
  color: ${magma.colors.neutral500};
  font-size: ${magma.typeScale.size01.fontSize};
  font-weight: 400;
  letter-spacing: 0.32px;
  line-height: ${magma.typeScale.size01.lineHeight};
  white-space: nowrap;
`;

const TeacherMetadataDot = styled.span`
  width: ${magma.spaceScale.spacing02};
  height: ${magma.spaceScale.spacing02};
  flex: 0 0 auto;
  border-radius: 50%;
  background: ${magma.colors.neutral500};
`;

const TeacherPanelComposer = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  padding: ${magma.spaceScale.spacing05};
  backdrop-filter: blur(2.6px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.75) 100%);
`;

const TeacherComposerBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 768px;
  flex-direction: column;
  gap: ${magma.spaceScale.spacing03};
  padding: ${magma.spaceScale.spacing04} ${magma.spaceScale.spacing04}
    ${magma.spaceScale.spacing04} ${magma.spaceScale.spacing05};
  border: 1px solid ${magma.colors.neutral300};
  border-radius: ${magma.borderRadius};
  background: ${magma.colors.neutral100};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
`;

const TeacherComposerInput = styled.input`
  width: 100%;
  min-height: ${magma.spaceScale.spacing09};
  padding: 0 ${magma.spaceScale.spacing01};
  border: 0;
  outline: none;
  color: ${magma.colors.neutral700};
  font-family: ${magma.bodyFont};
  font-size: ${magma.typeScale.size03.fontSize};
  font-weight: 400;
  letter-spacing: 0;
  line-height: ${magma.typeScale.size03.lineHeight};

  &::placeholder {
    color: ${magma.colors.neutral500};
    opacity: 1;
  }
`;

const LearningNav = styled.nav`
  display: flex;
  grid-column: 1;
  grid-row: 1 / span 2;
  flex-direction: column;
  align-items: center;
  width: ${learningNavigationWidth};
  min-height: 100%;
  background: ${magma.colors.primary700};
  z-index: 2;

  @media (max-width: ${magma.breakpoints.medium}px) {
    display: none;
  }
`;

const LearningNavExpandButton = styled(IconButton)`
  && {
    width: 100%;
    min-width: 100%;
    height: ${magma.spaceScale.spacing12};
    min-height: ${magma.spaceScale.spacing12};
    padding: 0;
    border: 0;
    border-bottom: 1px solid ${magma.colors.primary400};
    border-left: 1px solid ${magma.colors.primary400};
    border-radius: 0;
    background: ${magma.colors.primary600};
    box-shadow: none;
    color: ${magma.colors.tertiary500};
  }

  &&:hover,
  &&:focus {
    background: ${magma.colors.primary600};
    color: ${magma.colors.tertiary500};
  }

  span {
    padding: 0;
  }
`;

const LearningNavSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-bottom: calc(${magma.spaceScale.spacing06} - ${magma.spaceScale.spacing02});
  border-bottom: 1px solid ${magma.colors.primary400};
`;

const LearningNavUtilitySection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: calc(${magma.spaceScale.spacing06} - ${magma.spaceScale.spacing02});
`;

const LearningNavItemButton = styled(IconButton)`
  && {
    width: 100%;
    min-width: 100%;
    height: calc(${magma.spaceScale.spacing09} + ${magma.spaceScale.spacing05});
    min-height: calc(${magma.spaceScale.spacing09} + ${magma.spaceScale.spacing05});
    padding: 0;
    border: 0;
    border-radius: 0;
    background: ${magma.colors.primary700};
    box-shadow: none;
    color: ${magma.colors.tertiary500};
  }

  &&:hover,
  &&:focus {
    background: ${magma.colors.primary600};
    color: ${magma.colors.tertiary500};
  }

  span {
    padding: 0;
  }

  svg {
    opacity: 0.75;
  }

  &:hover svg,
  &:focus svg {
    opacity: 1;
  }
`;

const LearningNavSignOutButton = styled(IconButton)`
  && {
    width: ${magma.spaceScale.spacing09};
    min-width: ${magma.spaceScale.spacing09};
    height: ${magma.spaceScale.spacing09};
    min-height: ${magma.spaceScale.spacing09};
    padding: 0;
    border: 1px solid ${magma.colors.primary400};
    border-radius: ${magma.borderRadius};
    background: ${magma.colors.primary700};
    box-shadow: none;
    color: ${magma.colors.tertiary500};
  }

  &&:hover,
  &&:focus {
    background: ${magma.colors.primary600};
    color: ${magma.colors.tertiary500};
  }

  span {
    padding: 0;
  }
`;

const MindTapFrame = styled.main`
  display: grid;
  position: relative;
  width: 100%;
  min-height: 100vh;
  grid-template-columns: ${learningNavigationWidth} minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  overflow: hidden;
  border: 1px solid ${magma.colors.border};
  border-radius: 0;
  background: ${magma.colors.neutral100};
  color: ${magma.colors.neutral700};
  font-family: ${magma.bodyFont};

  @media (max-width: ${magma.breakpoints.medium}px) {
    min-height: auto;
    grid-template-columns: minmax(0, 1fr);
  }
`;

const ProductHeader = styled.header`
  display: flex;
  grid-column: 2;
  min-height: calc(${magma.spaceScale.spacing09} + ${magma.spaceScale.spacing02});
  align-items: center;
  justify-content: space-between;
  gap: ${magma.spaceScale.spacing04};
  padding: 0 ${magma.spaceScale.spacing03};
  border-bottom: 1px solid ${magma.colors.border};
  background: ${magma.colors.neutral100};

  @media (max-width: ${magma.breakpoints.medium}px) {
    grid-column: 1;
    align-items: flex-start;
    flex-direction: column;
    padding: ${magma.spaceScale.spacing03};
  }
`;

const BrandLockup = styled.div`
  display: inline-flex;
  align-items: center;
  min-width: 0;
`;

const LogoImage = styled.img`
  display: block;
  width: 182px;
  max-width: 100%;
  height: auto;
`;

const TopActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${magma.spaceScale.spacing06};

  @media (max-width: ${magma.breakpoints.small}px) {
    flex-wrap: wrap;
    gap: ${magma.spaceScale.spacing03};
  }
`;

const SearchCue = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${magma.spaceScale.spacing02};
  color: ${magma.colors.neutral500};
  font-size: ${magma.typeScale.size02.fontSize};
  line-height: ${magma.typeScale.size02.lineHeight};
`;

const OverviewProductHeader = styled(ProductHeader)`
  min-height: calc(${magma.spaceScale.spacing09} + ${magma.spaceScale.spacing02});
`;

const OverviewTopActions = styled(TopActions)`
  align-self: stretch;
  gap: 0;
`;

const OverviewSearchCue = styled(SearchCue)`
  align-self: stretch;
  padding: 0 ${magma.spaceScale.spacing05};
  border-right: 1px solid ${magma.colors.border};
`;

const OverviewHelpButton = styled(IconButton)`
  && {
    width: ${magma.spaceScale.spacing10};
    min-width: ${magma.spaceScale.spacing10};
    height: 100%;
    min-height: 100%;
    padding: 0;
    border-radius: 0;
  }

  span {
    padding: 0;
  }
`;

const OverviewUserCue = styled.button`
  display: inline-flex;
  height: 100%;
  align-items: center;
  gap: ${magma.spaceScale.spacing02};
  padding: 0 ${magma.spaceScale.spacing04};
  border: 0;
  background: transparent;
  color: ${magma.colors.neutral500};
  font-family: ${magma.bodyFont};
  font-size: ${magma.typeScale.size03.fontSize};
  line-height: ${magma.typeScale.size03.lineHeight};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${magma.colors.neutral700};
  }
`;

const PageColumns = styled.div`
  display: grid;
  grid-column: 2;
  min-height: calc(
    100vh - (${magma.spaceScale.spacing09} + ${magma.spaceScale.spacing02})
  );
  grid-template-columns: minmax(0, 1fr) ${courseToolRailWidth};

  @media (max-width: ${magma.breakpoints.medium}px) {
    grid-column: 1;
    min-height: auto;
    grid-template-columns: minmax(0, 1fr);
  }
`;

const MainColumn = styled.div`
  min-width: 0;
  background: ${magma.colors.neutral100};
`;

const ActivityBar = styled.section`
  display: flex;
  height: calc(${magma.spaceScale.spacing08} + ${magma.spaceScale.spacing02});
  align-items: center;
  justify-content: flex-start;
  gap: ${magma.spaceScale.spacing03};
  background: ${magma.colors.primary600};
  color: ${magma.colors.neutral100};

  h2 {
    margin: 0;
    color: ${magma.colors.neutral100};
    font-size: ${magma.typeScale.size03.fontSize};
    line-height: ${magma.typeScale.size03.lineHeight};
  }

  @media (max-width: ${magma.breakpoints.medium}px) {
    height: auto;
    align-items: flex-start;
    flex-direction: column;
    padding: ${magma.spaceScale.spacing02} ${magma.spaceScale.spacing03};
  }
`;

const BackButton = styled(IconButton)`
  min-height: 30px;
  color: ${magma.colors.tertiary500};
`;

const ActivityDivider = styled.span`
  width: 1px;
  align-self: stretch;
  background: ${magma.colors.primary300};

  @media (max-width: ${magma.breakpoints.medium}px) {
    display: none;
  }
`;

const ActivityTitle = styled(Heading)`
  && {
    margin: 0;
    border: 0;
    color: ${magma.colors.neutral100};
    font-size: ${magma.typeScale.size03.fontSize};
    font-weight: 400;
    letter-spacing: 0;
    line-height: ${magma.typeScale.size03.lineHeight};
    text-transform: none;
  }
`;

const OverviewActivityTitle = styled(ActivityTitle)`
  && {
    font-weight: 500;
  }
`;

const DetailBar = styled.div`
  display: flex;
  height: calc(${magma.spaceScale.spacing09} + ${magma.spaceScale.spacing02});
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${magma.spaceScale.spacing05};
  border-bottom: 1px solid ${magma.colors.border};
`;

const ActivityDetailsButton = styled(IconButton)`
  && {
    height: calc(${magma.spaceScale.spacing07} + ${magma.spaceScale.spacing02});
    min-height: calc(${magma.spaceScale.spacing07} + ${magma.spaceScale.spacing02});
    padding: calc(${magma.spaceScale.spacing03} - ${magma.spaceScale.spacing01})
      ${magma.spaceScale.spacing03};
    border-radius: ${magma.borderRadius};
    color: ${magma.colors.primary500};
    font-size: ${magma.typeScale.size01.fontSize};
    font-weight: 500;
    letter-spacing: 0;
    line-height: ${magma.typeScale.size01.lineHeight};
  }

  &&:hover,
  &&:focus {
    color: ${magma.colors.primary600};
  }

  span {
    gap: ${magma.spaceScale.spacing02};
    padding: 0;
  }
`;

interface QuestionBodyLayoutProps {
  $hasTeacherPanel: boolean;
}

const QuestionBodyLayout = styled.div<QuestionBodyLayoutProps>`
  display: grid;
  min-height: calc(
    100vh - (${magma.spaceScale.spacing09} + ${magma.spaceScale.spacing02}) -
      (${magma.spaceScale.spacing08} + ${magma.spaceScale.spacing02}) -
      (${magma.spaceScale.spacing09} + ${magma.spaceScale.spacing02})
  );
  grid-template-columns: ${({ $hasTeacherPanel }) =>
    $hasTeacherPanel
      ? `minmax(0, 1fr) minmax(${teacherPanelMinWidth}, ${teacherPanelWidth})`
      : 'minmax(0, 1fr)'};

  @media (max-width: ${magma.breakpoints.medium}px) {
    min-height: auto;
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Workspace = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${magma.spaceScale.spacing05};
  max-width: ${magma.breakpoints.large}px;
  margin: 0 auto;
  padding: ${magma.spaceScale.spacing04} 0 ${magma.spaceScale.spacing10};

  &.has-feedback {
    max-width: ${magma.breakpoints.large}px;
  }

  @media (max-width: ${magma.breakpoints.large}px) {
    max-width: none;
    padding: ${magma.spaceScale.spacing04};
  }
`;

const QuestionTopActionRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-end;
  padding: 0 ${magma.spaceScale.spacing05};
`;

const AskTeacherButton = styled(IconButton)`
  && {
    min-height: calc(${magma.spaceScale.spacing07} - ${magma.spaceScale.spacing01});
    padding: ${magma.spaceScale.spacing02} ${magma.spaceScale.spacing03};
    border: 1px solid ${magma.colors.primary300};
    border-radius: ${magma.borderRadius};
    background: ${magma.colors.neutral100};
    box-shadow: none;
    color: ${magma.colors.primary500};
    font-size: ${magma.typeScale.size01.fontSize};
    font-weight: 500;
    letter-spacing: 0.32px;
    line-height: ${magma.typeScale.size01.lineHeight};
  }

  &&:hover,
  &&:focus {
    background: ${magma.colors.primary100};
    color: ${magma.colors.primary500};
  }

  span {
    gap: ${magma.spaceScale.spacing02};
    padding: 0;
  }
`;

const OverviewBody = styled.section`
  display: flex;
  min-height: calc(
    100vh - (${magma.spaceScale.spacing09} + ${magma.spaceScale.spacing02}) -
      (${magma.spaceScale.spacing08} + ${magma.spaceScale.spacing02})
  );
  justify-content: center;
  padding: ${magma.spaceScale.spacing10} ${magma.spaceScale.spacing06}
    ${magma.spaceScale.spacing12};

  @media (max-width: ${magma.breakpoints.medium}px) {
    min-height: auto;
    padding: ${magma.spaceScale.spacing08} ${magma.spaceScale.spacing04};
  }
`;

const OverviewContent = styled.div`
  display: flex;
  width: 100%;
  max-width: ${magma.breakpoints.large}px;
  flex-direction: column;
  align-items: center;
`;

const OverviewHeading = styled(Heading)`
  && {
    margin: 0 0 ${magma.spaceScale.spacing05};
    color: ${magma.colors.neutral700};
    font-size: ${magma.typeScale.size06.fontSize};
    font-weight: 600;
    letter-spacing: 0;
    line-height: ${magma.typeScale.size06.lineHeight};
    text-align: center;
  }
`;

const OverviewStatsCard = styled(Card)`
  &&& {
    display: flex;
    max-width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${magma.spaceScale.spacing05};
    margin-bottom: ${magma.spaceScale.spacing10};
    padding: ${magma.spaceScale.spacing05};
    border-color: ${magma.colors.neutral300};
    border-radius: ${magma.borderRadius};
    background: ${magma.colors.neutral100};
    box-shadow: none;
  }
`;

const OverviewStat = styled.div`
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: ${magma.spaceScale.spacing03};

  &:not(:last-child) {
    padding-right: ${magma.spaceScale.spacing05};
    border-right: 1px solid ${magma.colors.neutral300};
  }

  @media (max-width: ${magma.breakpoints.medium}px) {
    width: 100%;
    padding-right: 0;
    border-right: 0;
  }
`;

const OverviewStatText = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
`;

const OverviewStatLabel = styled(Paragraph)`
  && {
    color: ${magma.colors.neutral700};
    font-size: ${magma.typeScale.size01.fontSize};
    font-weight: 400;
    letter-spacing: 0;
    line-height: ${magma.typeScale.size01.lineHeight};
  }
`;

const OverviewStatValue = styled(Paragraph)`
  && {
    color: ${magma.colors.neutral700};
    font-size: ${magma.typeScale.size01.fontSize};
    font-weight: 600;
    letter-spacing: 0;
    line-height: ${magma.typeScale.size01.lineHeight};
    white-space: nowrap;
  }
`;

const OverviewTableWrap = styled.div`
  width: min(100%, calc(${magma.breakpoints.medium}px + ${magma.spaceScale.spacing03}));
  overflow-x: auto;
`;

const OverviewTable = styled(Table)`
  && {
    width: 100%;
    min-width: calc(${magma.breakpoints.medium}px + ${magma.spaceScale.spacing03});
    border-collapse: collapse;
    background: ${magma.colors.neutral100};
    color: ${magma.colors.neutral700};
    table-layout: fixed;
  }
`;

const OverviewHeaderCell = styled(TableHeaderCell)`
  &&& {
    height: calc(${magma.spaceScale.spacing09} + ${magma.spaceScale.spacing03});
    padding: 0 ${magma.spaceScale.spacing04};
    border-bottom: ${magma.spaceScale.spacing01} solid ${magma.colors.neutral300};
    border-radius: 0;
    background: ${magma.colors.neutral200};
    color: ${magma.colors.neutral700};
    font-size: ${magma.typeScale.size03.fontSize};
    font-weight: 700;
    letter-spacing: 0;
    line-height: ${magma.typeScale.size03.lineHeight};
    text-align: left;
    vertical-align: middle;
  }
`;

const OverviewCell = styled(TableCell)`
  && {
    height: calc(${magma.spaceScale.spacing09} + ${magma.spaceScale.spacing03});
    padding: 0 ${magma.spaceScale.spacing04};
    border-bottom: 1px solid ${magma.colors.neutral300};
    color: ${magma.colors.neutral700};
    font-size: ${magma.typeScale.size02.fontSize};
    font-weight: 400;
    letter-spacing: 0;
    line-height: ${magma.typeScale.size02.lineHeight};
    vertical-align: middle;
  }
`;

const OverviewStartButton = styled(Button)`
  && {
    width: 100%;
    min-width: 100%;
  }

  span {
    width: 100%;
    justify-content: center;
  }
`;

const QuestionArea = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: minmax(0, 1fr) 40px;
  gap: ${magma.spaceScale.spacing04};
  padding: 0 ${magma.spaceScale.spacing05};

  @media (max-width: ${magma.breakpoints.small}px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const QuestionPanel = styled.section`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: ${magma.spaceScale.spacing04};
`;

const ProgressHeader = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${magma.spaceScale.spacing03};
`;

const Separator = styled.span`
  width: 1px;
  height: ${magma.spaceScale.spacing05};
  background: ${magma.colors.border};
`;

const QuestionText = styled(Paragraph)`
  color: ${magma.colors.neutral700};
  line-height: 30px;
`;

const MathWork = styled.div`
  display: grid;
  width: min(100%, 260px);
  grid-template-columns: 80px 120px;
  row-gap: ${magma.spaceScale.spacing06};
  align-items: center;
  margin-top: ${magma.spaceScale.spacing04};
  margin-left: ${magma.spaceScale.spacing08};

  @media (max-width: ${magma.breakpoints.small}px) {
    margin-left: 0;
  }
`;

const ProblemFraction = styled.div`
  grid-column: 2;
  justify-self: center;
`;

const Fraction = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: ${magma.spaceScale.spacing02};
  color: ${magma.colors.neutral700};
  font-size: ${magma.typeScale.size03.fontSize};
  line-height: ${magma.typeScale.size03.lineHeight};
`;

const FractionLine = styled.span`
  display: block;
  width: 100%;
  min-width: ${magma.spaceScale.spacing05};
  height: 1px;
  background: ${magma.colors.neutral700};
`;

const AnswerFractionLine = styled(FractionLine)`
  width: ${answerDividerWidth};
  min-width: ${answerDividerWidth};
`;

const AnswerRow = styled.div`
  display: contents;
`;

interface AnswerInputContainerProps {
  $hasBottomPadding?: boolean;
  $isStacked?: boolean;
}

const AnswerInput = styled.div<AnswerInputContainerProps>`
  display: inline-flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  margin-bottom: ${({ $hasBottomPadding }) =>
    $hasBottomPadding ? magma.spaceScale.spacing03 : 0};
  margin-left: ${({ $isStacked }) => ($isStacked ? magma.spaceScale.spacing03 : 0)};
`;

interface AnswerInputControlProps {
  $feedbackState: AnswerFeedback;
}

function getAnswerFeedbackColor(feedbackState: AnswerFeedback): string {
  if (feedbackState === 'correct') {
    return magma.colors.success500;
  }

  if (feedbackState === 'incorrect') {
    return magma.colors.danger500;
  }

  return magma.colors.neutral500;
}

const AnswerInputControl = styled.div<AnswerInputControlProps>`
  position: relative;
  display: inline-flex;

  ${({ $feedbackState }) =>
    $feedbackState !== 'idle'
      ? `
    && [class*='InputWrapper'] {
      border-color: ${getAnswerFeedbackColor($feedbackState)};
      box-shadow: none;
    }

    && [class*='InputWrapper']:focus-within {
      border-color: ${getAnswerFeedbackColor($feedbackState)};
      box-shadow: none;
    }
  `
      : ''}

  && input {
    height: ${magma.spaceScale.spacing08};
    padding-right: ${({ $feedbackState }) =>
      $feedbackState !== 'idle' ? magma.spaceScale.spacing08 : magma.spaceScale.spacing02};
    padding-left: ${magma.spaceScale.spacing03};
    border-color: ${({ $feedbackState }) => getAnswerFeedbackColor($feedbackState)};
    box-shadow: none;
    text-align: ${({ $feedbackState }) =>
      $feedbackState !== 'idle' ? 'left' : 'center'};
  }

  && input:focus {
    border-color: ${({ $feedbackState }) =>
      $feedbackState !== 'idle' ? getAnswerFeedbackColor($feedbackState) : magma.colors.focus};
    box-shadow: none;
  }
`;

const AnswerStatusIcon = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${magma.spaceScale.spacing03};
  display: inline-flex;
  width: ${magma.spaceScale.spacing05};
  align-items: center;
  justify-content: center;
  line-height: 0;
  pointer-events: none;

  svg {
    display: block;
  }
`;

const CheckAnswerRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${magma.spaceScale.spacing02};
`;

const QuestionToolbar = styled.aside`
  display: flex;
  min-height: 232px;
  flex-direction: column;
  align-items: center;
  gap: ${magma.spaceScale.spacing02};
  padding: ${magma.spaceScale.spacing03} 0;
  background: ${magma.colors.neutral200};

  @media (max-width: ${magma.breakpoints.small}px) {
    min-height: auto;
    flex-direction: row;
    justify-content: center;
  }
`;

const ToolbarSpacer = styled.span`
  flex: 1 1 auto;

  @media (max-width: ${magma.breakpoints.small}px) {
    display: none;
  }
`;

const ResourcesCard = styled(Card)`
  width: 100%;
  border-color: ${magma.colors.border};
  box-shadow: none;
`;

const ResourcesContent = styled.div`
  padding: ${magma.spaceScale.spacing06};
`;

const ResourcesHeading = styled(CardHeading)`
  && {
    margin: 0;
    padding: 0 0 ${magma.spaceScale.spacing06};
    font-size: ${magma.typeScale.size02.fontSize};
    font-weight: 500;
    letter-spacing: ${magma.typeScale.size02.letterSpacing};
    line-height: ${magma.typeScale.size02.lineHeight};
  }
`;

const CompactCardBody = styled.div`
  padding: 0;
  font-family: ${magma.bodyFont};
`;

const ResourcesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${magma.spaceScale.spacing04};

  @media (max-width: ${magma.breakpoints.medium}px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const ResourceButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${magma.spaceScale.spacing02};
`;

const FeedbackCard = styled(Card)`
  width: 100%;
  border-color: ${magma.colors.border};
  box-shadow: none;
`;

const FeedbackContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${magma.spaceScale.spacing05};
  padding: ${magma.spaceScale.spacing06};
`;

const FeedbackQuestionLabel = styled(Paragraph)`
  color: ${magma.colors.neutral700};
`;

const FeedbackBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${magma.spaceScale.spacing05};
`;

const FeedbackTitleRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${magma.spaceScale.spacing03};
`;

const FeedbackTitle = styled(Paragraph)`
  && {
    color: ${magma.colors.neutral700};
    font-weight: 500;
  }
`;

const FeedbackCopy = styled(Paragraph)`
  color: ${magma.colors.neutral700};
`;

const FeedbackCitationTag = styled(Tag)`
  align-self: flex-start;
  width: 179px;
  max-width: 100%;
`;

const MixedNumberExample = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${magma.spaceScale.spacing04};
  width: 100%;
  padding: ${magma.spaceScale.spacing04} ${magma.spaceScale.spacing05};
  border-radius: ${magma.borderRadius};
  background: ${magma.colors.neutral200};
  color: ${magma.colors.neutral700};
  font-size: ${magma.typeScale.size02.fontSize};
  letter-spacing: ${magma.typeScale.size02.letterSpacing};
  line-height: ${magma.typeScale.size02.lineHeight};

  @media (max-width: ${magma.breakpoints.small}px) {
    flex-wrap: wrap;
  }
`;

const ExampleFraction = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const ExampleFractionLine = styled(FractionLine)`
  width: ${magma.spaceScale.spacing12};
  min-width: ${magma.spaceScale.spacing12};
  margin: ${magma.spaceScale.spacing01} 0;
  background: ${magma.colors.neutral500};
`;

const FeedbackDivider = styled.hr`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid ${magma.colors.border};
`;

const FeedbackFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${magma.spaceScale.spacing05};

  @media (max-width: ${magma.breakpoints.medium}px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const FeedbackRating = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${magma.spaceScale.spacing02};
`;

interface FeedbackActionsProps {
  $showResourceActions: boolean;
}

const FeedbackActions = styled.div<FeedbackActionsProps>`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: ${({ $showResourceActions }) =>
    $showResourceActions ? 'space-between' : 'flex-end'};
  gap: ${magma.spaceScale.spacing04};

  @media (max-width: ${magma.breakpoints.medium}px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const PaginationBar = styled.nav`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-end;
  gap: ${magma.spaceScale.spacing01};
  width: 100%;
  padding: 0 ${magma.spaceScale.spacing05};
  overflow-x: auto;
`;

const LrnoPreviousButton = styled(IconButton)`
  && {
    width: ${magma.spaceScale.spacing09};
    min-width: ${magma.spaceScale.spacing09};
    height: ${magma.spaceScale.spacing09};
    padding: 0;
    border: 1px solid ${magma.colors.primary300};
    border-radius: ${magma.borderRadius};
    background: ${magma.colors.neutral100};
    box-shadow: none;
    color: ${magma.colors.primary500};
  }

  &&:hover,
  &&:focus {
    background: ${magma.colors.primary100};
    color: ${magma.colors.primary500};
  }

  span {
    padding: 0;
  }
`;

const LrnoPageButton = styled(Button)`
  && {
    position: relative;
    width: ${magma.spaceScale.spacing09};
    min-width: ${magma.spaceScale.spacing09};
    height: ${magma.spaceScale.spacing09};
    padding: 0;
    border: 0;
    border-bottom: ${magma.spaceScale.spacing01} solid transparent;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    color: ${magma.colors.neutral700};
    font-size: ${magma.typeScale.size03.fontSize};
    font-weight: 500;
    letter-spacing: 0;
    line-height: ${magma.typeScale.size03.lineHeight};
    text-decoration: none;
  }

  &&:hover,
  &&:focus {
    background: ${magma.colors.primary100};
    color: ${magma.colors.neutral700};
    text-decoration: none;
  }

  span {
    padding: 0;
  }

  &.is-selected {
    background: ${magma.colors.primary100};
    border-bottom-color: ${magma.colors.primary500};
  }

  &.is-completed {
    border-bottom-color: ${magma.colors.neutral600};
  }

  &.is-selected::after {
    position: absolute;
    right: calc(50% - (${magma.spaceScale.spacing03} - ${magma.spaceScale.spacing01}) / 2);
    bottom: calc(-1 * (${magma.spaceScale.spacing03} - ${magma.spaceScale.spacing01}) / 2);
    width: calc(${magma.spaceScale.spacing03} - ${magma.spaceScale.spacing01});
    height: calc(${magma.spaceScale.spacing03} - ${magma.spaceScale.spacing01});
    transform: rotate(45deg);
    background: ${magma.colors.primary500};
    content: '';
  }
`;

const LrnoNextButton = styled(IconButton)`
  && {
    min-width: calc(${magma.spaceScale.spacing09} * 2 + ${magma.spaceScale.spacing01});
    height: ${magma.spaceScale.spacing09};
    padding: ${magma.spaceScale.spacing03};
    border: 0;
    border-radius: ${magma.borderRadius};
    background: ${magma.colors.primary500};
    box-shadow: none;
    color: ${magma.colors.neutral100};
    font-size: ${magma.typeScale.size03.fontSize};
    font-weight: 500;
    letter-spacing: 0;
    line-height: ${magma.typeScale.size03.lineHeight};
  }

  &&:hover,
  &&:focus {
    background: ${magma.colors.primary600};
    color: ${magma.colors.neutral100};
  }

  span {
    gap: ${magma.spaceScale.spacing03};
    padding: 0;
  }
`;

const ToolRail = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${magma.spaceScale.spacing04};
  padding: ${magma.spaceScale.spacing05} ${magma.spaceScale.spacing02};
  background: ${magma.colors.neutral600};

  @media (max-width: ${magma.breakpoints.medium}px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const RailButton = styled.button`
  display: inline-grid;
  width: ${magma.iconSizes.large}px;
  height: ${magma.iconSizes.large}px;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: ${magma.colors.tertiary500};
`;
