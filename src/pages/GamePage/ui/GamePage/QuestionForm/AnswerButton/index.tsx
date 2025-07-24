import { Button } from '@/shared/ui/Button';
import { Typography } from '@/shared/ui/Typography';

import type { QuestionOption } from '@/entities/question';
import type { ButtonProps } from '@/shared/ui/Button';

type Props = {
  option: QuestionOption;
  selectedAnswerId: string | null;
  onClick: ButtonProps['onClick'];
  correctAnswerId: QuestionOption['id'];
};

export const AnswerButton = ({ correctAnswerId, onClick, option, selectedAnswerId }: Props) => {
  if (!selectedAnswerId) {
    return (
      <Button
        prefix={
          <Typography as="span" variant="button" color="orange">
            {option.id}
          </Typography>
        }
        variant="option"
        fullWidth
        color="primary"
        onClick={onClick}
      >
        {option.text}
      </Button>
    );
  }

  const isCorrectAnswer = option.id === correctAnswerId;
  const isSelected = selectedAnswerId === option.id;

  return (
    <Button
      prefix={
        <Typography as="span" variant="button" color="orange">
          {option.id}
        </Typography>
      }
      variant="option"
      isBlinking={isCorrectAnswer || isSelected}
      disabled
      fullWidth
      color={isCorrectAnswer ? 'positive' : 'negative'}
    >
      {option.text}
    </Button>
  );
};
